<template lang="pug">
div#add-product
  fab(@click='open = true')
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
        action-buttons(
          :buttons='buttons'
          @adicionar='$refs.formModal.close()'
          @cancelar='$refs.formModal.close()'
        )
</template>

<script>
import Fab from './AddProduct/Fab'
import ActionButtons from './AddProduct/ActionButtons'

export default {
  name: 'add-product',
  components: {
    Fab,
    ActionButtons
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
    return {
      open: false,
      product: {
        name: '',
        price: 0,
        quantity: 0,
        howMuchUsed: 0
      },
      buttons: [
        'cancelar',
        'adicionar'
      ]
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
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
</style>
