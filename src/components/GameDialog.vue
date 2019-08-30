<template>
    <v-dialog
      v-model="dialog"
      fullscreen
    >
      <template v-if="value === undefined" v-slot:activator="{ on }">
        <v-btn
          color="red lighten-2"
          dark
          v-on="on"
        >
          Play
        </v-btn>
      </template>
      <v-card class="iframe-container">
        <v-card-text>
          <iframe v-if="dialog" :src="`https://jhechavarria.github.io/gaming-hub/games/`+dir"></iframe>
        </v-card-text>

        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn
            dark
            @click="value !== undefined ? $emit('closed') : null; open = false"
          >
            CLOSE
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import Vue from "vue"

export default {
    props: {
        value: {
            type: Boolean,
            default: undefined
        },
        game: {
            type: Object,
            required: true
        },
        dir: {
            type: String,
            required: true
        },
        hideBtn: Boolean
    },
    data: () => ({
        open: false
    }),
    computed: {
        dialog: {
            get() {
                return this.value || this.open
            },
            set(val) {
                this.open = val
            }
        }
    }
}
</script>

<style scoped>
    
</style>
