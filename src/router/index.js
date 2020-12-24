import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import GitHub from '@/components/github/GitHub'
import GitHubCDN from '@/components/github/GitHubCDN'
import GitHubFile from '@/components/github/GitHubFile'

import GitEe from '@/components/gitee/GitEe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/github',
      name: 'GitHub',
      component: GitHub
    },{
      path: '/githubcdn',
      name: 'GitHubCDN',
      component: GitHubCDN
    },{
      path: '/githubfile',
      name: 'GitHubFile',
      component: GitHubFile
    },{
      path: '/gitee',
      name: 'GitEe',
      component: GitEe
    }
  ]
})
