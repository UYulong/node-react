import type { RequestOptions } from '@@/plugin-request/request';
import type { RequestConfig } from '@umijs/max';
// import { message, notification } from 'antd';

// 与后端约定的响应数据格式
// interface ResponseStructure {
//   success: boolean;
//   data: any;
//   errorCode?: number;
//   errorMessage?: string;
//   showType?: ErrorShowType;
// }

/**
 * @name 错误处理
 * pro 自带的错误处理， 可以在这里做自己的改动
 * @doc https://umijs.org/docs/max/request#配置
 */
export const requestConfig: RequestConfig = {
  // 错误处理： umi@3 的错误处理方案。
  errorConfig: {},

  // 请求拦截器
  requestInterceptors: [
    (config: RequestOptions) => {
      const token = localStorage.getItem('CMS_TOKEN')
      config.headers = {
        authorization: `Beare ${token}`
      }
      return { ...config };
    },
  ],

  // 响应拦截器
  responseInterceptors: [
    (response) => {
      if (response.status === 200) {
        localStorage.setItem('CMS_TOKEN', response.headers.authorization)
      }

      // 拦截响应数据，进行个性化处理
      return response;
    },
  ],
};
