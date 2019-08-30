import Game from './game'

export default {
    install: function (Vue, options) {
        Vue.mixin({
            created: function () {
                this.$games = new Game(this, options)
            }
        })

        Vue.prototype.$games = function () {
            return this
        }
    }
}
