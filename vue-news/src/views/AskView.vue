<template>
    <div>
        <div v-for="ask of this.$store.state.asks">{{ ask.title }}</div>
    </div>
</template>

<script>

export default {
    created() {
        this.$store.dispatch('FETCH_ASKS');
    }
}
</script>

<style>

</style>