<template>
  <li :data-testid="testid" :class="cssClass" @click="handleClick">
    <ElText :testid="`${testid}-text`" tag="div" :text="model.name" />
    <ElToggle :testid="`${testid}-toggle`" :checked="model.selected" />
  </li>
</template>

<script lang="ts">
// import reference to Vue's defineComponent
import { defineComponent, computed, PropType } from 'vue'
// import a reference to our ItemInterace
import type { ItemInterface } from '../../../models/items/Item.interface'

import ElText from '@/components/primitives/text/ElText.vue'
import ElToggle from '@/components/primitives/toggles/ElToggle.vue'

// create our component with defineComponent
export default defineComponent({
  name: 'ItemComponent',
  emits: ['selectItem'],
  components: {
    ElText,
    ElToggle
  },
  props: {
    // expose a property called model of type ItemInterface
    model: {
      type: Object as PropType<ItemInterface>,
      default: () => {
        return {}
      }
    },
    testid: {
      type: String,
      default: 'not-set'
    },
    isLast: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    // a computed property to return a different css class based on the selected value
    const cssClass = computed(() => {
      let css = 'item flex items-center justify-between cursor-pointer border border-l-4 list-none rounded-sm px-3 py-3'
      if (props.model?.selected) {
        css += ' font-bold bg-pink-200 hover:bg-pink-100 selected'
      } else {
        css += ' text-gray-500 hover:bg-gray-100'
      }
      if (!props.isLast) {
        css += ' border-b-0'
      }
      return css.trim()
    })

    // on click event handler that will emit a @select custom event
    const handleClick = () => {
      emit('selectItem', props.model.id)
    }

    return {
      cssClass,
      handleClick
    }
  }
})
</script>
