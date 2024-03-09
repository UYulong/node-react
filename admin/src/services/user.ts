import { request } from "@umijs/max";

/** 登录接口 POST /admin-api/login */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/admin-api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户信息接口 POST /admin-api/queryUserInfo */
export async function queryUserInfo() {
  return request<API.QueryUserInfo>('/admin-api/queryUserInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
