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
Cypress.Commands.add('loginValid', (email, password) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.get('.ldkv8w1').type(email, {delay:100});
    cy.wait(500);
    cy.get(':nth-child(2) > ._1kg30950 > ._1kg30951 > #base > .yihd6a0 > .ldkv8w1').type(password);
    cy.get('._920fuu5').click();
    cy.get('[style="max-width: 158px; min-width: auto; display: flex; justify-content: left;"] > ._13pnhtu1j > ._15kd2we1f4 > a', {timeout:10000})
    .should('contain.text', 'Limited Offers');
    cy.contains("Don't Allow") 
    .click({force: true})
});
Cypress.Commands.add('logoutAccount', () => {
    cy.contains('Get the ultimate shopping experience on voilà.id app')
    .scrollIntoView();
    cy.get('._3syuln4 > a > #base').click();
    cy.get('[data-test-id="CT_LogOut"] > ._1ugu32j0 > ._1ugu32j1 > ._1ccbe2wb').click();
    cy.contains('Would you like to sign out from your voilà.id account?').should('be.visible');
    cy.get('[data-test-id="CT_SignOut_Confirm"]').click();
    cy.url().should('include', '/');
})

Cypress.Commands.add('wrongPassword', (user) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.get('.ldkv8w1').type(user.invalidPassword.email, {delay:100});
    cy.get(':nth-child(2) > ._1kg30950 > ._1kg30951 > #base > .yihd6a0 > .ldkv8w1').type(user.invalidPassword.password);
    cy.get('._920fuu5').click();
    cy.get('._7q2fqh0 > .j1jih73h').should('have.text', 'Your account ID or password is incorrect. Please try again.');
});

Cypress.Commands.add('wrongEmail', (user) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.get('.ldkv8w1').type(user.invalidEmail.email, {delay:100});
    cy.get('._920fuu5').click();
    cy.get(':nth-child(1) > :nth-child(1) > ._15kd2weog').should('contain.text', 'Register');
    cy.get('._15r4f4dhs').should('have.text', 'Become a voilà.id member andenjoy the benefits');
    cy.url().should('include','/account/register');
});

Cypress.Commands.add('wrongUser', (user) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.get('.ldkv8w1').type(user.invalidUser.email, {delay:100});
    cy.get('._920fuu5').click();
    cy.get(':nth-child(1) > :nth-child(1) > ._15kd2weog').should('contain.text', 'Register');
    cy.get('._15r4f4dhs').should('have.text', 'Become a voilà.id member andenjoy the benefits');
    cy.get(':nth-child(3) > .j1jih78m > :nth-child(2) > ._15r4f4dfz').should('contain.text', 'Purchase History')
    cy.url().should('include','/account/register');
});
Cypress.Commands.add('forgotPass', (user) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.get('.ldkv8w1').type(user.validUser.email, {delay:100});
    cy.get('[data-test-id="CT_Link_forgotPassword"]').click()
    cy.get('._15kd2weog').should('contain.text', 'Forgot Password')
    cy.get('.ldkv8w1').type(user.validUser.email);
    cy.get('._920fuu5').click();
    cy.contains('You’re almost there');
});

Cypress.Commands.add("resetInvalidPass", (email) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.get('.ldkv8w1').type(email)
});

Cypress.Commands.add('buttonResetPass', () => {
    cy.get('._920fuu5').click()
});

Cypress.Commands.add('alertResetPassword', () => {
    cy.get('p#base').should('contain.text', 'The email or phone number you entered is not registered.')
});

Cypress.Commands.add('invalidPhoneNumber', () => {
    cy.get('.ldkv8w1').type('082124223412')
});

Cypress.Commands.add('registerEmail', (email) => {
    cy.get('[data-test-id="CT_component_identifier_input"]').type(email)
});

Cypress.Commands.add('registerPass', (password) => {
    cy.get('[data-test-id="CT_component_password_input"]').type(password)
})

Cypress.Commands.add('buttonRegister', () => {
    cy.get('[data-test-id="CT_component_register_submit"]').click({force:true})
});

Cypress.Commands.add('loginPages', () => {
    cy.url().should('include', '/account/login')
    cy.get('p#base').contains('Sign In')
});

Cypress.Commands.add('spaceFields', () => {
    cy.get('[data-test-id="CT_component_identifier_input"]').focus().type(' ')
    cy.get('[data-test-id="CT_component_password_input"]').focus().type(' ')
});

