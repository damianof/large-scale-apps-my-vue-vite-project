// file: src/test-utils/index.ts
/* eslint-disable import/export */
import { render } from '@testing-library/vue'

const customRender = <T>(ui: T, options = {}) =>
  render(ui, {
    ...options
  })

export * from '@testing-library/vue'
export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render }
