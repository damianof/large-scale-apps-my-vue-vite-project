<script setup lang="ts">
import { ref, defineComponent } from "vue";
import ElButton from "../buttons/ElButton.vue";

interface ModalProps {
  testid?: string;
  title: string;
  message?: string;
  cancelLabel?: string;
  confirmLabel?: string;
  primaryButtonType?: string;
  icon?: ReturnType<typeof defineComponent>;
  iconAddCss?: string;
  resolve: (value: boolean | PromiseLike<boolean>) => void;
}

const props = withDefaults(defineProps<ModalProps>(), {
  testid: "not-set",
  message: "",
  cancelLabel: "Cancel",
  confirmLabel: "Confirm?",
  primaryButtonType: "primary",
});

const isVisible = ref(true);

const close = async () => {
  isVisible.value = false;
};

const confirm = async () => {
  await close();
  await props.resolve(true);
};

const discard = async () => {
  await close();
  await props.resolve(false);
};
</script>

<template>
  <div
    v-show="isVisible"
    class="fixed z-10 inset-0 overflow-y-auto transform transition-all"
    role="dialog"
    aria-modale="true"
    :aria-labelledby="title"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <!-- Background overlay -->
      <div class="fixed inset-0 bg-gray-400 bg-opacity-75" aria-hidden="true" />
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <!--  Modal panel -->
      <div
        id="modal-panel"
        class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
      >
        <div>
          <div
            v-if="icon"
            id="icon-container"
            class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
          >
            <component :is="icon" :addCss="iconAddCss" />
          </div>
          <div id="text-container" class="mt-3 text-center sm:mt-5">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              {{ props.title }}
            </h3>
            <div v-if="props.message" class="'mt-2">
              <p class="text-sm text-gray-500">{{ props.message }}</p>
            </div>
          </div>
          <div
            id="button-continer"
            class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense"
          >
            <ElButton
              id="btn-cancel"
              :label="props.cancelLabel"
              buttonType="secondary"
              @clicked="discard"
            />
            <ElButton
              id="btn-confirm"
              :label="props.confirmLabel"
              :buttonType="primaryButtonType"
              @clicked="confirm"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
