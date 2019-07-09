export default {
  // 命名空间
  namespace: 'example',

  // 模块的状态
  state: {},

  // 订阅
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  // 异步操作
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      // let data = yield xhr();

      yield put({ type: 'save' });
    },
  },

  // 同步操作
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
