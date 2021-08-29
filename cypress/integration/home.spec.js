import { rest, setupWorker } from 'msw'

const url = 'https://jsonplaceholder.typicode.com/posts'

const worker = setupWorker(
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

beforeEach(() => worker.start())
afterEach(() => worker.resetHandlers())
after(() => worker.stop())

describe('Homepage tests', () => {
  it('loads expected data', () => {
    cy.visit('/')
    cy.get('li').should(
      'eq',
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
    )
  })

  it('loads while waiting for data', () => {
    cy.visit('/about')
    cy.get('.rounded-full').click()
    cy.get('[data-test="dropdown-home"]').click()
    worker.use(rest.get(url, (req, res, ctx) => res(ctx.delay('infinite'))))
    cy.wait(500)
    cy.get('#nprogress').should('exist')
  })

  it('shows when error occurs', () => {
    cy.visit('/')
    worker.use(
      rest.get(url, (req, res, ctx) =>
        res(
          ctx.status(404),
          ctx.json({
            errorMessage: 'Something weird happened',
          })
        )
      )
    )
    cy.get('h1').should('contain.text', 'Error')
  })
})
