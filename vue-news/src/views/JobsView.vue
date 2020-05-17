<template>
    <div>
        <!-- <div v-for="job in jobs" v-bind:key="print">{{ job.title }}</div> -->
    </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js';

export default {
    data() {
        return {
            jobs: []
        }
    },
    created() {
        fetchJobsList()
        .then(response => { 
            console.log(response);
            this.jobs = response.data;
        })
        .catch(error => {
            console.log(error);
        })
    }

    //created,
    //beforeMount,
    //mounted,    // reactivity로 gui가 다시 그려지게 됨
}
</script>

<style>

</style>