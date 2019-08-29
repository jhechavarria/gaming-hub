<template>
    <div class="home">
        <h1 class="subheadint grey-text">Games</h1>
        <v-container class="my-5">
            <GamesList :games="games" />
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
            dialog: false
        }
    },
    computed: {
        ...mapGetters({
            games: 'games/games'
        })
    }
}
</script>
