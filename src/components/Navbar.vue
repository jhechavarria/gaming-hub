<template>
    <nav>
        <v-app-bar
            app
            collapse-on-scroll
            elevate-on-scroll
        >
            <v-toolbar-title class="text-uppercase grey-text">
                <span class="font-weight-light">Gaming</span>
                <span>Hub</span>
            </v-toolbar-title>

            <div class="flex-grow-1"></div>

            <v-tabs
                centered
            >
                <v-tab to="/">Home</v-tab>
                <v-tab to="/games">Games</v-tab>
                <v-tab to="/about">About</v-tab>
            </v-tabs>

            <div class="flex-grow-1"></div>

            <v-autocomplete
                v-if="search"
                v-model="select"
                :loading="loading"
                :items="games"
                clearable
                hide-details
                label="Search for a game..."
            ></v-autocomplete>

            <v-btn icon @click="search = !search">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </v-app-bar>
    </nav>
</template>

<script>
export default {
    props: ['gamesList'],
    data: () =>  ({
        search: false,
        select: null,
        loading: false,
        games: []
    }),
    watch: {
        gamesList(games) {
            for (let key in games) {
                this.games.push({
                    value: key,
                    text: games[key].name
                })
            }
        },
        select(game) {
            this.$router.push({
                name: 'game',
                params: { game }
            })
            this.select = null
            this.search = false
        }
    }
}
</script>

<style scoped>
    
</style>