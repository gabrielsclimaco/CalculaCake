<template lang="pug">
//- div#add-ingredient
fab(
  :positions='["bottom"]'
  @click='showDialog'
  )
</template>

<script>
import Fab from './AddProduct/Fab'
import { Dialog, Toast } from 'quasar'

export default {
  name: 'add-ingredient',
  components: {
    Fab
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
    }
  },
  computed: {
  },
  methods: {
    showDialog () {
      Dialog.create({
        title: 'Adicionar Ingrediente',
        form: {
          name: {
            type: 'text',
            label: 'Nome',
            model: ''
          },
          quantity: {
            type: 'number',
            label: 'Quantidade total',
            model: ''
          },
          howMuchUsed: {
            type: 'number',
            label: 'Quanto usou',
            model: ''
          },
          price: {
            type: 'number',
            label: 'Preço',
            model: ''
          }
        },
        buttons: [
          {
            label: 'Cancelar',
            style: 'color: white;'
          },
          {
            label: 'Adicionar',
            style: 'color: white;',
            preventClose: true,
            handler: (data, close) => {
              const { isValid, message } = this.validateIngredient(data)
              if (isValid) {
                this.$emit('added', data)
                close()
              }
              else {
                Toast.create(message)
              }
            }
          }
        ]
      })

      this.addClassToDialog()
    },
    addClassToDialog () {
      let dialog = document.querySelectorAll('.modal-content')[1]
      dialog.classList.add('gradient')
    },
    handler (data, close) {
      const { isValid, message } = this.validateIngredient(data)
      if (isValid) {
        this.$emit('added', data)
        close()
      }
      else {
        Toast.create(message)
      }
    },
    validateIngredient (ingredient) {
      let returningObject = {
        isValid: false
      }

      if (ingredient.name === '') {
        returningObject.message = 'Você precisa dar um nome para o seu ingrediente'
      }
      else if (ingredient.quantity === '' || ingredient.quantity === null) {
        returningObject.message = 'Você precisa dizer qual a quantidade total do seu ingrediente'
      }
      else if (ingredient.howMuchUsed === '' || ingredient.howMuchUsed === null) {
        returningObject.message = 'Você precisa dizer quanto do ingrediente usou'
      }
      else if (ingredient.price === '' || ingredient.price === null) {
        returningObject.message = 'Você precisa dizer quanto custou seu ingrediente'
      }
      else if (ingredient.howMuchUsed > ingredient.quantity) {
        returningObject.message = 'O quanto você usou não pode ser mais do que a quantidade total'
      }
      else {
        returningObject.isValid = true
      }

      return returningObject
    }
  }
}
</script>

<style scoped>
</style>
