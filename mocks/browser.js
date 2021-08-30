import { setupWorker, rest } from 'msw'

export const worker = setupWorker(...handlers)

window.msw = { worker, rest }
