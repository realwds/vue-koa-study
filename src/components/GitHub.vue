<template>
  <div class="github">
    <img class="avator_url" :src="gtUser.avatar_url" alt />
    <p>昵称：{{gtUser.name}}</p>
    <p>邮箱：{{gtUser.email}}</p>
    <p>创建时间：{{gtUser.created_at}}</p>
    <p>GitHub地址：{{gtUser.html_url}}</p>
  </div>
</template>

<script>
import { getUser } from '@/api/api'

export default {
  name: 'GitHub',
  data() {
    return {
      params: {
        access_token: this.$route.query.access_token
      },
      gtUser: {}
    }
  },
  created() {
    this.getUser()
  },
  methods: {
    async getUser() {
      const data = await getUser(this.params)
      if(!data) return
      this.gtUser = data.data
    }
  },
}
</script>

<style lang="scss" scoped>
  .github {
    .avator_url{
      width: 200px;
      height: 200px;
    }
  }
</style>
