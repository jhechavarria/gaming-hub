<template>
  <div class="about">

    <v-card
    class="mx-auto"
    max-height="100%"
  >
    <v-img
      class="white--text"
      height="480px"
      :src="$store.getters['games/base_url']+`/games/dilema/background.png`"
    >
      <v-card-title class="align-end fill-height">Woops!</v-card-title>
    </v-img>

    <v-card-text>
      <span>Error 404</span><br>
      <span class="text--primary">
        <span>Sorry, such page does not exists...</span><br>
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn
        centered
        raised
        class="error mx-auto"
        to="/"
      >
        Back to homepage
      </v-btn>
    </v-card-actions>
  </v-card>

  </div>
</template>
