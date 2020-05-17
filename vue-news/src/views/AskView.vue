<template>
    <div>
        <div v-for="ask in asks">{{ ask.title }}</div>
    </div>
</template>

<script>
import { fetchAsksList } from '../api/index.js';

export default {
    data() {
        return {
            asks: []
        }
    },
    created() {
        fetchAsksList()
        .then(response => { 
            console.log(response);
            this.asks = response.data;
        })
        .catch(error => {
            console.log(error);
        })
    }
}
</script>

<style>

</style>