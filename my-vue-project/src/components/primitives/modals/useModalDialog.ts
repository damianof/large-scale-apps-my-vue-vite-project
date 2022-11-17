import { defineComponent } from "vue";
import ElModal from "./ElModal.vue";

interface ModalOptions {
  targetId?: string;
  title?: string;
  message?: string;
  cancelLabel?: string;
  confirmLabel?: string;
  primaryButtonType?: string;
  icon?: ReturnType<typeof defineComponent>;
  iconAddCss?: string;
}

import { nextTick, createApp } from "vue";

export const useModalDialog = (options?: ModalOptions) => {
  return {
    prompt: (title: string, message?: string): Promise<boolean> => {
      const targetId = options?.targetId ? options?.targetId : "#modal";

      // return a Promise and pass the 'resolve" as a property to the ElModal
      // ElModal will invoke "resolve" from Confirm with true or from Cancel with false
      return new Promise<boolean>((resolve) => {
        const cancelLabel = options?.cancelLabel
          ? options.cancelLabel
          : "Cancel";
        const confirmLabel = options?.confirmLabel
          ? options.confirmLabel
          : "Confirm?";

        nextTick(() => {
          return createApp(ElModal, {
            title: title || options?.title,
            message: message || options?.message,
            confirmLabel,
            cancelLabel,
            primaryButtonType: options?.primaryButtonType,
            icon: options?.icon,
            iconAddCss: options?.iconAddCss,
            resolve,
          }).mount(targetId);
        });
      });
    },
  };
};
