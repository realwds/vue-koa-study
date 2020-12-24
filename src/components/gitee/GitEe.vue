<template>
  <div class="gitee">
    <div v-if="gtUser.name">
      <h1>Gitee 平台</h1>
      <img class="avator_url" :src="gtUser.avatar_url" alt />
      <p>昵称：{{ gtUser.name }}</p>
      <p>邮箱：{{ gtUser.email }}</p>
      <p>创建时间：{{ gtUser.created_at }}</p>
      <p>
        GitEe地址：<a :href="gtUser.html_url" target="_blank">{{
          gtUser.html_url
        }}</a>
      </p>
      <!-- <p>
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
      </p> -->
    </div>
    <div v-else>数据加载中......</div>
  </div>
</template>

<script>
import { getGiteeUser } from "@/api/api";

export default {
  name: "GitEe",
  data() {
    return {
      params: {
        access_token: this.$route.query.access_token,
      },
      gtUser: {},
    };
  },
  created() {
    this.getGiteeUser();
  },
  methods: {
    async getGiteeUser() {
      const data = await getGiteeUser(this.params);
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
