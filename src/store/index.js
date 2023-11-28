import { createStore } from "vuex";
import authAdmin from './modules/authAdmin';
import authUser from './modules/authUser';

const store = createStore({
  modules: {
    authAdmin,
    authUser
  },
});

export default store;
