export default class Game {
    constructor (Vue, options) {
        this.$store = Vue.$store
    }

    load () {
        return this.$store.dispatch('games/load')
    }

    paginated () {
        return this.$store.dispatch('games/paginated')
    }

    all () {
        return this.$store.getters['games/games']
    }

    get (game) {
        return this.$store.getters['games/game'](game)
    }

    search ({ name, authors, developers, version_names, locales }, games=null) {
        games = games === null ? this.all() : games

        for (let key in games) {
            let game = games[key]
            game.version_name = game.version_name ? game.version_name.split(' ')[1].toLowerCase() : null

            if (!game.name.toLowerCase().includes(name.toLowerCase()))
                delete games[key]
            else if (version_names.length && game.version_name && !version_names.includes(game.version_name))
                delete games[key]
            else if (locales.length && game.default_locale && !locales.includes(game.default_locale))
                delete games[key]
            else if (authors.length && game.author && !authors.includes(game.author))
                delete games[key]
            else if (developers.length && game.developer && !developers.includes(game.developer))
                delete games[key]
        }

        return games
    }

    filter (test) {
        let games = this.all()

        for (let key in games) {
            let game = games[key]

            if (!test(game))
                delete games[key]
        }

        return games
    }
}
