import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index.js';
import { fetchJobsList } from '../api/index.js';
import { fetchAsksList } from '../api/index.js';

Vue.use(Vuex);

// 상태관리 도구
export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        asks: [],
    },
    getters: {
        fetchedAsk(state) {
            return state.asks;
        }
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        },
        SET_ASKS(state, asks) {
            state.asks = asks;
        }
    },
    actions: {
        FETCH_NEWS({ commit }) {
            fetchNewsList()
            .then(({ data }) => {
                commit('SET_NEWS', data);
            })
            .catch(error => {
                console.log(error);
            });
        },
        FETCH_JOBS({ commit }) {
            fetchJobsList()
            .then(({ data }) => { 
                commit('SET_JOBS', data);
            })
            .catch(error => {
                console.log(error);
            })
        },
        FETCH_ASKS({ commit }) {
            fetchAsksList()
            // => 함수는 호출부의 this를, function 으로 묶은 건 다른 바인딩 this
            .then(({data}) => { 
                commit('SET_ASKS', data);
            })
            .catch(error => {
                console.log(error);
            }) 
        }
    },
    // getters,
    // mutations,
    // actions,
  })