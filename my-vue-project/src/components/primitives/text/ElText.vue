<script setup lang="ts">
import { computed } from "vue";

interface Props {
  tag: string;
  text: string;
  addCss?: string;
}

const props = withDefaults(defineProps<Props>(), {
  tag: "p",
  text: "",
  addCss: "",
});

const cssClass = computed((): string => {
  const classes = ["p-1"];
  if ((props.addCss || "").trim().length > 0) {
    classes.push(props.addCss.trim());
  }
  return classes.join(" ");
});
</script>

<template>
  <component :is="tag" :class="cssClass">{{ text }}</component>
</template>
