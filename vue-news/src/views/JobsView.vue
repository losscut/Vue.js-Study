<template>
    <div>
        <div v-for="job of this.$store.state.jobs">{{ job.title }}</div>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('FETCH_JOBS');
    }

    //created,
    //beforeMount,
    //mounted,    // reactivity로 gui가 다시 그려지게 됨
}
</script>

<style>

</style>