Cypress.Commands.add('spaceFieldResults', () => {
    cy.get(':nth-child(2) > ._1kg30950 > .j1jih7ak > :nth-child(1) > ._15kd2weg > #base').should('contain.text', 'Please enter email or phone number.')
    cy.get('p#base').should('contain.text', 'Password must be at least 6 characters with uppercase letters, lowercase letters, and numbers.')
});

Cypress.Commands.add('blankField', () => {
    cy.get('[data-test-id="CT_component_identifier_input"]').click()
    cy.get('[data-test-id="CT_component_password_input"]').click()
});

Cypress.Commands.add('blankFieldResults', () => {
    cy.get('p#base').should('contain.text', 'Please enter email or phone number.')
    cy.get('p#base').should('contain.text', 'Please create a password.')
});

Cypress.Commands.add('registerEmailInvalid', () => {
    cy.get('[data-test-id="CT_component_identifier_input"]').type('handika@mail')
});


Cypress.Commands.add('registerPassvalid', () => {
    cy.get('[data-test-id="CT_component_password_input"]').type('Password123')
});

Cypress.Commands.add('invalidEmailResults', () => {
    cy.get('p#base').should('contain.text', 'Please enter a valid email format or phone number.')
});

Cypress.Commands.add('registerEmailValid', () => {
    cy.get('[data-test-id="CT_component_identifier_input"]').type('handika@gmail.com')
});

Cypress.Commands.add('registerPassInvalid', () => {
    cy.get('[data-test-id="CT_component_password_input"]').type('test')
});

Cypress.Commands.add('invalidPassResults', () => {
    cy.get('p#base').should('contain.text', 'Password must be at least 6 characters with uppercase letters, lowercase letters, and numbers.')
});

Cypress.Commands.add('invalidPhoneNumber', () => {
    cy.get('[data-test-id="CT_component_identifier_input"]').type('089662171931123')
});

Cypress.Commands.add('lessPhoneNumber', () => {
    cy.get('[data-test-id="CT_component_identifier_input"]').type('08123421')
});

Cypress.Commands.add("removePopUp", () => {
    cy.wait(10000)
    cy.contains("Don't Allow") 
    .click({force: true})
});

Cypress.Commands.add("processCheckout", () => {
    cy.wait(10000)
    cy.get('[data-test-id="CT-add-to-bag-desktop"]').scrollIntoView()
    cy.wait(3000)
    cy.get('[data-test-id="CT-add-to-bag-desktop"]').click()
});

Cypress.Commands.add("selectAddress", () => {
    cy.get('[data-test-id="CT-Go-To-Cart"]').click()
    cy.wait(5000)
    cy.get('.j1jih78w > ._920fuu5').click()
    cy.get('.j1jih7a0 > ._15kd2we5s > #base').click()
    cy.get('[data-test-id="CT_Component_AddAddress"]').click()
    cy.get('[data-test-id="CT_Component_AddressLabel"]').type('Bandung Indonesia')
    cy.get('[data-test-id="CT_component_input-controller_default"]').eq(0).type('Testing',{force:true})
    cy.get('[data-test-id="CT_Component_AddressPhone"]').eq(0).type('816281',{force:true})
});

Cypress.Commands.add("submitAddress", () => {
    cy.get('[data-test-id="CT_Component_SubmitAddress"]').click({force:true})
});

Cypress.Commands.add("missingField", () => {
    cy.contains('Please enter a valid phone number.')
});

Cypress.Commands.add('addToCart', () => {
    cy.get('[data-test-id="CT-Search"]').click({ force: true });
    cy.get('.wovzo5a > ._13pnhtu1j > ._846x3h3').type('Nike {enter}', {force:true});
    cy.wait(10000);
    cy.get('[data-test-id="CT_component_product-item_Search-Result-Item"]', {timeout:1000}).first().click({force: true});
    cy.wait(5000);
    cy.get('[data-test-id="CT-add-to-bag-desktop"]').click();

    // cy.get('.ellipsis-one-line').click({force: true});
    // cy.get('#search-result-product-list-43656 > ._1nvnchg4', {timeout: 10000}).click();
    // cy.contains('Wishlist').scrollIntoView();
    // cy.url().should('include', 'products/air-jordan-1');
    // cy.get('._15r4f4dhd > ._920fuu5').click();

});

