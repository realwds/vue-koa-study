<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <!-- <button @click="testGET">testGET Method</button>
    <button @click="testPOST">testPOST Method</button> -->
    <br/>
    <a :href="githubUrl" target="_blank">LOIGN TO GITHUB</a> 
    <br/><br/>
    <router-link :to="{ path:'/GitHub', query:{ access_token: '092efc4d0eaf8af0cba699df42ffcf357a0e791a'}}">GITHUB PAGE</router-link>  
  </div>
</template>

<script>
import { GET, POST } from '@/api/api'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to vue-koa-study',
      githubParams: {
        client_id: '9801841099bc8a201d2f',
        client_secret: '36580299c33ae6c26cbccdf90614adf0eaa7d3ec',
        authorize_uri: 'https://github.com/login/oauth/authorize',
        redirect_uri: 'http://localhost:3000/github/redirect'
      },
      getParams: {
        id:123
      },
      postParams: {
        "name":"realwds",
        "age":"261",
        "sex":"male"
      },
    }
  },
  computed: {
    githubUrl(){
      return `${this.githubParams.authorize_uri}?client_id=${this.githubParams.client_id}&redirect_uri=${this.githubParams.redirect_uri}`
    }
  },
  methods: {
    async testGET(){
      const data  = await GET(this.getParams)
      console.log(data)
    },
    async testPOST(){
      const data  = await POST(this.postParams)
      console.log(data)
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
