import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
// import demo1 from './modules/demo1';
// import demo2 from './modules/demo2';
let modules = require('./modules');

Vue.use(Vuex);
const store = new Vuex.Store({
  actions,
  getters,
  modules,
  strict: true
});

// 支持热加载
if (module.hot) {
  Object.keys(modules).forEach(modName => {
    module.hot.accept(['./modules/' + modName], () => {
      const _module = require('./modules/' + modName).default;
      const o = {};
      o['modules_' + modName] = _module;
      store.hotUpdate(o);
    });
  });
}
export default store;
