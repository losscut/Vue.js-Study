<template>
    <div>
        <div v-for="ask of fetchedAsk">{{ ask.title }}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {

        ...mapGetters([
            'fetchedAsk'
        ]),

        // #2
        // ...mapState({
        //     fetchedAsk: state => state.ask
        // })

        // #1
        // ask() {
        //     return this.$store.state;
        // }
    },
    created() {
        this.$store.dispatch('FETCH_ASKS');
    }
}
</script>

<style>

</style>