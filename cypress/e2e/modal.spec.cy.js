describe('Interagindo com modals', () => {

    beforeEach(() => {
        cy.clearLocalStorage()
        cy.visit('https://practice-automation.com/')
    })

    it('Validar modal simples apenas com texto', () => {
        cy.acessarModals()
        cy.get('.entry-content > :nth-child(3)').should('have.text', 'Click to see a simple modal.')
        cy.get('#popmake-1318').should('not.be.visible')
        cy.get('#simpleModal').click()
        cy.get('#popmake-1318').should('be.visible')
        cy.get('#popmake-1318').within(() => {
            cy.get('#pum_popup_title_1318')
                .invoke('text')
                .then((texto) => {
                    const textoLimpo = texto.trim()
                    expect(textoLimpo).to.equal('Simple Modal')
                })

            cy.get('.popmake-content')
                .invoke('text')
                .then((texto) => {
                    const textoLimpo = texto.trim()
                    expect(textoLimpo).to.equal('Hi, I’m a simple modal.')
                })
        })

        cy.get('#popmake-1318').should('be.visible')

        cy.get('#popmake-1318').within(() => {

            cy.get('[type="button"].popmake-close').click()
        })
        
        cy.get('#popmake-1318').should('not.be.visible')
    })

    it('Validar modal com formulários - abrir, validar os elementos e fechar', () => {
        cy.acessarModals()
        cy.get('.wp-block-group p').should('have.text', 'Click to see a modal that contains a form.')
        cy.get('#popmake-674').should('not.be.visible')
        cy.get('#formModal').click()
        cy.get('#popmake-674').should('be.visible')
        cy.get('#popmake-674').within(() => {
            cy.get('#pum_popup_title_674')
                .invoke('text')
                .then((texto) => {
                    const textoLimpo = texto.trim()
                    expect(textoLimpo).to.equal('Modal Containing A Form')
                })
            cy.get('.popmake-content > :nth-child(1)').should('have.text', 'Please enter your contact info below.')
            cy.get('[for="g1051-name"]').should('have.text', 'Name(required)')
            cy.get('[for="g1051-email"]').should('have.text', 'Email')
            cy.get('[for="contact-form-comment-g1051-message"]').should('have.text', 'Message')
            cy.get('.pushbutton-wide').should('have.text', 'Submit')
            cy.get('.popmake-close')
                .should('be.visible') 
        })

        cy.get('#popmake-674').should('be.visible')

        cy.get('#popmake-674').within(() => {
            cy.get('.popmake-close')
                .click()
        })

        cy.get('#popmake-674').should('not.be.visible')
    })

    it('Validar modal com formulários - abrir, validar os elementos, preencher os campos e submeter', () => {
        cy.acessarModals()
        cy.get('.wp-block-group p').should('have.text', 'Click to see a modal that contains a form.')
        cy.get('#popmake-674').should('not.be.visible')
        cy.get('#formModal').click()
        cy.get('#popmake-674').should('be.visible')
        cy.get('#popmake-674').within(() => {
            cy.get('#pum_popup_title_674')
                .invoke('text')
                .then((texto) => {
                    const textoLimpo = texto.trim()
                    expect(textoLimpo).to.equal('Modal Containing A Form')
                })
            cy.get('.popmake-content > :nth-child(1)').should('have.text', 'Please enter your contact info below.')
            cy.get('[for="g1051-name"]').should('have.text', 'Name(required)')
            cy.get('#g1051-name').type('Ronaldo Trindade')
            cy.get('[for="g1051-email"]').should('have.text', 'Email')
            cy.get('#g1051-email').type('ronaldo.trindade@gmail.com')
            cy.get('[for="contact-form-comment-g1051-message"]').should('have.text', 'Message')
            cy.get('#contact-form-comment-g1051-message').type('Testando a aplicação!')
            cy.get('.pushbutton-wide').should('have.text', 'Submit')
            cy.get('.popmake-close')
                .scrollIntoView()
                .should('be.visible') 
        })

        cy.get('#popmake-674')
            .should('be.visible')

        cy.get('#popmake-674').within(() => {
            cy.get('.pushbutton-wide').click()
        })

        cy.get('#popmake-674')
            .should('not.be.visible')
        
    })

})