<template>
  <div class="about">
    <h1>{{ game.name }}</h1>
    <h2>By {{ game.author }} | v. {{ game.version_name || game.version }}</h2>
    <p>{{ game.description }}</p>
    <v-img
      class="white--text"
      height="200px"
      :src="typeof game.background === 'string' && game.background.length ? game.background : ($store.getters['games/base_url']+'/games/'+dir+'/background.png')"
    >
    </v-img>
    <GameDialog :dir="dir" :game="game" />
  </div>
</template>

<script>
import GameDialog from "@/components/GameDialog"

export default {
  name: "Game",
  components: {
    GameDialog
  },
  data() {
    return {
      dialog: false,
      dir: "",
      game: {}
    }
  },
  created() {
    this.dir = this.$route.params.game
    this.game = this.$games.get(this.dir)
  }
}
</script>

<style scoped>

</style>