<script setup lang="ts">
import { computed } from "vue";
import { buttonCssStrategy } from "./ButtonCssStrategy";

interface Props {
  testid?: string;
  id: string;
  disabled?: boolean;
  label: string;
  buttonType?: string; // the button type (primary, secondary, danger etc)
  addCss?: string;
}

const props = withDefaults(defineProps<Props>(), {
  testid: "not-set",
  id: "not-set",
  disabled: false,
  label: "label text",
  buttonType: "primary",
  addCss: "",
});

// define emits for custom events
const emit = defineEmits<{
  (e: "clicked", id: string): any;
}>();

// on click handler
const handleClick = () => {
  // proceed only if the button is not disabled, otherwise ignore the click
  if (!props.disabled) {
    emit("clicked", props.id);
  }
};

// a computed property to return a different css class based on the selected value
const cssClass = computed((): string => {
  const result = [
    "font-bold py-1 px-2 inline-flex justify-center rounded-md border shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
  ];
  if (props.disabled) {
    // these are the button CSS classes when disabled
    result.push("bg-gray-500 text-gray-300 opacity-50 cursor-not-allowed");
  } else {
    // these are the button CSS classes when enabled
    result.push(buttonCssStrategy.get(props.buttonType) as string);
  }

  // addCss will have additional CSS classes
  // we want to apply from where we consume this component
  const addCss = (props.addCss || "").trim();
  if (addCss.length > 0) {
    result.push(addCss);
  }
  return result.join(" ").trim();
});
</script>

<template>
  <button
    type="button"
    :data-testid="testid"
    :aria-label="label"
    :disabled="disabled"
    :class="cssClass"
    @click="handleClick"
  >
    <span>{{ label }}</span>
  </button>
</template>
