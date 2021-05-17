import { Given, When,And,Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://assist-software.net'
Given('I open ASSIST main page', () => {
  cy.visit(url)
})

When('I click on About Us' , () =>{
  cy.get('.first.expanded > .dropdown-toggle').click()
})

And('I click on Our Culture', () =>{
  cy.get('.first a[href*=culture]').click()
})

Then('I can see Our Culture page', () =>{
  cy.title().should('include','Culture')
})
