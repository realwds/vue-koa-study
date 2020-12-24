'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  
  NODE_ENV: '"development"',
  
  // base api
  VUE_APP_GIT_API: '"http://localhost:3000"',

  // github Client ID
  VUE_APP_CLIENT_ID: '"9801841099bc8a201d2f"',

  // // github Client secrets
  VUE_APP_CLIENT_SECRET: '"36580299c33ae6c26cbccdf90614adf0eaa7d3ec"',

  // // github 认证地址
  VUE_APP_AUTHORIZE_URI: '"https://github.com/login/oauth/authorize"',

  // // github 认证回调地址
  VUE_APP_REDIRECT_URI: '"http://localhost:3000/github/redirect"',

})
