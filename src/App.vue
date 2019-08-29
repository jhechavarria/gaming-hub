<template>
  <v-app class="grey lighten-4">

    <Navbar :gamesList="games" />

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-overlay v-model="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    overlay: true,
    games: {}
  }),
  created () {
      this.$store.dispatch('games/load')
      .then(loaded => {
        this.games = this.$store.getters['games/games']
        this.overlay = false
        console.log('LOADED')
      })
      .catch(console.error)
  }
}
</script>

<style>
.iframe-container {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
}

.iframe-container iframe {
   border: 0;
   height: 90%;
   left: 0;
   position: absolute;
   top: 0;
   width: 100%;
}

/* 4x3 Aspect Ratio */
.iframe-container-4x3 {
  padding-top: 75%;
}
</style>
