import axios from 'axios';

// HTTP Reqeust & Response와 관련된 기본 설정
const config = {
    baseUrl: "https://api.hnpwa.com/v0/",
}

function fetchNewsList() {
    // return axios.get(config.baseUrl + 'news/1.json')
    return axios.get(`${config.baseUrl}news/1.json`);
}

export {
    fetchNewsList
}