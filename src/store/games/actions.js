import axios from 'axios'

export default {
    load: context => {
        axios.get(context.getters['base_url']+'/gameslist.json')
        .then(({ data }) => {
            for (let index in data.games) {
                let game = data.games[index]

                if (context.getters['games'][game] !== undefined)
                    continue

                axios.get(context.getters['base_url']+'/games/'+game+'/manifest.json')
                .then(({ data }) => {
                    try {
                        console.log(typeof data)
                        console.log(data)
                        data = JSON.parse(data)
                        context.commit('REGISTER_GAME', [game, data])
                    }
                    catch(err) {
                        console.error(err)
                    }
                })
                .catch(console.error)
            }
        })
        .catch(console.error)
    }
}