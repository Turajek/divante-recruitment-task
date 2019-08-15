
import axios from 'axios'
import store from '../store/index'
import Vue from 'vue';

axios.defaults.baseURL = 'https://grocery-shop.herokuapp.com/'

axios.interceptors.request.use(config => {
    store.commit('SET_LOADER', true);
    return config;
});

axios.interceptors.response.use(response => {
    store.commit('SET_LOADER', false);
    return Promise.resolve(response);
}, error => {
    store.commit('SET_LOADER', false);

    Vue.prototype.$notify({
        group: "foo",
        type: "error",
        title: "Error occured",
        text: error.respone ? error.response.data.message : 'Try again later'
    });
    return Promise.reject(error);
});