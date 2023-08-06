"use strict";

// inputs
const currencyOneEl = document.getElementById("currency-one");
const currencyTwoEl = document.getElementById("currency-two");
const amountOneEl = document.getElementById("amount-one");
const amountTwoEl = document.getElementById("amount-two");

const btnSwap = document.getElementById("swap");
const rateEl = document.getElementById("rate");

// global variables
const url = ` https://v6.exchangerate-api.com/v6/972fc1c6613911a718ec109f/latest/`;

// functions
function init() {
  getCurrencyNames();
  getExchangeRates();
}

async function getCurrencyNames() {
  const response = await fetch(`${url}INR`);
  const data = await response.json();
  const countriesArr = Object.keys(data.conversion_rates);
  addCurrencyCodes(currencyOneEl, countriesArr);
  addCurrencyCodes(currencyTwoEl, countriesArr);
}

function addCurrencyCodes(ele, currencyArr) {
  currencyArr.forEach((countryCode) => {
    // create element
    const optionEl = document.createElement("option");
    optionEl.value = countryCode;
    optionEl.innerText = countryCode;
    if (countryCode !== "INR") {
      ele.appendChild(optionEl);
    }
  });
}

async function getExchangeRates() {
  const currencyOne = currencyOneEl.value;
  const currencyTwo = currencyTwoEl.value;

  const response = await fetch(`${url}${currencyOne}`);
  const data = await response.json();

  const rate = data.conversion_rates[currencyTwo];
  rateEl.innerText = `1 ${currencyOne} = ${rate.toFixed(2)} ${currencyTwo}`;
  amountTwoEl.value = (amountOneEl.value * rate).toFixed(2);
}

//event listeners
currencyOneEl.addEventListener("change", getExchangeRates);
currencyTwoEl.addEventListener("change", getExchangeRates);

amountOneEl.addEventListener("input", getExchangeRates);

btnSwap.addEventListener('click', ()=>{
  [currencyOneEl.value, currencyTwoEl.value] = [currencyTwoEl.value, currencyOneEl.value];

  getExchangeRates();
})

// initial settings
init();
