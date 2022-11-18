import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchange-service.js';

// Business Logic

async function getInput(currIn, currOut, amount) {
  const response = await ExchangeService.exchangeMoney(currIn, currOut, amount);
  console.log("response",response);
  if (response.result === "success") {
    printElements(response, currIn, currOut, amount);
  } else {
    printError(response, currIn, currOut, amount);
  }
}

function currencyName(code)


// UI Logic

function printElements(response, currIn, currOut, amount) {
  const fullName1 = currencyName(currIn)
  const fullName2 = currencyName(currOut)
  document.querySelector('#showResponse').innerText = `One ${currIn} is worth ${response.conversion_rate} ${currOut}.\n
  Your ${amount} ${currIn} will buy ${response.conversion_result} ${currOut}.`;
}

function printError(error, currIn, currOut) {
  if (error === "unsupported-code") {
    document.querySelector('#showResponse').innerText = `One of the currencies you selected is invalid or does not exist. Please try again.\n
    Error details: ${error.stringify(error)}`;
  } else {
    document.querySelector('#showResponse').innerText = `There was an error in your request for ${currIn} to ${currOut}: ${error}.`;
  }
}

function handleFormSubmission(event) {
  event.preventDefault();
  const amount = document.querySelector('#amount').value;
  const from = document.getElementById('currIn');
  const to = document.getElementById('currOut');
  const currIn = from.options[from.selectedIndex].value;
  const currOut = to.options[to.selectedIndex].value;
  getInput(currIn, currOut, amount);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});