<template lang="pug">
div#add-product
  q-btn(
    @click='open = true'
    icon='add'
    round
    push
  ).add-button.gradient
  q-modal(v-model='open' ref='formModal')
    q-modal-layout
      q-toolbar(slot='header').toolbar.gradient
        div.full-width.toolbar-label
          q-btn(
            flat
            press
            icon='keyboard arrow down'
            @click='$refs.formModal.close()'
          ).back-button
          q-toolbar-title.title
            span Adicionar produto
        div.full-width
          q-input(
            v-model='product.name'
            color='white'
            float-label='Nome'
            clearable
          ).name-input
      div
        div
          //- q-input()
        div.action-buttons.full-width
          q-btn(
            @click='$refs.formModal.close()'
          ).gradient Cancelar
          q-btn(
            @click='$refs.formModal.close()'
          ).gradient Adicionar
</template>

<script>
export default {
  name: 'add-product',
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
    return {
      open: false,
      product: {
        name: '',
        price: 0,
        quantity: 0,
        howMuchUsed: 0
      }
    }
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
.toolbar {
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
}
.toolbar-label {
  display: flex;
  align-items: center;
}
.back-button, .title, .name-input {
  padding: 0;
}
.back-button, .title {
  margin-top: 5px;
}
.back-button {
  margin-left: 10px;
}
.name-input {
  margin: 0 20px 0 10px;
  color: white !important;
}
.action-buttons {
  position: fixed;
  bottom: 0;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-around;
}
</style>
