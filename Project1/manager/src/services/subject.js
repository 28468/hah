import request from '../utils/request';

// 获取所有课程
export function getSubject() {
  return request.get('/exam/subject');
}
