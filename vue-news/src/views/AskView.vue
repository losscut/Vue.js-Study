<template>
    <div>
        <div v-for="ask of asks">{{ ask.title }}</div>
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
        // => 함수는 호출부의 this를, function 으로 묶은 건 다른 바인딩 this
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