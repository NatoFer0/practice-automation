describe('Interagindo com calendários', () => {

    beforeEach(() => {
        cy.clearLocalStorage()
        cy.visit('https://practice-automation.com/')
    })

    const today = new Date();
    const currentDay = String(today.getDate()).padStart(2, '0');
    const month = new Date();
    const currentMonth = String(today.getMonth() + 1).padStart(2, '0');
    const year = new Date();
    const currentYear = today.getFullYear()
    const diaAtual = `${currentYear}-${currentMonth}-${currentDay}`

    const futureYear = currentYear + 2
    const dataFutura = `${futureYear}-${currentMonth}-15`

    const pastYear = currentYear - 2
    const dataPassada = `${pastYear}-${currentMonth}-15`

    it(`Validar o envio da data atual ${diaAtual}`, () => {
        cy.acessarCalendars()
        cy.get('input.date')
            .type(diaAtual)
            .type('{esc}')
        cy.get('input.date').should('value', `${diaAtual}`)
        cy.get('#columns .pushbutton-wide').click()
        cy.get('input.date').should('value', '')
    })

    it('Validar o adiantamento do calendário através da páginação', () => {
        cy.acessarCalendars()
        cy.get('input.date').click()

        cy.capturarMesAtual()
        cy.capturarAnoAtual()

        cy.adiantarCalendarioDoisAnos()

        cy.capturarMesAtual()
        cy.capturarAnoAtual()
    })

    it('Validar o atraso do calendário através da páginação', () => {
        cy.acessarCalendars()
        cy.get('input.date').click()

        cy.capturarMesAtual()
        cy.capturarAnoAtual()

        cy.atrasarCalendarioDoisAnos()

        cy.capturarMesAtual()
        cy.capturarAnoAtual()
    })



    it(`Validar o envio de data futura ${dataFutura} através da páginação do calendário`, () => {
        cy.acessarCalendars()
        cy.get('input.date').click()

        cy.capturarMesAtual()
        cy.capturarAnoAtual()

        cy.adiantarCalendarioDoisAnos()

        cy.capturarMesAtual()
        cy.capturarAnoAtual()

        cy.get('.ui-state-default:contains(15)').click()

        cy.get('input.date')
            .invoke('val')
            .then((value) => {

                let dataAtuall = value
                cy.get('input.date').should('have.value', dataAtuall)
            })

        cy.get('#columns .pushbutton-wide').click()
        cy.get('input.date').should('value', '')
    })

    it(`Validar o envio de data passada ${dataPassada} através da páginação do calendário`, () => {
        cy.acessarCalendars()
        cy.get('input.date').click()

        cy.capturarMesAtual()
        cy.capturarAnoAtual()

        cy.atrasarCalendarioDoisAnos()

        cy.capturarMesAtual()
        cy.capturarAnoAtual()

        cy.get('.ui-state-default:contains(15)').click()

        cy.get('input.date')
            .invoke('val')
            .then((value) => {

                let dataAtuall = value
                cy.get('input.date').should('have.value', dataAtuall)
            })

        cy.get('#columns .pushbutton-wide').click()
        cy.get('input.date').should('value', '')
    })

    it('Validar o envio da data de 29/02 para ano bissexto', () => {
        cy.acessarCalendars()
        cy.get('input.date')
            .type('2028-02-29')
            .type('{esc}')
        cy.get('input.date').should('value', '2028-02-29')
        cy.get('#columns .pushbutton-wide').click()
        cy.get('input.date').should('value', '')
    })

    it('Validar o envio da data de 29/02 para ano não bissexto', () => {
        cy.acessarCalendars()
        cy.get('input.date')
            .type('2025-02-29')
            .type('{esc}')
        cy.get('input.date').should('value', '2025-02-29')
        cy.get('#columns .pushbutton-wide').click()
        cy.get('.contact-form__error')
            .children()
            .next()
            .should('contain', 'Please make sure all fields are valid. You need to fix 1 error.')
    })

    it('Validar o envio sem preencher o campo data', () => {
        cy.acessarCalendars()
        cy.get('input.date')
        cy.get('input.date').should('value', '')
        cy.get('#columns .pushbutton-wide').click()
        cy.get('.contact-form__error')
            .children()
            .next()
            .should('have.text', 'The form you are trying to submit is empty.')
    })

    it('Validar o envio preenchendo o campo data com letras', () => {
        cy.acessarCalendars()
        cy.get('input.date')
        cy.get('input.date')
            .type('abcdef')
            .type('{esc}')
        cy.get('input.date').should('have.value', 'abcdef')

        cy.get('#columns .pushbutton-wide').click()
        cy.get('.contact-form__input-error > span')
            .next()
            .should('have.text', 'The date is not valid.')
        cy.get('.contact-form__error')
            .children()
            .next()
            .should('contain', 'Please make sure all fields are valid. You need to fix 1 error.')
    })

    
})