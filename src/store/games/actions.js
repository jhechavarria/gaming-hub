import axios from 'axios'

export default {
    load (context) {
        return new Promise((resolve, reject) => {
            var count = 0

            axios.get(context.getters['base_url'] + '/gameslist.json')
            .then(({ data }) => {
                context.dispatch('_keepUnique', data.games)
                let games = data.games
                for (let index in games) {
                    let game = games[index]

                    axios.get(context.getters['base_url'] + '/games/' + game + '/manifest.json')
                    .then(({ data }) => {
                        if (typeof data !== 'object') {
                            count += 1;
                            if (count === games.length)
                                resolve(true)
                            return
                        }
                        context.commit('REGISTER_GAME', [game, data])
                        count += 1;
                        if (count === games.length)
                            resolve(true)
                    })
                    .catch(reject)
                }
            })
            .catch(reject)
        })
    },
    paginated: (context, { page, itemsPerPage } = { page: 1, itemsPerPage: 10 }) => {
        console.log(page, itemsPerPage)
        return new Promise((resolve, reject) => {
            var count = 0

            axios.get(context.getters['base_url'] + '/gameslist.json')
            .then(({ data }) => {
                context.dispatch('_keepUnique', data.games)
                let games = data.games
                games = games.splice(page * itemsPerPage - itemsPerPage, itemsPerPage)
                for (let index in games) {
                    let game = games[index]

                    if (context.getters['games'][game] !== undefined) {
                        count += 1;
                        if (count === games.length)
                            resolve(true)
                        continue
                    }

                    axios.get(context.getters['base_url'] + '/games/' + game + '/manifest.json')
                    .then(({ data }) => {
                        if (typeof data !== 'object') {
                            count += 1;
                            if (count === games.length)
                                resolve(true)
                            return
                        }
                        context.commit('REGISTER_GAME', [game, data])
                        count += 1;
                        if (count === games.length)
                            resolve(true)
                    })
                    .catch(reject)
                }
            })
            .catch(reject)
        })
    },
    _keepUnique(context, data) {
        for (let i in data) {
            for (let j in data) {
                if (data[j] === data[i] && i !== j)
                    data.splice(j, 1)
            }
        }
    }
}