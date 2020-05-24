<template>
    <div>
        <p v-for="item of fetchedAsk">
            <router-link v-bind:to="`/item/${item.id}`">
                    {{ item.title }}
            </router-link>
            <small> 
                {{ item.time_ago}} by {{ item.user }}
            </small>
        </p>
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