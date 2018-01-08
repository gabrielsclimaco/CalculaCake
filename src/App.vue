<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
/*
 * Root component
 */
export default {}
</script>

<style>
.q-input-target {
  color: white;
}
.q-input {
  color: white !important;
}
.q-toast {
  font-size: 1em;
}
.modal-body {
  padding: 0 24px 0 24px;
}
.gradient, .q-toast {
  background: linear-gradient(45deg, #ddd6f3, #faaca8) !important;
  color: white;
}
</style>
