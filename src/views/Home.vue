<template>
    <div>
        <h1>Home</h1>

        <v-btn to="/about">About</v-btn>

        <v-btn
            color="primary"
            dark
            @click.stop="dialog = true"
        >Dilema</v-btn>

        <v-dialog
            v-model="dialog"
            full-width
        >
            <v-card class="iframe-container">
                <iframe src="https://jhechavarria.github.com/gaming-hub/games/dilema"></iframe>
            </v-card>
        </v-dialog>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: () => {
        return {
            dialog: false,
            games: {}
        }
    }
}
</script>
