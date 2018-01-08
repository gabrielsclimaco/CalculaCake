<template lang="pug">
//- div#action-buttons
div.action-buttons.full-width
  q-btn(
    v-for='(button, index) in buttons'
    v-if='index <= 2'
    :key='index'
    @click='$emit(button)'
  ).gradient {{ button }}
</template>

<script>
export default {
  name: 'action-buttons',
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
    buttons: {
      type: Array,
      required: true
    }
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
.action-buttons {
  position: fixed;
  bottom: 0;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-around;
}
</style>
