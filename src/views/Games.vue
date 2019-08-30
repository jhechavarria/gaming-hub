<template>
    <div class="home">
        <h1 class="subheadint grey-text">Games</h1>
        <v-text-field
            v-model="search"
            name="name"
            label="Search Game"
        ></v-text-field>
        <v-container class="my-5">
            <GamesList :games="filteredList" />
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GamesList from '@/components/GamesList'

export default {
    name: "Games",
    components: {
        GamesList
    },
    data: () => {
        return {
            dialog: false,
            search: ""
        }
    },
    computed: {
        ...mapGetters({
            games: 'games/games'
        }),
        filteredList() {
            let games = Object.assign({}, this.games)
            for (let key in games) {
                let game = games[key]
                if (!game.name.toLowerCase().includes(this.search.toLowerCase()))
                    delete games[key]
            }
            return games
        }
    }
}
</script>
