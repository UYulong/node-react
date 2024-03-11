export default [
  {
    path: '/login',
    name: '登录',
    layout: false,
    component: './Login'
  },

  {
    path: '/welcome',
    name: '欢迎',
    icon: 'smile',
    component: './Welcome'
  },

  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin',
        redirect: '/admin/sub-page'
      },
      {
        path: '/admin/sub-page',
        name: '二级管理页',
        component: './Admin'
      },
    ],
  },

  {
    path: '/list',
    name: '查询表格',
    icon: 'table',
    component: './TableList'
  },

  {
    path: '/profile',
    icon: 'user',
    name: '个人中心',
    access: 'canAdmin',
    routes: [
      {
        path: '/profile',
        redirect: '/profile/settings'
      },
      {
        path: '/profile/settings',
        name: '个人设置',
        component: './User/Profile'
      },
    ],
  },

  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
