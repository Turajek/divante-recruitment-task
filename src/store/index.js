import Vue from 'vue'
import Vuex from 'vuex'

import products from './products';
import singleProduct from './single-product';
import loader from './loader';
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        loader,
        products,
        singleProduct,
    }
})