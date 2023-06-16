const { defineConfig } = require("cypress");
// import { default as cucumber } from 'cypress-cucumber-preprocessor'

module.exports = defineConfig({
  e2e: {
    specPattern: "**/spec.cy.js",
    failOnStatusCode:false,
    baseUrl: 'https://gestion.apuestatotal.dev/',
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});

