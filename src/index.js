import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchange-service.js';

// Business Logic

async function getInput(currIn, currOut, amount) {
  const response = await ExchangeService.exchangeMoney(currIn, currOut, amount);
  if (response.main) {
    printElements(response, currIn, currOut, amount);
  } else {
    printError(response, currIn, currOut, amount);
  }
}

// UI Logic

function printElements(response, currIn, currOut, amount) {
  document.querySelector('#showResponse').innerText = `${currIn} has an exchange rate of ${response.conversion_rate} to ${currOut}.\n
  Your ${amount} ${currIn} will buy ${response.conversion_result} ${currOut}.`;
}

function printError(error, currIn, currOut) {
  document.querySelector('#showResponse').innerText = `There was an error in your request for ${currIn} to ${currOut}: 
  ${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const amount = document.querySelector('#amount').value;
  const from = document.getElementById('currIn');
  const to = document.getElementById('currOut');
  const currIn = from.options[from.selectedIndex].value;
  const currOut = to.options[to.selectedIndex].value;
  document.querySelector('#currIn').value = null;
  document.querySelector('#currOut').value = null;
  getInput(currIn, currOut, amount);
}
// size.options[size.selectedIndex].value

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});