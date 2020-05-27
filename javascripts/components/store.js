import bookData from '../helpers/data/bookData.js';
import utils from '../helpers/utils.js';
import cart from './cart.js'

// bookData.getBook();

const addToCartEvent = (e) => {
  e.preventDefault();

  cart.cartToDom();
}

const makeStore = () => {
  const bookInfo = bookData.getBook();
  const domString = `
  <h2>Our One Book</h2>
  Buy now! It's Only
  <h3 id="book-price">${bookInfo.price}</h3>
  <img src="${bookInfo.image}">
  <button id="add-to-cart" class="btn btn-danger">Add to cart<button>
  `;

  utils.printToDom('#store', domString);

  document.querySelector('#add-to-cart').addEventListener('click', addToCartEvent);
};

export default { makeStore };
