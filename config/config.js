// https://umijs.org/config/
import { join } from 'path';
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/submission',
      name: 'Submissions',
      hideInMenu: true,
      routes: [
        {
          // component: './submission/Create',
          component: './submission/editor',
          path: '/submission/:projectId/create',
          name: 'Create Submission',
          //layout: true,
        },
        {
          path: '/submission/list',
          component: './submission/Index',
          name: 'Submissions List',
          //layout: true,
        },
        {
          path: '/submission/:system_id',
          component: './submission/Details',
          name: 'Submission Details',
          layout: true,
          hideInMenu: true,
        },
      ],
    },
    {
      path: '/',
      redirect: '/library/directory',
    },
    {
      path: '/user',
      layout: false,
      routes: [
        {
          path: '/user/login',
          layout: false,
          name: 'login',
          component: './user/Login',
        },
        {
          path: '/user',
          redirect: '/user/login',
        },
        {
          name: 'register-result',
          icon: 'smile',
          path: '/user/register-result',
          component: './user/register-result',
        },
        {
          name: 'register',
          icon: 'smile',
          path: '/user/register',
          component: './user/register',
        },
        {
          component: '404',
        },
      ],
    },
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   icon: 'dashboard',
    //   routes: [
    //     {
    //       path: '/dashboard',
    //       redirect: '/dashboard/analysis',
    //     },
    //     {
    //       name: 'analysis',
    //       icon: 'smile',
    //       path: '/dashboard/analysis',
    //       component: './dashboard/analysis',
    //     },
    //     {
    //       name: 'monitor',
    //       icon: 'smile',
    //       path: '/dashboard/monitor',
    //       component: './dashboard/monitor',
    //     },
    //     {
    //       name: 'workplace',
    //       icon: 'smile',
    //       path: '/dashboard/workplace',
    //       component: './dashboard/workplace',
    //     },
    //   ],
    // },
    {
      /***********************
       *
       * the module that we created
       *
       * ******************* */

      path: '/projects',
      icon: 'FolderOutlined',
      name: 'Projects',
      routes: [
        {
          path: '/projects',
          redirect: '/projects/projectList',
        },
        {
          name: 'Project List',
          icon: 'smile',
          path: '/projects/projectList',
          component: './projects/projectList',
        },
        {
          hideInMenu: true,
          name: 'Submission List',
          icon: 'smile',
          path: '/projects/submissionList',
          component: './submission/Index',
        },
        {
          hideInMenu: true,
          name: 'Setting',
          icon: 'smile',
          path: '/projects/setting',
          component: './submission/setting',
        },
      ],
    },
    {
      /***********************
       *
       * the module that we created
       *
       * ******************* */
      path: '/library',
      icon: 'ReadOutlined',
      name: 'Library',
      routes: [
        {
          path: '/library',
          redirect: '/library/editor',
        },
        {
          name: 'directory',
          icon: 'smile',
          path: '/library/directory',
          component: './library/directory',
        },
        {
          hideInMenu: true,
          name: 'editor',
          icon: 'smile',
          path: '/library/editor',
          component: './library/editor',
        },
        {
          hideInMenu: true,
          name: 'setCreator',
          icon: 'smile',
          path: '/library/setCreator',
          component: './library/setCreator',
        },
      ],
    },
    {
      /***********************
       *
       * the module that we created
       *
       * ******************* */
      path: '/companyProfile',
      icon: 'HddOutlined',
      name: 'Company Profile',
      routes: [
        {
          path: '/companys',
          redirect: '/',
        },
      ],
    },
    {
      path: '/Settings',
      icon: 'SettingOutlined',
      name: 'Settings',
      routes: [
        {
          path: '/Settings',
          redirect: '/',
        },
      ],
    },
    {
      path: '/Administration',
      icon: 'UserOutlined',
      name: 'Administration',
      routes: [
        {
          path: '/Administration',
          redirect: '/',
        },
      ],
    },
    {
      hideInMenu: true,
      hideChildrenInMenu: true,
      path: '/form', //form template, just for reference
      icon: 'form',
      name: 'form',
      routes: [
        {
          path: '/form',
          redirect: '/form/basic-form',
        },
        {
          name: 'basic-form',
          icon: 'smile',
          path: '/form/basic-form',
          component: './form/basic-form',
        },
        {
          name: 'step-form',
          icon: 'smile',
          path: '/form/step-form',
          component: './form/step-form',
        },
        {
          name: 'advanced-form',
          icon: 'smile',
          path: '/form/advanced-form',
          component: './form/advanced-form',
        },
      ],
    },
    {
      hideInMenu: true,
      hideChildrenInMenu: true,
      path: '/list', //list template, just for reference
      icon: 'table',
      name: 'list',
      routes: [
        {
          path: '/list/search',
          name: 'search-list',
          component: './list/search',
          routes: [
            {
              path: '/list/search',
              redirect: '/list/search/articles',
            },
            {
              name: 'articles',
              icon: 'smile',
              path: '/list/search/articles',
              component: './list/search/articles',
            },
            {
              name: 'projects',
              icon: 'smile',
              path: '/list/search/projects',
              component: './list/search/projects',
            },
            {
              name: 'applications',
              icon: 'smile',
              path: '/list/search/applications',
              component: './list/search/applications',
            },
          ],
        },
        {
          path: '/list',
          redirect: '/list/table-list',
        },
        {
          name: 'table-list',
          icon: 'smile',
          path: '/list/table-list',
          component: './list/table-list',
        },
        {
          name: 'basic-list',
          icon: 'smile',
          path: '/list/basic-list',
          component: './list/basic-list',
        },
        {
          name: 'card-list',
          icon: 'smile',
          path: '/list/card-list',
          component: './list/card-list',
        },
      ],
    },
    {
      hideInMenu: true,
      hideChildrenInMenu: true,
      path: '/profile', //detail page template, just for reference, content not translated
      name: 'profile',
      icon: 'profile',
      routes: [
        {
          path: '/profile',
          redirect: '/profile/basic',
        },
        {
          name: 'basic',
          icon: 'smile',
          path: '/profile/basic',
          component: './profile/basic',
        },
        {
          name: 'advanced',
          icon: 'smile',
          path: '/profile/advanced',
          component: './profile/advanced',
        },
      ],
    },
    {
      hideInMenu: true,
      hideChildrenInMenu: true,
      name: 'result', //result page template, just for reference, content not translated
      icon: 'CheckCircleOutlined',
      path: '/result',
      routes: [
        {
          path: '/result',
          redirect: '/result/success',
        },
        {
          name: 'success',
          icon: 'smile',
          path: '/result/success',
          component: './result/success',
        },
        {
          name: 'fail',
          icon: 'smile',
          path: '/result/fail',
          component: './result/fail',
        },
      ],
    },
    {
      hideInMenu: true,
      hideChildrenInMenu: true,
      name: 'exception', //exception template, just for reference
      icon: 'warning',
      path: '/exception',
      routes: [
        {
          path: '/exception',
          redirect: '/exception/403',
        },
        {
          name: '403',
          icon: 'smile',
          path: '/exception/403',
          component: './exception/403',
        },
        {
          name: '404',
          icon: 'smile',
          path: '/exception/404',
          component: './exception/404',
        },
        {
          name: '500',
          icon: 'smile',
          path: '/exception/500',
          component: './exception/500',
        },
      ],
    },
    {
      hideInMenu: true,
      hideChildrenInMenu: true,
      name: 'account', //personal profile template, just for reference
      icon: 'user',
      path: '/account',
      routes: [
        {
          path: '/account',
          //redirect: '/account/center',
          redirect: '/',
        },
        {
          name: 'center',
          icon: 'smile',
          path: '/account/center',
          component: './account/center',
          redirect: '/',
        },
        {
          name: 'settings',
          icon: 'smile',
          path: '/account/settings',
          component: './account/settings',
          redirect: '/',
        },
      ],
    },
    {
      hideInMenu: true,
      hideChildrenInMenu: true,
      name: 'editor', // flowcharts & diagrams editortemplate, just for reference, content not translated
      icon: 'highlight',
      path: '/editor',
      routes: [
        {
          path: '/editor',
          redirect: '/editor/flow',
        },
        {
          name: 'flow',
          icon: 'smile',
          path: '/editor/flow',
          component: './editor/flow',
        },
        {
          name: 'mind',
          icon: 'smile',
          path: '/editor/mind',
          component: './editor/mind',
        },
        {
          name: 'koni',
          icon: 'smile',
          path: '/editor/koni',
          component: './editor/koni',
        },
      ],
    },
    {
      component: '404',
    },
  ],
  access: {},
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // 如果不想要 configProvide 动态设置主题需要把这个设置为 default
    // 只有设置为 variable， 才能使用 configProvide 动态设置主色调
    // (translate) set root-entry-name as 'default' if configProvide theme is not needed
    //configProvide theme can be used only when root-entry-name set as 'variable'
    // https://ant.design/docs/react/customize-theme-variable-cn
    'root-entry-name': 'variable',
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // Fast Refresh 热更新
  fastRefresh: {},
  openAPI: [
    {
      requestLibPath: "import { request } from 'umi'",
      // online version
      // schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json"
      schemaPath: join(__dirname, 'oneapi.json'),
      mock: false,
    },
    {
      requestLibPath: "import { request } from 'umi'",
      schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
      projectName: 'swagger',
    },
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  //mfsu: {},
  //webpack5: {},
  exportStatic: {},
  //publicPath:"/"
});
