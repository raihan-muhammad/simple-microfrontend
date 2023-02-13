import faker from 'faker';
const cartDiv = `<h1>Your have ${faker.random.number()} items in your cart</h1>`;

document.querySelector(`#dev-cart`).innerHTML = cartDiv;
