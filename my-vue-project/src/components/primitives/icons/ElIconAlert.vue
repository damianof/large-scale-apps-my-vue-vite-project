<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  testid?: string
  addCss?: string
}

const props = withDefaults(defineProps<Props>(), {
  testid: 'not-set',
  addCss: ''
})

const cssClass = computed(() => {
  const result = ['h-6 w-6 ']
  if ((props.addCss || '').trim().length > 0) {
    result.push(props.addCss)
  }
  return result.join(' ').trim()
})
</script>

<template>
  <svg
    :class="cssClass"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
</template>
