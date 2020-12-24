<template>
  <div class="github">
    <div v-if="gtUser.name">
      <img class="avator_url" :src="gtUser.avatar_url" alt />
      <p>昵称：{{ gtUser.name }}</p>
      <p>邮箱：{{ gtUser.email }}</p>
      <p>创建时间：{{ gtUser.created_at }}</p>
      <p>
        GitHub地址：<a :href="gtUser.html_url" target="_blank">{{
          gtUser.html_url
        }}</a>
      </p>
      <p>
        <router-link
          :to="{
            path: '/GitHubCDN',
            query: {
              access_token: params.access_token,
              login_address: gtUser.login,
            },
          }"
          >GITUB CDN</router-link
        >
      </p>
    </div>
    <div v-else>数据加载中......</div>
  </div>
</template>

<script>
import { getUser } from "@/api/api";

export default {
  name: "GitHub",
  data() {
    return {
      params: {
        access_token: this.$route.query.access_token,
      },
      gtUser: {},
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    async getUser() {
      const data = await getUser(this.params);
      if (!data) return;
      this.gtUser = data.data;
    },
  },
};
</script>

<style scoped>
.avator_url {
  width: 200px;
  height: 200px;
}
</style>