Cypress.Commands.add('checkout', () => {
    cy.get('[data-test-id="CT-Go-To-Cart"]').click();
    cy.get('h1 > .j1jih7a0 > #base > a').should('contain.text', 'Nike');
    cy.wait(500);
    cy.get('button').contains('Checkout').click();
    cy.wait(10000);
    cy.get('#shipping-list > ._15kd2we5s').click({force:true});
    cy.contains('Paxel').click();
    cy.contains('Confirm').click();
    cy.get('#payment-list > ._15kd2we5s').click({force:true});
    cy.contains('Virtual Account').click();
    cy.contains('BCA Virtual Account').click();
    cy.contains('Confirm Payment Method').click();
    cy.get('[data-test-id="CT_Component_btnPlaceOrder"]').click()
    cy.url().should('include', '/checkout');
    cy.get('button').contains('Check Order Status').click();
});


Cypress.Commands.add('searchProduct', () => {
    cy.get('[data-test-id="CT-Search"]').click({ force: true })
    cy.get('.wovzo5a > ._13pnhtu1j > ._846x3h3').type('Adidas Samba', {force:true})
});

Cypress.Commands.add('enterProduct', () => {
    cy.get('.wovzo5a > ._13pnhtu1j > ._846x3h3').type('{enter}', {force:true})
});

Cypress.Commands.add('productResult', () => {
    cy.get('.j1jih7ak > .ellipsis-one-line').should('contain.text', 'Adidas Samba')
});

Cypress.Commands.add('productMissing', () => {
    cy.get('[data-test-id="CT-Search"]').click({force: true})
    cy.get('.wovzo5a > ._13pnhtu1j > ._846x3h3').type('Product missing {enter}', {force:true})
});

Cypress.Commands.add('productResultMissing', () => {
    cy.get('.j1jih7ak > .ellipsis-one-line').should('contain.text', 'Product missing')
    cy.get('.j1jih79l > .j1jih7ak > .j1jih78w > ._17zx15te8').should('contain.text', 'Product not found')
});

Cypress.Commands.add("adidas", () => {
    cy.get('[data-test-id="CT-Search"]').click({force: true})
    cy.get('.wovzo5a > ._13pnhtu1j > ._846x3h3').type('Adidas {enter}', {force:true})
});

Cypress.Commands.add("priceRange", () => {
    cy.wait(800)
    // cy.get('input#price-input').eq(0).type('{selectAll} 1200000', {force:true})
    cy.get('input#price-input').eq(1).type('{selectAll} 3000000', {force:true})

});

Cypress.Commands.add('filterResult', () => {
    cy.get(':nth-child(2) > ._15kd2weow').should('contain.text', 'products found')

});

Cypress.Commands.add('womanFilter', () => {
    cy.wait(700)
    cy.get('button[data-test-id="CT-filter-checkbox"]').eq(0).click()
});

Cypress.Commands.add('categoryFilter', () => {
    cy.wait(500)
    cy.get(':nth-child(2) > ._15kd2weow').should('contain.text', 'products found')
});

Cypress.Commands.add('clickProduct', () => {
    cy.get(':nth-child(2) > #base > ._5cavepv')
    .click()
    cy.wait(10000)
    cy.contains('Cloud 5 Low Top Sneakers Glacier Grey White Men').scrollIntoView().click()
});

Cypress.Commands.add('detailProduct', () => {
    cy.wait(5000)
    cy.url().should('include', '/products')
    cy.wait(7000)
});

Cypress.Commands.add('productName', () => {
    cy.get('h1 > ._17zx15t6q').should('be.visible')
});

Cypress.Commands.add('productDescription', () => {
    cy.get('._15r4f4d1bk').should('be.visible')
});

Cypress.Commands.add('productPrice', () => {
    cy.get('.j1jih7ap > div > #base').should('be.visible')
});

Cypress.Commands.add('thumbnail', () => {
    // cy.get('[style="cursor: pointer; position: relative; width: 120px; height: 120px; display: inline-block; border: 2px solid var(--_1qe00b2g); overflow: hidden; opacity: 1;"] > #base > ._1olbxs22')
    // .scrollIntoView().click()
    cy.get('[data-test-id="CT-Component-Carouse-Next-Arrow"]').then(($button) => {
        for (let i = 0; i < 5; i++) {
            cy.wrap($button).click()
        }
    })
});

