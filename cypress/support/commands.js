// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { LoremIpsum } from 'lorem-ipsum';

Cypress.Commands.add('acessarHome', () => {
    cy.get('div > h1')
        .should('be.visible')
        .should('have.text', 'Welcome to your software automation practice website! ')
})

Cypress.Commands.add('acessarFormulario', () => {
    cy.get('a:contains(Fields)').click()
    cy.get('div > h1').should('have.text', 'Form Fields')
})

Cypress.Commands.add('acessarPopups', () => {
    cy.get('a.wp-element-button:contains(Popups)').click()
    cy.get('h1').should('have.text', 'Popups')
})

Cypress.Commands.add('acessarSliders', () => {
    cy.get('a:contains(Sliders)').click()
})

Cypress.Commands.add('acessarCalendars', () => {
    cy.get('a:contains(Calendars)').click()
    cy.get('h1').should('have.text', 'Calendars')
    cy.get('form div div label').should('have.text', 'Select or enter a date (YYYY-MM-DD)')
})

Cypress.Commands.add('preencherNome', () => {
    //Preencher o campo nome
    const nomes = ["Ana", "Joao", "Maria", "Pedro", "Sofia", "Lucas", "Isabela", "Gabriel", "Laura", "Matheus"];
    const gerarNomeAleatorio = () => {
        return nomes[Math.floor(Math.random() * nomes.length)];
    };
    const nomeAleatorio = gerarNomeAleatorio()
    cy.get('[data-testid="name-input"]').type(nomeAleatorio)

})

Cypress.Commands.add('preencherSenha', () => {
    //Preencher o campo senha
    const senhas = ["1", "12", "123", "1234", "12345", "123456", "1234567", "12345678", "123456789", "1234567890"];
    const gerarSenha = () => {
        return senhas[Math.floor(Math.random() * senhas.length)];
    };
    const senhaAleatoria = gerarSenha()
    cy.get('[type="password"]').type(senhaAleatoria)
})

Cypress.Commands.add('selecionarBebida', () => {
    //Selecionar uma bebida aleatória
    const bebidas = ["Water", "Milk", "Coffee", "Wine", "Ctrl-Alt-Delight"];
    const gerarBebida = () => {
        return bebidas[Math.floor(Math.random() * bebidas.length)];
    };
    const bebidaAleatoria = gerarBebida()

    cy.get(`label:contains("${bebidaAleatoria}")`)
        .invoke('attr', 'for')
        .then((idCheckbox) => {
            // Usa o valor do atributo "for" para selecionar o checkbox
            cy.get(`#${idCheckbox}`).check();
            cy.get(`#${idCheckbox}`).should('be.checked');
        });
    cy.get(`label:contains("${bebidaAleatoria}")`).should('have.text', bebidaAleatoria)
})

Cypress.Commands.add('selecionarCor', () => {
    //Selecionar uma cor aleatória
    const cores = ["Red", "Blue", "Yellow", "Green", "#FFC0CB"];
    const gerarCor = () => {
        return cores[Math.floor(Math.random() * cores.length)];
    };
    const corAleatoria = gerarCor()

    cy.get(`label:contains("${corAleatoria}")`)
        .invoke('attr', 'for')
        .then((idCheckbox) => {
            // Usa o valor do atributo "for" para selecionar o checkbox
            cy.get(`#${idCheckbox}`).check();
            cy.get(`#${idCheckbox}`).should('be.checked');
        });
    cy.get(`label:contains("${corAleatoria}")`).should('have.text', corAleatoria)
})

Cypress.Commands.add('selecionarResposta', () => {
    //Selecionar uma resposta aleatória
    const respostas = ["Yes", "No", "Undecided"];
    const gerarResposta = () => {
        return respostas[Math.floor(Math.random() * respostas.length)];
    };
    const respostaAleatoria = gerarResposta()


    cy.get('[data-cy="automation"]').select(respostaAleatoria)
    cy.get('[data-testid="automation"] option:selected')
        .invoke('text')
        .should('eq', respostaAleatoria);
})

Cypress.Commands.add('preencherEmail', () => {
    cy.get('#name-input').invoke('val').then((nome) => {

        const email = `${nome}_${nome}@gmail.com`

        cy.get('#email').type(email.toLowerCase())
    })
})

Cypress.Commands.add('escreverMensagem', () => {
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 6,
            min: 2,
        },
        wordsPerSentence: {
            max: 10,
            min: 5,
        },
    });

    const randomLoremText = lorem.generateSentences(2); // Gera 2 frases aleatórias

    cy.get('[data-testid="message"]').type(randomLoremText);
})

Cypress.Commands.add('botaoSubmit', () => {
    cy.get('#submit-btn').click()
})

Cypress.Commands.add('adiantarCalendarioDoisAnos', () => {
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
    cy.get('[data-handler="next"]').click()
})

Cypress.Commands.add('atrasarCalendarioDoisAnos', () => {
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
    cy.get('[data-handler="prev"]').click()
})

Cypress.Commands.add('capturarMesAtual', () => {
    //Capturar mês atual
    cy.get('.ui-datepicker-month')
    .invoke('text')
    .then((mes) => {
        let mesAtual = mes
        cy.get('.ui-datepicker-month').should('have.text', mesAtual)
    })
})

Cypress.Commands.add('capturarAnoAtual', () => {
    //Capturar ano atual
    cy.get('.ui-datepicker-year')
    .invoke('text')
    .then((ano) => {
        let anoAtual = ano
        cy.get('.ui-datepicker-year').should('have.text', anoAtual)
    })
})

Cypress.Commands.add('capturarDiaAtual', () => {
    //Capturar dia atual
    cy.get('.ui-state-default')
    .invoke('text')
    .then((dia) => {
        let diaAtual = dia
        cy.get('.ui-state-default').should('have.text', diaAtual)
    })
})