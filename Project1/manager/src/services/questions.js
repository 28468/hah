import request from '../utils/request';

// 获取所有试题分类
export function getQuestionsType() {
  return request.get('/exam/getQuestionsType');
}

// 添加试题分类
export function addQuestionsType(params) {
  return request.get('/exam/insertQuestionsType', {params});
}
