import { setupWorker, rest } from 'msw'

const url = 'https://jsonplaceholder.typicode.com/posts'

export const worker = setupWorker(
  rest.get(url, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          userId: 1,
          id: 1,
          title:
            'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
        },
      ])
    )
  })
)
