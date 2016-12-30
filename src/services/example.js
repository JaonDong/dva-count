import request from '../utils/request';

export async function query() {
  return request('/api/users');
}

export async function login(params){
  return request('/api/account/Authenticate',{
    method:'post',
    data:params,
  });
}