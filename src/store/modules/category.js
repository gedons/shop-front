import api from '../../services/api';

const state = {
  categories: [],
};

const getters = {
  allCategories: (state) => state.categories,
};

const actions = {
  async fetchCategories({ commit }) {
    try {
      const response = await api.get('/categories/all');
      commit('setCategories', response.data);
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  // Other actions for add, update, delete categories...
};

const mutations = {
  setCategories(state, categories) {
    state.categories = categories;
  },
  // Other mutations for add, update, delete categories...
};

export default {
  state,
  getters,
  actions,
  mutations,
};
