<script setup lang="ts">
  import { withDefaults } from 'vue'
  
  type SampleCompProps = {
    testid?: string
    text?: string
  }

  const props = withDefaults(defineProps<SampleCompProps>(), {
    testid: 'not-set',
    text: 'not-set'
  })

  const cssClass = () => {
    return 'p-2 border border-green-500 ' + props.text
  }
</script>

<template>
  <div :data-testid="testid" :class="cssClass()">
   <span>{{ text }}</span>
  </div>
</template>
