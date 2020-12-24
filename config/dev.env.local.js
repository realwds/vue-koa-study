'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  
  NODE_ENV: '"development"',
  
  // base api
  VUE_APP_GIT_API: '"http://localhost:3000"',


  // github Client ID
  VUE_APP_CLIENT_ID: '"*********************"',

  // github Client secrets
  VUE_APP_CLIENT_SECRET: '"*********************"',

  // github 认证地址
  VUE_APP_AUTHORIZE_URI: '"https://github.com/login/oauth/authorize"',

  // github 认证回调地址
  VUE_APP_REDIRECT_URI: '"http://localhost:3000/github/redirect"',


  // gitee Client ID
  VUE_APP_GITEE_CLIENT_ID: '"*********************"',

  // gitee Client secrets
  VUE_APP_GITEE_CLIENT_SECRET: '"*********************"',

  // gitee 认证地址
  VUE_APP_GITEE_AUTHORIZE_URI: '"https://gitee.com/oauth/authorize"',

  // gitee 认证回调地址
  VUE_APP_GITEE_REDIRECT_URI: '"http://localhost:3000/gitee/redirect"',

})
