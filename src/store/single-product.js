import axios from 'axios';
export default {
    state: {
        singleProduct: {}
    },
    getters: {
        getSingleProduct: state => state.singleProduct
    },
    mutations: {
        SET_SINGLE_PRODUCT(state, product) {
            state.singleProduct = product;
        }
    },
    actions: {
        async fetchSingleProduct({ commit }, id) {
            const { data } = await axios.get(
                "/shop/products/single-product/" + id
            );
            commit("SET_SINGLE_PRODUCT", data);
        },
    }

}