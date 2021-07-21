import { rest, setupWorker } from 'msw'

const handlers = [
  rest.get(
    '/pages/main-page',
    (
      req,
      res,
      ctx
    ) => res(
      ctx.json({
        message: 'it works :)'
      })
    )
  )
]

export const worker = setupWorker(...handlers)
