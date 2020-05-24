import Vue from 'vue';
import Vuex from 'vuex';

// import mutations from './mutations.js';
import actions from './actions.js'

Vue.use(Vuex);

// 상태관리 도구
export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        asks: [],
        user: {},
    },
    getters: {
        fetchedAsk(state) {
            return state.asks;
        }
    },
    mutations : {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        },
        SET_ASKS(state, asks) {
            state.asks = asks;
        },
        SET_USER(state, user) {
            state.user = user;
        }
    },
    actions,
    // getters,
    // mutations,
    // actions,
  })