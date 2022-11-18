import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchange-service.js';

// Business Logic

async function getInput(currIn) {
  const response = await ExchangeService.exchangeMoney(currIn);
  if (response.main) {
    printElements(response, currIn);
  } else {
    printError(response, currIn);
  }
}

// UI Logic

function printElements(response, currIn) {
  document.querySelector('#showResponse').innerText = `${currIn} has an exchange rate of ${response.conversion_rate}`
  //  to ${currOut}.\n
  // Your ${amount} ${currIn} will buy ${response.conversion_result} ${currOut}.`;
}

function printError(error, currIn) {
  document.querySelector('#showResponse').innerText = `There was an error in your request for ${currIn}: 
  ${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  // const amount = document.querySelector('#amount').value;
  const from = document.getElementById('currIn');
  // const to = document.getElementById('currOut');
  const currIn = from.options[from.selectedIndex].value;
  // const currOut = to.options[to.selectedIndex].value;
  document.querySelector('#currIn').value = null;
  // document.querySelector('#currOut').value = null;
  getInput(currIn);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});