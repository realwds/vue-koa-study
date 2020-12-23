import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GitHub from '@/components/GitHub'
import GitHubCDN from '@/components/GitHubCDN'
import GitHubFile from '@/components/GitHubFile'

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
    }
  ]
})
