<template lang="pug">
//- div#fab
q-btn(
    @click='$emit("click")'
    icon='add'
    round
    push
  ).add-button.gradient
</template>

<script>
export default {
  name: 'fab',
  components: {
  },
  async beforeRouteEnter (to, from, next) {
    try {
      // await Do something before router PUSH
      // next(vm => vm.foo = bar)
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
.add-button {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 15px;
}
</style>