Cypress.Commands.add('zoomImage', () => {
    cy.wait(10000)
    cy.get('.j1jih7z > ._15kd2weu8').should('be.visible')
});

Cypress.Commands.add('zoomOver', () => {
    cy.wait(1000)
    cy.get('[data-test-id="CT-image-preview-icon-plus"]').click()
    cy.get('[data-test-id="CT-Select-Image-Preview"]').eq(2).click({force:true})
});

Cypress.Commands.add('listImage', () => {
    cy.wait(1000)
    cy.get('[data-test-id="CT_component_image_default"]').should('be.visible')
    // cy.get('[data-test-id="CT_component_image_default"]').should('have.css', 'transform')
    // .and('contain', 'translateY');
});

Cypress.Commands.add('addToWishlist', () => {
    cy.wait(5000)    
    cy.get('[data-test-id="CT-PDP-Add-to-Wishlist"]').scrollIntoView().click();
    // cy.get('._15kd2weg').click({multiple:true})
});

Cypress.Commands.add('notification', () => {
    cy.wait(300)
    // cy.get('[data-test-id="CT-wishlist-link"]').click()
    cy.contains('Product has been added to your wishlist.')
});

Cypress.Commands.add('wishlist', () => {
    cy.get('[data-test-id="CT-wishlist-link"]').click()
});

Cypress.Commands.add('wishlistProduct', () => {
    cy.get('._15r4f4di2 > .j1jih7ak > ._15kd2weow').should('contain.text', 'product')
});

Cypress.Commands.add('removeWishlist', () => {
    cy.wait(10000)
    cy.get('.wovzo5 > ._920fuu5').click()
    cy.get('._1qooj51t > :nth-child(1) > ._15kd2we5s').click()
    cy.get('.j1jih73h > :nth-child(2) > ._920fuu5').click()
    cy.get('[data-test-id="CT_Component_ConfirmContent_Ok"]').click({force:true})
});

Cypress.Commands.add("validateRemoveWishlist", () => {
    cy.get('[data-test-id="CT-wishlist-link"]').click()
    cy.wait(1000)
    cy.contains('Your wishlist is empty')
    cy.get('p#base').should('contain.text', 'Wishlist')
});

Cypress.Commands.add('wishlistCheck', () => {
    cy.contains('1 product has been removed from your wishlist.')
});

Cypress.Commands.add("wishlistToCart", () => {
    cy.contains('Cloudrift Running Sneakers Black').click()
    // cy.get('[data-test-id="CT-add-to-bag-desktop"]').click()
});

Cypress.Commands.add("wishlistResult", () => {
    cy.get('._15r4f4dhd > ._920fuu5').scrollIntoView().click()
});

Cypress.Commands.add("directedLoginPage", () => {
    cy.wait(7000)
    cy.url().should('include', '/account')
});

Cypress.Commands.add("deleteCart", () => {
    cy.get('[data-test-id="CT-Go-To-Cart"]').click()
    cy.get('.j1jih72x > ._15kd2we68').click()
    cy.get('[data-test-id="CT_Component_ConfirmContent_Ok"]').click({force:true})
});

Cypress.Commands.add("validateRemoveCart", () => {
    cy.contains('1 product has been removed.')
});

Cypress.Commands.add('clickVoucher', () => {
    cy.get('[data-test-id="CT-Go-To-Cart"]').click()
    cy.wait(7000)
    cy.get('.j1jih78w > ._920fuu5').click()
    cy.get('.j1jih79b > ._15kd2we5s').click()
    cy.wait(7000)
    cy.get('[data-test-id="CT_Component_inputCode"]').click().type('VOILAID')
    cy.get('[data-test-id="CT_Component_buttonAddVoucher"]').click()
});

Cypress.Commands.add("invalidPromo", () => {
    cy.contains('This code is invalid.')
});

Cypress.Commands.add("invalidPaymentMethod", () =>{
    cy.get('[data-test-id="CT-Go-To-Cart"]').click()
    cy.wait(7000)
    cy.get('.j1jih78w > ._920fuu5').click()
    cy.wait(5000)
    cy.get('[data-test-id="CT_Component_btnPlaceOrder"]').click()
});

