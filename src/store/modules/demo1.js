import types from '../mutation-types';
let DEMO1 = types.DEMO1;

// 定义数据
const state = {
  number: 2
};
const mutations = {
  [DEMO1.ADD](state, payload) {
    state.number += payload.number;
  }
};

export default {
  state,
  mutations
};
