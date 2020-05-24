<template>
    <div>
        <p v-for="item of this.$store.state.jobs">
            <a :href="item.url"> 
                {{ item.title }} 
            </a>
            <small> 
                {{ item.time_ago }},{{ item.domain }}
            </small>
        </p>
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