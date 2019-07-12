import {getQuestionsType, addQuestionsType} from '@/services/index'

export default {
  // 命名空间
  namespace: 'questions',

  // 模块的状态
  state: {
    questionsType: []
  },

  // 异步操作
  effects: {
    // 获取所有试题类型
    *getQuestionsType({payload}, {call, put}){
      let data = yield getQuestionsType();
      console.log('data...', data);
      yield put({
        type: 'updateQuestionsType',
        payload: data.data
      })
    },
    *addQuestionsType({payload}, {call, put}){
      console.log('payload...', payload);
      let data = yield addQuestionsType(payload);
      console.log('data...', data);
      if (data.code == 1){
        yield put({
          type: 'getQuestionsType'
        })
      }
    }
  },

  // 同步操作
  reducers: {
    updateQuestionsType(state, action) {
      return { ...state, questionsType: action.payload };
    },
  }
};
