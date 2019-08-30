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
                    <span v-if="game.version_name">
                        v.{{ game.version_name.split(' ')[0] }}
                        <v-chip small :class="'caption '+game.version_name.split(' ')[1].toLowerCase()">{{ game.version_name.split(' ')[1].toUpperCase() }}</v-chip>
                    </span>
                    <span v-else>v.{{ game.version }}</span>
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
                    @click="dir=key; game=game; dialog=true"
                >
                    Play
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <GameDialog v-model="dialog" :dir="dir" :game="game" @closed="dialog=false" />
    </v-row>
</template>

<script>
import GameDialog from "@/components/GameDialog"

export default {
    props: {
        games: {
            type: Object
        }
    },
    components: {
        GameDialog
    },
    data: () => ({
        dir: "",
        game: {},
        dialog: false
    })
}
</script>

<style scoped>
.v-chip.prealpha {
    background: tomato;
}
.v-chip.alpha {
    background: orange;
}
.v-chip.beta {
    background: yellow;
}
.v-chip.production {
    background: green;
}
</style>
