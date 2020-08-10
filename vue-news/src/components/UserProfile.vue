<template>
    <div>
        <!-- 질문 상세 정보 -->
            <div class="user-container">
                <div>
                    <i class="fas fa-users"></i>
                </div>
                <div class="user-description">
                    <div>
                        {{ userInfo.id }}
                    </div>
                    <!-- <router-link v-bind:to="`/user/${userInfo.user}`">
                        {{ userInfo.id }}
                    </router-link> -->
                    <div class="time">
                        {{ userInfo.created }}
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    computed: {
        userInfo() {
            return this.$store.state.user;
        }        
    },
    // props: {
    //     info: Object
    // },
}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.fa-users {
    font-size: 2.5rem;
}
.user-description {
    padding-left: 8px;
}
.time {
    font-size: 0.7rem;
}
</style>