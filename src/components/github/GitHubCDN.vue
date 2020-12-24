<template>
  <div class="githubcdn">
    <ul v-if="gtContent.length > 0">
      <li v-for="(item, index) in gtContent" :key="index">
        <div v-if="item.type === 'file'">
          【 {{ item.name }} 】
          <img
            class="file-ico"
            v-if="
              item.name.indexOf('.ico') > 0 ||
              item.name.indexOf('.svg') > 0 ||
              item.name.indexOf('.jpg') > 0 ||
              item.name.indexOf('.png') > 0 ||
              item.name.indexOf('.gif') > 0 ||
              item.name.indexOf('.webp') > 0
            "
            :src="
              'https://cdn.jsdelivr.net/gh/' +
              params.login_address +
              '/cdn/' +
              item.path
            "
            :alt="item.name"
          />
          <a
            :href="
              'https://cdn.jsdelivr.net/gh/' +
              params.login_address +
              '/cdn/' +
              item.path
            "
            target="_blank"
          >
            https://cdn.jsdelivr.net/gh/{{ params.login_address }}/cdn/{{
              item.path
            }}
          </a>
        </div>
        <div v-else-if="item.type === 'dir'">
          <router-link
            :to="{
              path: '/GitHubFile',
              query: {
                access_token: params.access_token,
                login_address: params.login_address,
                content_url: item.url,
              },
            }"
            >【 {{ item.name }} 】
          </router-link>
        </div>
      </li>
    </ul>
    <div v-else>数据加载中......</div>
  </div>
</template>

<script>
import { getCDNContent } from "@/api/api";

export default {
  name: "GitHubCDN",
  data() {
    return {
      params: {
        access_token: this.$route.query.access_token,
        login_address: this.$route.query.login_address,
      },
      gtContent: [],
    };
  },
  created() {
    this.getCDNContent();
  },
  methods: {
    async getCDNContent() {
      const data = await getCDNContent(this.params);
      if (!data) return;
      this.gtContent = data.data;
    },
  },
};
</script>

<style scoped>
.githubcdn {
  text-align: left;
}
.file-ico {
  width: 60px;
  vertical-align: middle;
}
</style>
