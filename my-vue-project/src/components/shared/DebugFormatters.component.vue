<template>
  <div v-if="show">
    <h3>Debugging formatters:</h3>
    <div>Whole: {{ wholeNumberFormatter().format(123456789.321654) }}</div>
    <div>Decimal: {{ decimalNumberFormatter().format(123456789.321654) }}</div>
    <div>percent: {{ percentNumberFormatter().format(1254.987654) }}</div>

    <div>currency (USD): {{ currencyNumberFormatter().format(123456789.321654) }}</div>
    <div>currency (CAD): {{ currencyNumberFormatter('CAD').format(123456789.321654) }}</div>
    <div>currency (EUR): {{ currencyNumberFormatter('EUR').format(123456789.321654) }}</div>
    <div>currency (CNY): {{ currencyNumberFormatter('CNY').format(123456789.321654) }}</div>
    <div>currency (JPY): {{ currencyNumberFormatter('JPY').format(123456789.321654) }}</div>
    <div>currency (INR): {{ currencyNumberFormatter('INR').format(123456789.321654) }}</div>
    <div>currency (CHF): {{ currencyNumberFormatter('CHF').format(123456789.321654) }}</div>

    <div>date-time (default): {{ dateTime().format(new Date()) }}</div>
    <div>date-time (full): {{ dateTime('full').format(new Date()) }}</div>
    <div>date-time (full + long time): {{ dateTime('full', 'long').format(new Date()) }}</div>

    <div>day names: {{ dayNames() }}</div>
    <div>month names: {{ monthNames() }}</div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  // import a reference to useLocalization and useFormatters
  import { useLocalization, useDateTimeFormatters, useNumberFormatters } from '@/localization'

  // define our props:
  defineProps<{ show: boolean }>()

  // get what we need from useLocalization:
  const { currentLocale } = useLocalization()

  // return formatters based on selected locale
  const dateTimeFormatters = computed(() => {
    return useDateTimeFormatters(currentLocale.value)
  })
  const numberFormatters = computed(() => {
    return useNumberFormatters(currentLocale.value)
  })

  const wholeNumberFormatter = () => {
    return numberFormatters.value.whole()
  }
  const decimalNumberFormatter = () => {
    return numberFormatters.value.decimal()
  }
  const currencyNumberFormatter = (currency: string = 'USD') => {
    return numberFormatters.value.currency(currency)
  }
  const percentNumberFormatter = () => {
    return numberFormatters.value.percent()
  }

  const dateTime = (dateStyle: string = 'long', timeStyle: string = '') => {
    return dateTimeFormatters.value.dateTime(dateStyle, timeStyle)
  }
  const dayNames = () => {
    return dateTimeFormatters.value.dayNames() //.map((o) => o.name)
  }
  const monthNames = () => {
    return dateTimeFormatters.value.monthNames() //.map((o) => o.name)
  }
</script>
