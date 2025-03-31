Cypress.Commands.add('removerElementosHeader', () => {
    cy.get('a.logo > img').invoke('remove')
    cy.get('.nav-menu-item-inside').invoke('remove')
    cy.get('#footer > .container').invoke('remove')
})

Cypress.Commands.add('inserirTextoHeader', () => {
    cy.get('.container-fluid').invoke('append', '<p>Estou fazendo alterações por minha vontade!</p>');
    cy.get('.container-fluid').then(($header) => {
        $header.css({
            display: 'grid',
            'place-items': 'center',
            color: 'Yellow',
            'font-size': '48px',
            'font-family': 'Algerian'
        })
    })
})

Cypress.Commands.add('alterarTitulo', () => {
    cy.get('h1').invoke('text', 'Junte-se a nós! Descubra seus interesses e participe da nossa comunidade.')
})

Cypress.Commands.add('alterarCaminhoPagina', () => {
    cy.get('.breadcrumb_last').invoke('text', 'Cadastre-se')
})

Cypress.Commands.add('removerParagrafo', () => {
    cy.get('.entry-content > :nth-child(1)').invoke('remove')
})

Cypress.Commands.add('alterarLabelNome', () => {
    cy.get('label[for="name-input"]').then(($label) => {
        const textNode = Array.from($label[0].childNodes).find(node => node.nodeType === 3);
        if (textNode) {
            textNode.textContent = 'Nome(Obrigatório): ';
        }
    });
})

Cypress.Commands.add('removerRequired', () => {
    cy.get('.red_txt').invoke('text', '')
})

Cypress.Commands.add('alterarLabelSobrenome', () => {
    cy.get('[type="password"]').parent().then(($label2) => {
        const textNode = Array.from($label2[0].childNodes).find(node => node.nodeType === 3);
        if (textNode) {
            textNode.textContent = 'Sobrenome(Opcional): ';
        }
    });
})

Cypress.Commands.add('atividades', () => {
    cy.get('label:contains(What is your favorite drink?)').invoke('text', 'Quais atividades te interessam? (Marque todas as que se aplicam)')
    cy.get('[for="drink1"]').invoke('text', 'Leitura')
    cy.get('[for="drink2"]').invoke('text', 'Esportes')
    cy.get('[for="drink3"]').invoke('text', 'Música')
    cy.get('[for="drink4"]').invoke('text', 'Jogos')
    cy.get('[for="drink5"]').invoke('text', 'Voluntariado')
})

Cypress.Commands.add('avaliacao', () => {
    cy.get('label:contains(What is your favorite color?)').invoke('text', 'Qual sua avaliação geral do evento?')
    cy.get('[for="color1"]').invoke('text', 'Excelente')
    cy.get('[for="color2"]').invoke('text', 'Bom')
    cy.get('[for="color3"]').invoke('text', 'Regular')
    cy.get('[for="color4"]').invoke('text', 'Ruim')
    cy.get('[for="color5"]').invoke('text', 'Muito Bom')
})

Cypress.Commands.add('comoFicouSabendo', () => {
    cy.get('label:contains(Do you like automation?)').invoke('text', 'Como você ficou sabendo do evento?')
    cy.get('[data-testid="automation-yes"]').invoke('text', 'Redes sociais')
    cy.get('[data-testid="automation-no"').invoke('text', 'E-mail')
    cy.get('[data-testid="automation-undecided"]').invoke('text', 'Indicação de amigos')
})

Cypress.Commands.add('removerAutomationTools', () => {
    cy.get('label:contains(Automation tools)').invoke('text', '')
    cy.get('ul:contains(Selenium)').invoke('text', '')
})

Cypress.Commands.add('alterarLabelEmail', () => {
    cy.get('[for="email"]').invoke('text', 'E-mail(Opcional): ')
})

Cypress.Commands.add('alterarLabelMensagem', () => {
    cy.get('[for="message"]').invoke('text', 'Mensagem(Opcional): ')
})


Cypress.Commands.add('alterarPlaceHolderMensagem', () => {
    cy.get('#message').invoke('attr', 'placeholder', 'Digite sua mensagem...')
})



Cypress.Commands.add('alterarBotao', () => {
    cy.get('button')
        .invoke('text', 'ENVIAR')
        .invoke('css', 'color', 'Yellow')
        .invoke('css', 'border', 'solid')
        .invoke('css', 'border-color', 'black')
        .invoke('css', 'border-width', '2px')
        .invoke('css', 'font-weight', 'bold')
})

Cypress.Commands.add('inserirTextoFooter', () => {
    cy.get('.container .copyright-text').invoke('text', '© 2025-03-30 - Renato Fernandes (Alterando a página) , Todos direitos reservados.')
})

Cypress.Commands.add('formatarLayouts', () => {
    cy.get('.container-fluid').invoke('css', 'background-color', '#3652F0')
    cy.get('body').invoke('css', 'background', '#74EDE0')

    cy.get('input[type=text], [type="password"], [name="automation"], [data-testid="message"]')
        .invoke('css', 'background-color', '#C3E4ED')
        .invoke('css', 'border', 'solid')
        .invoke('css', 'border-width', '2px')

    cy.get('h1').invoke('css', 'color', '#3652F0')
    cy.get('button').invoke('css', 'background-color', '#3652F0')

    cy.get('#copyright .container')
        .invoke('css', 'background-color', '#000')
        .invoke('css', 'color', 'fff')

    cy.get('.container .copyright-text')
        .invoke('css', 'color', 'Yellow')
        .invoke('css', 'font-weight', 'bold')

    cy.get('label:contains(Nome(Obrigatório))')
        .invoke('css', 'font-weight', 'bold')

    cy.get('label:contains(Sobrenome(Opcional))')
        .invoke('css', 'font-weight', 'bold')
        
    cy.get('label:contains(Quais atividades te interessam?)')
        .invoke('css', 'font-weight', 'bold')

    cy.get('label:contains(Qual sua avaliação geral do evento?)')
        .invoke('css', 'font-weight', 'bold')
    
    cy.get('label:contains(Como você ficou sabendo do evento?)')
        .invoke('css', 'font-weight', 'bold')

    cy.get('label:contains(E-mail(Opcional))')
        .invoke('css', 'font-weight', 'bold')
    
    cy.get('label:contains(Mensagem(Opcional))')
        .invoke('css', 'font-weight', 'bold')
})
