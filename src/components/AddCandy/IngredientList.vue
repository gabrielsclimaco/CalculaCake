<template lang="pug">
//- div#ingredient-list
q-list.full-width.no-padding
  q-item(
    v-for='(ingredient, index) in ingredients'
    :key='index'
    :class='index % 2 === 0 ? "even" : "odd"'
    ).item
    q-item-main.item-info
      div
        q-item-tile(label) {{ ingredient.name }}
        q-item-tile(sublabel)
          | Usou {{ (ingredient.howMuchUsed * 100 / ingredient.quantity).toFixed(2) }}%
      div
        q-item-tile(label) Preço: R${{ (ingredient.price).toFixed(2) }}
        q-item-tile(sublabel)
          | Custou: R${{ (ingredient.howMuchUsed * ingredient.price / ingredient.quantity).toFixed(2) }}
    q-item-side(right)
      q-item-tile(
        icon='cancel'
        @click='showRemoveDialog(ingredient, index)'
        )
</template>

<script>
import { Dialog, Toast } from 'quasar'

export default {
  name: 'ingredient-list',
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
    ingredients: {
      type: Array
    }
  },
  data () {
    return {}
  },
  computed: {
  },
  methods: {
    showRemoveDialog (ingredient, index) {
      Dialog.create({
        title: `Você tem certeza que deseja remover o ingrediente ${ingredient.name}?`,
        message: 'Esta ação não pode ser desfeita',
        buttons: [
          {
            label: 'Cancelar',
            style: 'color: white;'
          },
          {
            label: 'Tenho certeza',
            style: 'color: white;',
            handler: () => {
              this.$emit('remove', index)
              Toast.create(`Item ${ingredient.name} removido`)
            }
          }
        ]
      })

      this.addClassToDialog()
    },
    addClassToDialog () {
      let dialog = document.querySelectorAll('.modal-content')[1]
      dialog.classList.add('gradient')
    }
  }
}
</script>

<style scoped>
.even {
  color: #606060;
}
.odd {
  color: #606060;
  background: #ddd6f3;
}
.item-info {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
</style>
