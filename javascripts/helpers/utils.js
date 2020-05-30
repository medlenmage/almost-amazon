const printToDom = (selector, text) => {
  // const selectedDiv = document.querySelector(selector);
  // selectedDiv.innerHTML = textToPrint;
  $(selector).html(text);
}

export default { printToDom }
