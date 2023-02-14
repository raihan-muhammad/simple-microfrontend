import faker from 'faker';

const mount = (el) => {
  const cartDiv = `<h1>Your have ${faker.random.number()} items in your cart</h1>`;
  el.innerHTML = cartDiv;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector(`#dev-cart`);
  if (el) {
    mount(el);
  }
}

export { mount };
