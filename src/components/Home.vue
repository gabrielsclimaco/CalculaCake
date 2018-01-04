<template lang="pug">
div#home
  div.no-items.full-height
    span.no-items-message Você não adicionou nenhum produto ainda
  div.items
  q-btn(icon='ion-ios-plus-empty' round push).add-button
</template>

<script>
export default {
  name: 'home',
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
.no-items {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 50px);
}
.no-items-message {
  text-align: center;
  font-size: 1.5em;
  color: #a4a4a4;
}
.add-button {
  background: linear-gradient(45deg, #ddd6f3, #faaca8);
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 15px;
  color: white;
}
</style>
