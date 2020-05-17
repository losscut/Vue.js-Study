<template>
    <div>
       <div v-for="user of this.$store.state.news">{{ user.title }}</div>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style>

</style>