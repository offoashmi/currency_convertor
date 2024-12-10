const api_key = 'f4a0924ca8473619caaa061c';
const api_url = `https://v6.exchangerate-api.com/v6/${api_key}/latest/USD`;
var json;
async function fetchCurrencies() {
  try {
    const response = await fetch(api_url); // Use fetch instead of get
    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      return;
    }
    json = await response.json(); // Parse the JSON response
    console.log(json);
    const currencies=Object.keys(json.conversion_rates);
    //console.log(json); // Log the response to the console
    console.log(currencies);
    return currencies;

  } catch (error) {
    console.error("Error:", error.message); // Log any network or runtime errors
  }
}

async function conversion(){
  const fc=document.getElementById('from_currency').value;
  const tc=document.getElementById('to_currency').value;  
  const amount=document.getElementById('amount').value;

  if (isNaN(amount)) {
    console.error("Invalid amount entered");
    document.getElementById('result').value = "Invalid Amount";
    return;
  }
  const a=json.conversion_rates[fc];
  const b=json.conversion_rates[tc];

  if (!a|| !b) {
    console.error("Invalid currency selection");
    document.getElementById('result').value = "Invalid Currency";
    return;
  }

  const usd_amount=amount/a;
  const result=usd_amount*b;
  console.log(result);
  return result;
}
export {conversion};
export {fetchCurrencies};

