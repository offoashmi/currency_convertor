import { conversion, fetchCurrencies } from "../services/services_logic.js";

// first call the function fetchcurrencies here to fetch the currencies
async function bringCurrencies(){
    const currencies=await fetchCurrencies();
    populateDropdown(currencies);
}
function populateDropdown(currencies){
    const from_currency=document.getElementById('from_currency');
    const to_currency=document.getElementById('to_currency');

    currencies.forEach(currency => {
        const option1 = document.createElement('option');
        option1.value = currency;
        option1.textContent = currency;
        from_currency.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = currency;
        option2.textContent = currency;
        to_currency.appendChild(option2);
    });
}
// on click of button i want to call the function convert

async function convertFunction() {
    const result = await conversion(); // Wait for the conversion result
    if (result !== undefined) {
      document.getElementById('result').value = result.toFixed(2); // Display result in input field
    }
  }

const button=document.getElementById('Convert');

button.addEventListener('click',convertFunction);



bringCurrencies();

