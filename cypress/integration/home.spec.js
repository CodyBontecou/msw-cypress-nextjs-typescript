import { rest, setupWorker } from 'msw'

const url = 'https://jsonplaceholder.typicode.com/posts'

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

    cy.window().then(window => {
      // Reference global instances set in "src/mocks.js".
      const { worker, rest } = window.msw

      worker.use(rest.get(url, (req, res, ctx) => res(ctx.delay('infinite'))))
    })
    cy.get('#nprogress').should('exist')
  })

  it.only('shows when error occurs', () => {
    cy.visit('/')
    cy.window().then(window => {
      const { worker, rest } = window.msw
      // beforeEach(() => worker.start())
      // afterEach(() => worker.resetHandlers())
      // after(() => worker.stop())

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
    })

    cy.get('h1').should('contain.text', 'Error')
  })
})
