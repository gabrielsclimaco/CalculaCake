<template lang="pug">
div#home
  div.no-items.full-height
    span.no-items-message Você não adicionou nenhum produto ainda
  div.items
  add-product
</template>

<script>
import AddProduct from './AddProduct'

export default {
  name: 'home',
  components: {
    AddProduct
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
</style>
