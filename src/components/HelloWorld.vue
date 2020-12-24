<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <!-- <button @click="testGET">testGET Method</button>
    <button @click="testPOST">testPOST Method</button> -->
    <br/>
    <p><a :href="githubUrl" target="_blank">LOIGN TO GITHUB</a></p>
    <p><a :href="giteeUrl" target="_blank">LOIGN TO GITEE</a></p>
  </div>
</template>

<script>
import { GET, POST } from '@/api/api'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to vue-koa-git-api',
      getParams: {
        id: 100
      },
      postParams: {
        "name": "realwds",
        "age": "261",
        "sex": "male"
      },
    }
  },
  computed: {
    githubUrl(){
      return `${ process.env.VUE_APP_AUTHORIZE_URI }?client_id=${ process.env.VUE_APP_CLIENT_ID }&redirect_uri=${ process.env.VUE_APP_REDIRECT_URI }`
    },
    giteeUrl(){
      return `${ process.env.VUE_APP_GITEE_AUTHORIZE_URI }?client_id=${ process.env.VUE_APP_GITEE_CLIENT_ID }&redirect_uri=${ process.env.VUE_APP_GITEE_REDIRECT_URI }&response_type=code`
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

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
