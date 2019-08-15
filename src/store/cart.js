export default {
    state: {
        cart: []
    },
    getters: {
        getCart: state => state.cart,
        isProductAdded: state => productId => state.cart.filter(el => el.id === productId).length > 0,
        getCartTotal(state) {
            var total = 0;
            state.cart.forEach(e => total += e.price);
            return total
        }
    },
    mutations: {
        ADD_TO_CART(state, product) {
            state.cart.push(product);
        }
    },

}