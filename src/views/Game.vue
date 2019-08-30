<template>
  <div class="about">
    <h1>{{ game.name }}</h1>
    <h2>By {{ game.author }} | v. {{ game.version_name || game.version }}</h2>
    <p>{{ game.description }}</p>
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
    this.game = this.$store.getters['games/game'](this.dir)
  }
}
</script>

<style scoped>

</style>