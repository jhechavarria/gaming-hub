<template>
    <div>
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "Games",
    data: () => {
        return {
            dialog: false
        }
    },
    computed: {
        ...mapGetters({
            games: 'games/games'
        })
    }
}
</script>

<style scoped>
    
</style>