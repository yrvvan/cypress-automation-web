// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands');

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
});

const loginObj = require('../support/object/login_obj.json')
const homeObj = require('../support/object/home_obj.json')
beforeEach(() => {
  cy.clearCookies();
  cy.visit(`${Cypress.env('WEBSITE_URL')}/account/login`, {failOnStatusCode: false, chromeWebSecurity: false});
  cy.get(loginObj.email).click();
  cy.get(loginObj.email).type(Cypress.env('EMAIL'));
  cy.get(loginObj.password).click();
  cy.get(loginObj.password).type(Cypress.env('PASSWORD'));
  cy.get(loginObj.loginButton).click();
  cy.get(homeObj.sliderHomeSection).should('be.visible');
});