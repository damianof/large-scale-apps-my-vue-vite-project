<script setup lang="ts">
  // import a reference to our ItemsView component
  import ItemsView from './views/Items.view.vue'
</script>

<template>
  <div class="home">
    <ItemsView />
  </div>
</template>

<style>
  .home {
    padding: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 12px;
  }
</style>
