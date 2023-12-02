import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

Cypress.config('defaultCommandTimeout', 1000000)