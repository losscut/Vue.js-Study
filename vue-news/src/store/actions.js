import { fetchNewsList, fetchJobsList, fetchAsksList, fetchUserInfo } from '../api/index.js';

export default {
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
    },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
        .then(({data}) => { 
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log(error);
        }) 
    }
}