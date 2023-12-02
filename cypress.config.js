const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  defaultCommandTimeout: 2000, // Tempo limite padrão para todos os comandos (em milissegundos)
  pageLoadTimeout: 30000 
});
