<template>
    <div class="about">
        <h1 class="subheadint grey-text">About Gaming Hub</h1>
        <h2 class="display-3 text-uppercase">{{ count }} games released!</h2>
        <v-container class="my-5">

        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "About",
    computed: {
        ...mapGetters({
            games: 'games/games'
        }),
        count() {
          return Object.keys(this.games).length
        }
    }
}
</script>
