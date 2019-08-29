<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-btn to="/">Home</v-btn>
    <iframe :src="`https://jhechavarria.github.com/gaming-hub/games/`+dir"></iframe>
  </div>
</template>

<script>
export default {
  name: "Game",
  data() {
    return {
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