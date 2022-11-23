describe('TC_login_01', () => {
    it('passes', () => {
        cy.visit('https://cerita-online-kelompok6-ti2a.000webhostapp.com/admin/login_admin.php')
        cy.get(':nth-child(1) > .form-control').type('rhd');
        cy.get(':nth-child(2) > .form-control').type('raihan123');
        cy.get('.btn').click()
    })
})

describe('TC_login_02', () => {
    it('fatal', () => {
        cy.visit('https://cerita-online-kelompok6-ti2a.000webhostapp.com/admin/login_admin.php')
        cy.get(':nth-child(1) > .form-control').type('salah');
        cy.get(':nth-child(2) > .form-control').type('raihan123');
        cy.get('.btn').click()
    })
})

describe('TC_login_03', () => {
    it('fatal', () => {
        cy.visit('https://cerita-online-kelompok6-ti2a.000webhostapp.com/admin/login_admin.php')
        cy.get(':nth-child(1) > .form-control').type('rhd');
        cy.get(':nth-child(2) > .form-control').type('salah');
        cy.get('.btn').click()
    })
})

describe('TC_login_04', () => {
    it('fatal', () => {
        cy.visit('https://cerita-online-kelompok6-ti2a.000webhostapp.com/admin/login_admin.php')
        cy.get(':nth-child(1) > .form-control').type('salah');
        cy.get(':nth-child(2) > .form-control').type('salah');
        cy.get('.btn').click()
    })
})