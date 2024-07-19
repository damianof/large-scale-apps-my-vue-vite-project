<script setup lang="ts">
import { onMounted } from 'vue'
import ItemsView from './views/Items.view.vue'
import LocaleSelector from '@/components/shared/LocaleSelector.component.vue'
import DebugFormatters from '@/components/shared/DebugFormatters.component.vue'
import PrimitivesView from '@/views/Primitives.view.vue'

import { Counter, SampleComp } from 'my-component-library'

import { randomid } from '@largescaleapps/my-js-helpers'

// import a reference to useLocalization and useFormatters
import { useLocalization } from '@/localization'

// get what we need from useLocalization:
const { t, currentLocale, changeLocale } = useLocalization()

onMounted(() => {
  changeLocale(currentLocale.value)
})
</script>

<template>
  <div>
    <SampleComp :text="`This is a sample component from my-component-library: ${randomid()}`" />
    <Counter />
  </div>
  <div class="home m-2 p-2 border-2 border-red-500">
    <LocaleSelector />
    <h3>{{ t('home.welcome') }} [{{ currentLocale }}]</h3>
    <ItemsView v-if="true" />
    <PrimitivesView />
    <DebugFormatters :show="false" />
  </div>
</template>
