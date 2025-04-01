describe('Testes de formulário', () => {

    beforeEach(() => {
        cy.clearLocalStorage()
        cy.visit('https://practice-automation.com/')
    })

    it('Validar a palavra " * Required"', () => {
        cy.acessarHome()
        cy.acessarFormulario()
        cy.get('#name-input').should('be.visible')
        cy.get('#name-input')
            .parent()
            .next()
            .should('have.text', ' * Required')
    })


    const drinks = ['Water', 'Milk', 'Coffee', 'Wine', 'Ctrl-Alt-Delight']
    drinks.forEach(drink => {
        it(`Validar se a bebida "${drink}" está disponível`, () => {
            cy.acessarHome()
            cy.acessarFormulario()


            cy.get('#feedbackForm > :nth-child(6)').should('have.text', 'What is your favorite drink?')

            cy.get('[name="fav_drink"]')
                .next()
                .should('contain', `${drink}`)
        })
    })

    it('Selecionar todas as bebidas', () => {
        cy.acessarHome()
        cy.acessarFormulario()

        cy.get('#feedbackForm > [type="checkbox"]').should('not.be.checked')

        cy.get('#feedbackForm > [type="checkbox"]').then(($checkboxes) => {
            cy.wrap($checkboxes).each(($checkbox) => {
                cy.get($checkbox).click()
            })
        })

        cy.get('#feedbackForm > [type="checkbox"]').should('be.checked')
    })

    const colors = ['Red', 'Blue', 'Yellow', 'Green', '#FFC0CB']
    colors.forEach(color => {
        it(`Validar se a cor "${color}" está disponível`, () => {

            cy.acessarHome()
            cy.acessarFormulario()


            cy.get('#feedbackForm > :nth-child(24)').should('have.text', 'What is your favorite color?')

            cy.get(`[name="fav_color"][value='${color}']`)
                .next()
                .should('contain', `${color}`)
        })
    })

    it('Interagindo com radio buttons', () => {
        cy.acessarHome()
        cy.acessarFormulario()

        cy.get('#feedbackForm > [type="radio"]').should('not.be.checked')

        cy.get('#feedbackForm > [type="radio"]').then(($radioButtons) => {
            cy.wrap($radioButtons).each(($radioButton) => {
                cy.get($radioButton).click()
            })
        })

        cy.get('#feedbackForm > [type="radio"]').then(($radioButtons) => {

            const primeirosRadioButtons = $radioButtons.slice(0, 4)

            cy.get(primeirosRadioButtons).should('not.be.checked')
        })


        cy.get('#feedbackForm > [type="radio"]')
            .last()
            .should('be.checked')
    })

    const answers = ['Yes', 'No', 'Undecided']
    answers.forEach(answer => {
        it(`Validar se a resposta "${answer}" está disponível`, () => {

            cy.acessarHome()
            cy.acessarFormulario()


            cy.get('#feedbackForm > :nth-child(42)').should('have.text', 'Do you like automation?')


            cy.get(`[name="automation"] option:contains(${answer})`).should('have.text', `${answer}`)
        })
    })

    it("Selecionar respostas e validar que foram selecionadas", () => {
        cy.acessarHome()
        cy.acessarFormulario()

        const answersss = ["Yes", "No", "Undecided"]

        cy.wrap(answersss).each((answerss) => {
            cy.get('[name="automation"]')
                .select(answerss)
                .wait(2000)
                .should('have.value', answerss.toLowerCase())
        })
    })



    const tools = ['Selenium', 'Playwright', 'Cypress', 'Appium', 'Katalon Studio']
    tools.forEach(tool => {
        it(`Validar se a resposta "${tool}" está disponível`, () => {

            cy.acessarHome()
            cy.acessarFormulario()


            cy.get('#feedbackForm > :nth-child(47)').should('have.text', 'Automation tools')


            cy.get(`#feedbackForm > ul > li:contains(${tool})`).should('have.text', `${tool}`)
        })
    })

    it('Submeter formulário com sucesso - Sem uso da biblioteca Faker', () => {
        cy.acessarHome()
        cy.acessarFormulario()

        cy.preencherNome().then(($el) => {
            cy.wrap($el.text()).as('nomeGerado') // Armazena o nome em um alias
        })
        cy.preencherSenha()
        cy.selecionarBebida()
        cy.selecionarCor()
        cy.selecionarResposta()
        cy.preencherEmail()
        cy.escreverMensagem()
        cy.botaoSubmit()

        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Message received!')
        })
    })

    it('Alterando a página...', () => {
        cy.acessarHome()
        cy.acessarFormulario()
        cy.removerElementosHeader()
        cy.inserirTextoHeader()
        cy.alterarTitulo()
        cy.alterarCaminhoPagina()
        cy.removerParagrafo()
        cy.alterarLabelNome()
        cy.removerRequired()
        cy.alterarLabelSobrenome()
        cy.atividades()
        cy.avaliacao()
        cy.comoFicouSabendo()
        cy.removerAutomationTools()
        cy.alterarLabelEmail()
        cy.alterarLabelMensagem()
        cy.alterarPlaceHolderMensagem()
        cy.alterarBotao()
        cy.inserirTextoFooter()
        cy.formatarLayouts()

    })
})