Cypress.Commands.add("validationPayment", () => {
    cy.contains("Select shipping service and payment method to place order.")
});

 export class LoginPage {
    static inputValidEmail(email) {
        cy.get('.ldkv8w1').type(email, {delay:100});
    };
    
    static inputValidPassword(password) {
        cy.wait(500);
        cy.get(':nth-child(2) > ._1kg30950 > ._1kg30951 > #base > .yihd6a0 > .ldkv8w1')
        .type(password);
    };

    static inputInvalidEmail(user) {
        cy.get('.ldkv8w1').type(user.invalidEmail.email, {delay:100});
    };

    static inputInvalidPassword(user) {
        cy.get(':nth-child(2) > ._1kg30950 > ._1kg30951 > #base > .yihd6a0 > .ldkv8w1')
        .type(user.invalidPassword.password);
    }

    static buttonLogin() {
        cy.get('._920fuu5').click();
    };

    static homePage() {
        cy.wait(500);
        cy.get('[style="max-width: 158px; min-width: auto; display: flex; justify-content: left;"] > ._13pnhtu1j > ._15kd2we1f4 > a', {timeout:10000})
        .should('contain.text', 'Limited Offers');
    };

    static logoutAccount() {
        cy.contains('Get the ultimate shopping experience on voilà.id app')
        .scrollIntoView();
        cy.get('._3syuln4 > a > #base').eq(0).click();
        cy.get('[data-test-id="Container_Logout"] > ._1ugu32j0 > ._1ugu32j1').click();
        cy.contains('Would you like to sign out from your voilà.id account?').should('be.visible');
        cy.get('._920fuu5 _920fuuf _920fuub _920fuu6 _920fuui').click();
        cy.get('[data-test-id="CT_SignOut_Confirm"]').click();
        cy.url().should('include', '/');
    };

    static errorMessage() {
        cy.get('._7q2fqh0 > .j1jih73h').should('have.text', 'Your account ID or password is incorrect. Please try again.');
    };

    static registerPage() {
        cy.get(':nth-child(1) > :nth-child(1) > ._15kd2weog').should('contain.text', 'Register');
        cy.get('._15r4f4dhs').should('have.text', 'Become a voilà.id member andenjoy the benefits');
        cy.url().should('include','/account/register');
    }
};

export class ForgotPassword {
    static inputEmail(email) {
        cy.get('.ldkv8w1').type(email, {delay:100});
    };
    
    static forgotPasswordClick() {
        cy.wait(300);
        cy.get('.j1jih79v > #base').click()
    };

    static inputValidEmail(user) {
        cy.get('._15kd2weog').should('contain.text', 'Forgot Password')
        cy.get('.ldkv8w1').type(user.validUser.email);
    };

    static buttonForgotPass() {
        cy.get('._920fuu5').click();
    };

    static emailMessage() {
        cy.contains('You’re almost there');
    };
};

export class AddToCart {
    static searchProduct() {
        cy.get('[data-test-id="CT-Search"]').click({force:true});
        cy.get('.wovzo5a > ._13pnhtu1j > ._846x3h3').type('Nike{enter}', {force: true});
    };
    
    static selectProduct() {
        cy.wait(10000);
        cy.get('[data-test-id="CT_component_product-item_Search-Result-Item"]', {timeout:1000}).first().click({force: true});
    };
    
    static addProduct() {
        cy.wait(7000);
        cy.get('[data-test-id="CT-add-to-bag-desktop"]').click();
    };
    
    static addedCart() {
        cy.get('p').contains('Try virtual try-on and see size on the app to see how the product fits you.').scrollIntoView();
        cy.get('[data-test-id="CT-Go-To-Cart"]').click();
    };
    
    static productCart() {
        cy.get('h1 > .j1jih7a0 > #base > a').should('contain.text', 'Nike');
    };
};

export class Checkout{
    static process() {
        cy.wait(500);
        cy.get('button').contains('Checkout').click();
    };
    
    static shippingMethode() {
        cy.wait(10000);
        cy.get('#shipping-list > ._15kd2we5s').click();
        cy.contains('Paxel').click();
        cy.contains('Confirm').click();
    };

    static paymentMenthod() {
        cy.get('#payment-list > ._15kd2we5s').click({force:true});
        cy.contains('Virtual Account').click();
        cy.contains('BCA Virtual Account').click();
        cy.contains('Confirm Payment Method').click();
    };

    static clickOrder() {
        cy.get('[data-test-id="CT_Component_btnPlaceOrder"]').click()
    };

    static confirmPage() {
        cy.url().should('include', '/checkout');
        cy.get('button').contains('Check Order Status').click();
    };
};



