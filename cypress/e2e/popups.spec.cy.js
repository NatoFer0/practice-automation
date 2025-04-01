describe('Testes de popup', () => {

    beforeEach(() => {
        cy.clearLocalStorage()
        cy.visit('https://practice-automation.com/')
    })

    it('Validar a mensagem do "Alert Popup"', () => {
        cy.acessarHome()
        cy.acessarPopups()

        cy.get('#alert').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Hi there, pal!')
        })
    })

    it('Validar a mensagem do "Confirm Popup"', () => {
        cy.acessarHome()
        cy.acessarPopups()

        cy.get('#confirm').click()

        //Mockando o teste
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('OK or Cancel, which will it be?')
        })
    })

    it('Validar a mensagem após clicar em OK no "Confirm Popup"', () => {
        cy.acessarHome()
        cy.acessarPopups()

        cy.get('#confirm').click()

        //Mockando o teste
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('OK or Cancel, which will it be?')
        })
        cy.get('#confirmResult').should('have.text', 'OK it is!')
    })

    it('Validar a mensagem após clicar em CANCELAR no "Confirm Popup"', () => {
        cy.acessarHome()
        cy.acessarPopups()

        cy.get('#confirm').click()

        //Mockando o teste
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('OK or Cancel, which will it be?')
            return false
        })
        cy.get('#confirmResult').should('have.text', 'Cancel it is!')
    })

    it('Validar a mensagem do "Prompt Popup"', () => {
        cy.acessarHome()
        cy.acessarPopups()

        //Mockando o teste
        cy.window().then(win => {
            cy.stub(win, 'prompt').as('message')
        })

        cy.get('#prompt').click()

        cy.get('@message').should('be.calledWith', "Hi there, what's your name?", "")
        
    })

    it('Preencher o nome no "Prompt Popup" e clicar em confirmar', () => {
        cy.acessarHome()
        cy.acessarPopups()

        //Mockando o teste
        const nome = 'Almada'

        cy.window().then(win => {
            cy.stub(win, 'prompt').returns(nome)
        })

        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('OK or Cancel, which will it be?')
        })

        cy.get('#prompt').click()
        cy.get('#promptResult').should('have.text', `Nice to meet you, ${nome}!`)
    })

    it('Não preencher o nome no "Prompt Popup" e clicar em confirmar', () => {
        cy.acessarHome()
        cy.acessarPopups()

        //Mockando o teste
        const nome = ''

        cy.window().then(win => {
            cy.stub(win, 'prompt').returns(nome)
        })

        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('OK or Cancel, which will it be?')
        })

        cy.get('#prompt').click()
        cy.get('#promptResult').should('have.text', 'Fine, be that way...')
    })

    it('Clicar no botão "Cancelar" no "Prompt Popup"', () => {
        cy.acessarHome()
        cy.acessarPopups()

        //Mockando o teste

        cy.window().then(win => {
            cy.stub(win, 'prompt').returns(null)
        })

        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('OK or Cancel, which will it be?')
        })

        cy.get('#prompt').click()
        cy.get('#promptResult').should('have.text', 'Fine, be that way...')
    })

    it('Validar o tooltip "Cool text"', () => {
        cy.acessarHome()
        cy.acessarPopups()

        cy.get('.tooltip_1').click()

        cy.get('#myTooltip')
            .should('be.visible')
            .should('have.text', 'Cool text')
    })
})