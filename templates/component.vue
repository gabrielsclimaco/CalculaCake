<template lang="pug">
div#sample
</template>

<script>
export default {
  name: 'sample',
  components: {
  },
  async beforeRouteEnter (to, from, next) {
    try {
      next()
    }
    catch (err) {
      console.log(err)
    }
  },
  props: {
  },
  data () {
    return {}
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
