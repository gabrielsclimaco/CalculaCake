<template lang="pug">
div#add-candy
  fab(
    @click='open = true'
    :positions='["right", "bottom"]'
    )
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
            span Adicionar doce
          q-btn(
            flat
            icon='check'
            @click='addCandyToStore'
            ).ok-button
        div.full-width
          q-input(
            v-model='candy.name'
            color='white'
            float-label='Nome'
            clearable
            ).name-input
      div
        div.add-ingredient
          ingredient-list(
            :ingredients='candy.ingredients'
            @remove='removeIngredientsFromCandy'
            )
          add-ingredient(
            @added='addIngredientToCandy'
            )
</template>

<script>
import Fab from './General/Fab'
import ActionButtons from './AddCandy/ActionButtons'
import AddIngredient from './AddIngredient'
import IngredientList from './AddCandy/IngredientList'
import { Toast } from 'quasar'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'add-candy',
  components: {
    ActionButtons,
    AddIngredient,
    Fab,
    IngredientList
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
      candy: {
        name: '',
        ingredients: [],
        profitMarginMin: '',
        profitMarginMax: '',
        totalPrice: 0
      }
    }
  },
  computed: {
    ...mapGetters([
      'candys'
    ])
  },
  methods: {
    ...mapActions([
      'addCandy'
    ]),
    addIngredientToCandy (data) {
      this.candy.ingredients.push(data)
    },
    removeIngredientsFromCandy (index) {
      this.candy.ingredients.splice(index, 1)
    },
    addCandyToStore () {
      const { isValid, message } = this.validateCandy()

      if (isValid) {
        this.calculateProfitMargin()
        this.addCandy(this.candy)
        this.clearFields()
        this.$refs.formModal.close()
        Toast.create(`O doce ${this.candy.name} foi adicionado`)
      }
      else {
        Toast.create(message)
      }
    },
    validateCandy () {
      let returningObject = {
        isValid: false
      }

      const isUnique = this.validateUniqueness()

      if (this.candy.name === '') {
        returningObject.message = 'Você precisa dar um nome ao seu doce'
      }
      else if (this.candy.ingredients.length <= 0) {
        returningObject.message = 'Você precisa adicionar ao menos um ingrediente ao seu doce'
      }
      else if (!isUnique) {
        returningObject.message = 'Você já adicionou um doce com esse nome'
      }
      else {
        returningObject.isValid = true
      }

      return returningObject
    },
    calculateProfitMargin () {
      let totalPrice = 0
      this.candy.ingredients.forEach(ingredient => {
        totalPrice += ingredient.howMuchUsed * ingredient.price / ingredient.quantity
      })

      this.candy.totalPrice = totalPrice
      this.candy.profitMarginMin = totalPrice * 3
      this.candy.profitMarginMax = totalPrice * 4
    },
    clearFields () {
      this.candy.name = ''
      this.candy.ingredients = []
      this.candy.profitMarginMin = ''
      this.candy.profitMarginMax = ''
      this.candy.price = 0
    },
    validateUniqueness () {
      let isUnique = true

      this.candys.forEach(candy => {
        if (candy.name === this.candy.name) {
          isUnique = false
          return this
        }
      })

      return isUnique
    }
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
.add-ingredient {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 101px);
}
.ok-button {
  right: 0;
  position: fixed;
}
</style>
