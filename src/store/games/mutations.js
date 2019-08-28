export default {
    REGISTER_GAME: (state, data) => {
        state.games[data[0]] = data[1]
    }
}