import { createStore } from "vuex";
import authAdmin from './modules/authAdmin';
import category from './modules/category';

const store = createStore({
  modules: {
    authAdmin,
    category
  },
});

export default store;
