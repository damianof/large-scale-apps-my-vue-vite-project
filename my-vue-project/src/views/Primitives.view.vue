<script setup lang="ts">
  import { reactive } from 'vue'
  // import a reference to the ElText primitive
  import { ElText, ElButton, ElToggle, ElIconAlert, useModalDialog } from '@/components/primitives'

  const state = reactive({
    toggles: [
      {
        id: 'toggle-a',
        checked: true
      },
      {
        id: 'toggle-b',
        checked: false
      },
      {
        id: 'toggle-c',
        checked: false
      }
    ]
  })

  const onOpenDialogClicked = async (id: string) => {
    console.log('PrimitivesView: onOpeanDialogClicked', id)
    // handle the new buttons with id "open-modal-x" (we'll be adding shortly)
    if (id === 'open-modal-1') {
      // here we invoke our useModal with the custom labels for the buttons
      // then we invoke modal.prompt() and await it
      const result = await useModalDialog({
        cancelLabel: 'Cancel',
        confirmLabel: 'Ok',
        primaryButtonType: 'danger'
      }).prompt('Do you want to delete this record?')
      // the result will be true if the user click on COnfirm, or false if click on Cancel
      console.log('----- PrimitivesView: onButtonClicked: modal-1 prompt result', result)
    } else if (id === 'open-modal-2') {
      // here we invoke our useModal with the custom labels for the buttons
      // then we invoke modal.prompt() and await it
      const result = await useModalDialog({
        cancelLabel: 'Cancel',
        confirmLabel: 'Confirm',
        icon: ElIconAlert, // here we use the icon component created earlier
        iconAddCss: 'text-red-600'
      }).prompt('Do you want to delete this record?', '')
      // the result will be true if the user click on COnfirm, or false if click on Cancel
      console.log('----- PrimitivesView: onButtonClicked: modal-2 prompt result', result)
    }
  }

  const onButtonClicked = async (id: string) => {
    console.log('PrimitivesView: onButtonClicked', id)
  }

  const onToggleClicked = (id: string) => {
    console.log(`You clicked the "${id}" toggle`)

    const stateItem = state.toggles.find((item) => item.id === id)
    if (stateItem) {
      // toggle the value of the ElToggle that was clicked
      stateItem.checked = !stateItem.checked
    }
  }
</script>

<template>
  <div class="about">
    <ElText tag="h1" addCss="text-gray-500" text="Primitives" />
    <ElText tag="h2" addCss="text-gray-500" text="ElText examples:" />
    <div class="p-6 border">
      <ElText tag="h2" addCss="text-red-500" text="Here ElText will render a &lth2&gt element" />
      <ElText tag="p" addCss="text-red-700" text="Here ElText will render a &ltp&gt element" />
    </div>

    <ElText tag="h2" addCss="text-gray-500" text="ElButton examples:" />
    <div class="p-6 border space-x-2">
      <ElButton id="my-button-1" :disabled="false" label="This is a button" @clicked="onButtonClicked" />
      <ElButton id="my-button-2" :disabled="true" label="This is a disabled button" @clicked="onButtonClicked" />
      <ElButton id="open-modal-1" :disabled="false" label="Open modal 1" @clicked="onOpenDialogClicked" />

      <ElButton id="open-modal-2" :disabled="false" label="Open modal 2" @clicked="onOpenDialogClicked" />
    </div>

    <ElText tag="h2" addCss="text-gray-500" text="ElToggle examples:" />
    <div class="p-6 border">
      <ElToggle
        id="toggle-a"
        :checked="state.toggles.find((item) => item.id === 'toggle-a').checked"
        :disabled="false"
        @clicked="onToggleClicked"
      />
      <ElToggle
        id="toggle-b"
        :checked="state.toggles.find((item) => item.id === 'toggle-b').checked"
        :disabled="true"
        addCss="ml-2"
        @clicked="onToggleClicked"
      />
      <ElToggle
        id="toggle-c"
        :checked="state.toggles.find((item) => item.id === 'toggle-c').checked"
        :disabled="false"
        addCss="ml-2"
        @clicked="onToggleClicked"
      />
    </div>
  </div>
</template>
