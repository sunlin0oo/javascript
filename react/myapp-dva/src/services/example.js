import request from '../utils/request';
// 数据请求所在地
export function query() {
  return request('/api/users');
}
