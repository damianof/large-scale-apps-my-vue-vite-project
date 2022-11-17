<script setup lang="ts">
import { computed } from "vue";

interface Props {
  testid?: string;
  id?: string;
  disabled?: boolean;
  checked: boolean;
  addCss?: string;
}

const props = withDefaults(defineProps<Props>(), {
  testid: "not-set",
  id: "not-set",
  disabled: false,
  checked: false,
  addCss: "",
});

// define emits for custom events
const emit = defineEmits<{
  (e: "clicked", id: string): any;
}>();

// a computed property to return a different css class based on the selected value
const cssClass = computed((): string => {
  const classes = [
    "relative inline-flex flex-shrink-0 h-6 w-12 border-1 rounded-full cursor-pointer transition-colors duration-200 focus:outline-none",
  ];
  if (props.checked) {
    classes.push("bg-green-400");
  } else {
    classes.push("bg-gray-300");
  }
  if (props.disabled) {
    classes.push("opacity-40 cursor-not-allowed");
  }
  const addCss = (props.addCss || "").trim();
  if (addCss.length > 0) {
    classes.push(addCss);
  }
  return classes.join(" ");
});

// css class for the innser span element
const innerCssClass = computed((): string => {
  const classes = [
    "bg-white shadow pointer-events-none inline-block h-6 w-6 rounded-full transform ring-0 transition duration-200",
  ];
  if (props.checked) {
    classes.push("translate-x-6");
  } else {
    classes.push("translate-x-0");
  }
  return classes.join(" ");
});

// click handler
const handleClick = () => {
  // proceed only if it is not disabled, otherwise ignore the click
  if (!props.disabled) {
    emit("clicked", props.id);
  }
};
</script>

<template>
  <button
    type="button"
    role="checkbox"
    :data-testid="testid"
    :aria-checked="checked"
    :disabled="disabled"
    :class="cssClass"
    @click="handleClick"
  >
    <span :class="innerCssClass"></span>
  </button>
</template>
