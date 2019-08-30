<template>
    <div class="home">
        <h1 class="subheadint grey-text">Games</h1>
        <v-container class="my-5">
            <v-btn
                @click="filters=!filters"
            >Filters</v-btn>
            <GamesFilter v-if="filters" :games="games" @filtered="(val) => filteredGames=val" />
            <GamesList :games="filteredGames" />
        </v-container>
    </div>
</template>

<script>
import GamesList from '@/components/GamesList'
import GamesFilter from '@/components/GamesFilter'

export default {
    name: "Games",
    components: {
        GamesList,
        GamesFilter
    },
    data: () => ({
        filters: false,
        games: {},
        filteredGames: {}
    }),
    created() {
        this.games = this.$games.all()
        this.filteredGames = this.games
    }
}
</script>
