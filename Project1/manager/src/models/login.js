import {login} from '../services/index'

export default {
  // 命名空间
  namespace: 'login',

  // 模块的状态
  state: {
    isLogin: false
  },

  // 异步操作
  effects: {
    *login({ payload, type }, {call, put}){
      console.log('payload...', payload, type)
      let data = yield call(login, payload);
      console.log('data...', data);

      // 调用reduce改变登陆状态
      yield put({
        type: 'updateLogin',
        payload: data.code==1
      })
    }
  },

  // 同步操作
  reducers: {
    updateLogin(state, action) {
      return { ...state, isLogin: action.payload };
    },
  },

};
