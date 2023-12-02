import { createStore } from "vuex";
import authAdmin from './modules/authAdmin';
import authUser from './modules/authUser';
import cartCount from './modules/cartCount';

const store = createStore({
  modules: {
    authAdmin,
    authUser,
    cartCount
  },
});

export default store;
