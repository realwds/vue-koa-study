<template>
  <div>
    {{ params.access_token }}
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
    }
  },
  created() {
    this.getUser()
  },
  methods: {
    async getUser() {
      const data = await getUser(this.params)
      console.log(data)
    }
  },
}
</script>
