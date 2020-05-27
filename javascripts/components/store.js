import bookData from '../helpers/data/bookData.js';
import utils from '../helpers/utils.js';

// bookData.getBook();

const addToCartEvent = (e) => {
  e.preventDefault();

  console.log('You added the book')
}

const makeStore = () => {
  const bookInfo = bookData.getBook();
  const domString = `
  <h2>Our One Book</h2>
  Buy now! It's Only
  <h3 id="book-price">${bookInfo.price}</h3>
  <img src="${bookInfo.image}">
  <button class="btn btn-danger" id="add-to-card">Add to cart<button>
  `;

  utils.printToDom('#store', domString);

  document.querySelector('add-to-cart',).addEventListener('click', addToCartEvent);
};

export default { makeStore };
