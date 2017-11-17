import types from '../mutation-types';
let DEMO2 = types.DEMO2;

// 定义数据
const state = {
  number: 10
};
const mutations = {
  [DEMO2.ADD](state, payload) {
    state.number += payload.number;
  }
};

export default {
  state,
  mutations
};
