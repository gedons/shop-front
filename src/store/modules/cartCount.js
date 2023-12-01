import api from '../../services/api';

const state = {
  cartCount: 0,
  cartItems: [], 
  loading: true
};

const mutations = {
  SET_CART_COUNT(state, count) {
    state.cartCount = count;
  },
  SET_CART_ITEMS(state, items) {
    state.cartItems = items;
  },

  SET_CART_LOADING: (state, cartloading) => {
    state.loading  = cartloading;
  },
  

};

const actions = {
  updateCartCount({ commit }, count) {
    commit('SET_CART_COUNT', count);
  },

  async fetchUserCart({ commit }) {
    try {
        commit('SET_CART_LOADING', true);
        const token = sessionStorage.getItem('userToken'); 
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };        
      const response = await api.get('/cart/get-cart', config); 
      const { cart } = response.data;
      commit('SET_CART_LOADING', false);
      
      // Assuming 'cart.products' contains the items in the cart
      commit('SET_CART_ITEMS', cart.products);
    } catch (error) {
      console.error('Error fetching user cart:', error);
      commit('SET_CART_LOADING', false);
      // Handle the error (e.g., show an error message)
    }
  },

  async clearUserCart({ commit }) {
    try {
        const token = sessionStorage.getItem('userToken'); 
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };  
      await api.delete('/cart/clear-all', config);

      commit('SET_CART_COUNT', 0);
    } catch (error) {
      // Handle the error if any
      console.error('Failed to clear user cart:', error);
    }
  },

  
   async updateCartAfterRemoval({ commit, dispatch }, productId) {
    try {
        const token = sessionStorage.getItem('userToken'); 
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };  
      await api.delete(`/cart/remove-from-cart/${productId}`, config);

      const configa = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
     };  
      const updatedCart = await api.get(`cart/get-cart`, configa);
      const updatedCartCount = updatedCart.data.cart.products.length;

      // Dispatch the existing action to update the cart count in Vuex
      dispatch('updateCartCount', updatedCartCount);
    } catch (error) {
      console.error('Failed to update cart after item removal:', error);
      // Handle error
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
