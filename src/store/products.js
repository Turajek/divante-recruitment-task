import axios from 'axios';
export default {
    state: {
        products: []
    },
    getters: {
        getProducts: state => state.products
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        }
    },
    actions: {
        async fetchProducts({ commit }) {
            const { data } = await axios.get(
                "/shop/products/get-products", {
                    params: {
                        limit: 20
                    }
                }
            );
            commit("SET_PRODUCTS", data.products);
        },
    }

}