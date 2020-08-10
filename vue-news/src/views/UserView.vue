<template>
    <div>
        <!-- propsdata로 데이터를 내릴 수도 있음 -->
        <!-- <user-profile :info="userInfo"></user-profile> -->
        <user-profile></user-profile>
    </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
export default {
    components: {
        UserProfile,
    },
    // computed: {
    //     userInfo() {
    //         return this.$store.state.user;
    //     }        
    // },
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName);
    },
}
</script>

<style>

</style>