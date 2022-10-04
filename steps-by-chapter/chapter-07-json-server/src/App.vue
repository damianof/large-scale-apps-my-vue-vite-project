<script setup lang="ts">
  // import a reference to our ItemsView component
  import ItemsView from './views/Items.view.vue'
  // store a reference to import meta env into a var
  const metaEnv = import.meta.env
</script>

<template>
  <div class="home">
    [{{metaEnv}}] <!-- add this to output the current content of import.meta.env -->
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
