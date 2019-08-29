<template>
    <v-row>
        <v-col
            v-for="(game, key) in games"
            :key="key"
        >
            <v-card
                class="mx-auto"
                max-width="400"
            >
                <v-img
                class="white--text"
                height="200px"
                :src="typeof game.background === 'string' && game.background.length ? game.background : ($store.getters['games/base_url']+'/games/'+key+'/background.png')"
                >
                    <v-card-title class="align-end fill-height">{{ game.name }}</v-card-title>
                </v-img>

                <v-card-text>
                <span>{{ game.author }}</span><br>
                <span class="text--primary">
                    <span>{{ game.description }}</span><br>
                    <span>v.{{ game.version_name || game.version }}</span>
                </span>
                </v-card-text>

                <v-card-actions>
                <v-btn
                    text
                    color="orange"
                    :to="`/game/`+key"
                >
                    Show
                </v-btn>
                <v-btn
                    text
                    color="orange"
                    :to="`/play/`+key"
                >
                    Play
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: ['games']
}
</script>

<style scoped>
    
</style>