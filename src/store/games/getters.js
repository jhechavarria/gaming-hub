export default {
    base_url: state => state.base_url,
    games: state => state.games,
    page: state => (page, itemsPerPage = 10) => {
        let games = state.games
        return games.splice(page * itemsPerPage - itemsPerPage, itemsPerPage)
    },
    game: state => game => {
        return state.games[game] !== undefined ? state.games[game] : null
    }
}