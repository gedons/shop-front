import api from '../../services/api';

const state = {
  adminToken: null,
};

const getters = {
  isAdminAuthenticated: (state) => !!state.adminToken,
};

const actions = {
  async adminLogin({ commit }, credentials) {
    try {
      const response = await api.post('/auth/login', credentials);
      const { authToken } = response.data;

      // Store the admin token in state
      commit('setAdminToken', authToken);
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};

const mutations = {
  setAdminToken(state, authToken) {
    state.adminToken = authToken;
    // Optionally, you can also store the token in local storage for persistence
    localStorage.setItem('adminToken', authToken);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
