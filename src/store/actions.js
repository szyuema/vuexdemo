import types from './mutation-types';
let {
  DEMO1,
  DEMO2
} = types;

export const demo1add = ({ commit, dispatch, state }, payload) => {
  commit(DEMO1.ADD, {
    number: payload.number
  });
};

export const demo2add = ({ commit, dispatch, state }, payload) => {
  commit(DEMO2.ADD, {
    number: payload.number
  });
};

export const alladd = ({ commit, dispatch, state }, payload) => {
  // commit(ALL.ADD, {
  //   number: payload.number
  // });
  let param = {
    number: payload.number
  };
  dispatch('demo1add', param);
  dispatch('demo2add', param);
};
