import axios from 'axios';
export default {
    state: {
        products: [],
        productsFilter: ''
    },
    getters: {
        getProducts: state => state.products
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        SET_PRODUCTS_FILTER(state, filter) {
            state.productsFilter = filter;
        }
    },
    actions: {
        async fetchProducts({ state, commit }) {
            const { data } = await axios.get(
                "/shop/products/get-products", {
                    params: {
                        limit: 20,
                        filter: state.productsFilter
                    }
                }
            );
            commit("SET_PRODUCTS", data.products);
        },
    }

}