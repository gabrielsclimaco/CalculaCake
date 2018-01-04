<template lang="pug">
 q-layout(ref='layout', view='lHh Lpr fff', :left-class="{'bg-grey-2': true}")
  q-toolbar(slot='header').toolbar.gradient
    q-toolbar-title.toolbar-title
      img(src='../statics/logo.png' alt='cupcake').logo
      span.title-label CalculaCake
  div
    router-view
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>
.logo {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.toolbar-title {
  display: flex;
  align-items: flex-end;
}
.title-label {
  font-size: 1.5em;
}
</style>
