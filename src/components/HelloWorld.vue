<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <button @click="testGET">testGET Method</button>
    <button @click="testPOST">testPOST Method</button>
  </div>
</template>

<script>
import { GET, POST } from '../api/api'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      getParams: {
        id:123
      },
      postParams: {
        "name":"realwds",
        "age":"261",
        "sex":"male"
      }
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
