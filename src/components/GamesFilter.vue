<template>
    <div>
        <v-row>
            <v-col>
                <v-text-field
                    v-model="search"
                    name="name"
                    label="Search Game"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-select
                    v-model="version_names_filter"
                    chips
                    clearable
                    deletable-chips
                    multiple
                    :items="version_names"
                    label="Filter version"
                ></v-select>
            </v-col>
            <v-col>
                <v-select
                    v-model="authors_filter"
                    chips
                    clearable
                    deletable-chips
                    multiple
                    :items="authors"
                    label="Filter author"
                ></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-select
                    v-model="developers_filter"
                    chips
                    clearable
                    deletable-chips
                    multiple
                    :items="developers"
                    label="Filter developer"
                ></v-select>
            </v-col>
            <v-col>
                <v-select
                    v-model="locales_filter"
                    chips
                    clearable
                    deletable-chips
                    multiple
                    :items="locales"
                    label="Filter language"
                ></v-select>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: ['games'],
    data: () => ({
        games: {},
        search: "",
        version_names: [],
        version_names_filter: [],
        authors: [],
        authors_filter: [],
        developers: [],
        developers_filter: [],
        locales: [],
        locales_filter: [],
        offline_enabled: false
    }),
    computed: {
        filteredList() {
            let games = Object.assign({}, this.games)
            for (let key in games) {
                let game = games[key]
                let version_name = game.version_name ? game.version_name.split(' ')[1].toLowerCase() : null
                if (!game.name.toLowerCase().includes(this.search.toLowerCase()))
                    delete games[key]
                else if (this.version_names_filter.length && game.version_name && !this.version_names_filter.includes(version_name))
                    delete games[key]
                else if (this.locales_filter.length && game.default_locale && !this.locales_filter.includes(game.default_locale))
                    delete games[key]
                else if (this.authors_filter.length && game.author && !this.authors_filter.includes(game.author))
                    delete games[key]
                else if (this.developers_filter.length && game.developer && !this.developers_filter.includes(game.developer))
                    delete games[key]
            }
            return games
        }
    },
    watch: {
        filteredList(val) {
            this.$emit('filtered', val)
        }
    },
    created() {
        let games = Object.assign({}, this.games)

        for (let key in games) {
            let game = games[key]
            if (game.version_name) {
                let version_name = game.version_name.split(' ')[1].toUpperCase()
                if (!this.version_names.includes(version_name))
                    this.version_names.push({
                        text: version_name,
                        value: version_name.toLowerCase()
                    })
            }
            if (game.developer && !this.developers.includes(game.developer))
                this.developers.push(game.developer)
            if (game.author && !this.authors.includes(game.author))
                this.authors.push(game.author)
            if (game.default_locale && !this.locales.includes(game.default_locale))
                this.locales.push(game.default_locale)
        }

        this.$emit('filtered', this.games)
    }
}
</script>

<style scoped>
    
</style>
