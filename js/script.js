const CurrencyCodes = [
    "USD", "AED", "AFN", "ALL", "AMD",
    "ANG", "AOA", "ARS", "AUD", "AWG",
    "AZN", "BAM", "BBD", "BDT", "BGN",
    "BHD", "BIF", "BMD", "BND", "BOB",
    "BRL", "BSD", "BTN", "BWP", "BYN",
    "BZD", "CAD", "CDF", "CHF", "CLP",
    "CNY", "COP", "CRC", "CUP", "CVE",
    "CZK", "DJF", "DKK", "DOP", "DZD",
    "EGP", "ERN", "ETB", "EUR", "FJD",
    "FKP", "FOK", "GBP", "GEL", "GGP",
    "GHS", "GIP", "GMD", "GNF", "GTQ",
    "GYD", "HKD", "HNL", "HRK", "HTG",
    "HUF", "IDR", "ILS", "IMP", "INR",
    "IQD", "IRR", "ISK", "JEP", "JMD",
    "JOD", "JPY", "KES", "KGS", "KHR",
    "KID", "KMF", "KRW", "KWD", "KYD",
    "KZT", "LAK", "LBP", "LKR", "LRD",
    "LSL", "LYD", "MAD", "MDL", "MGA",
    "MKD", "MMK", "MNT", "MOP", "MRU",
    "MUR", "MVR", "MWK", "MXN", "MYR",
    "MZN", "NAD", "NGN", "NIO", "NOK",
    "NPR", "NZD", "OMR", "PAB", "PEN",
    "PGK", "PHP", "PKR", "PLN", "PYG",
    "QAR", "RON", "RSD", "RUB", "RWF",
    "SAR", "SBD", "SCR", "SDG", "SEK",
    "SGD", "SHP", "SLE", "SLL", "SOS",
    "SRD", "SSP", "STN", "SYP", "SZL",
    "THB", "TJS", "TMT", "TND", "TOP",
    "TRY", "TTD", "TVD", "TWD", "TZS",
    "UAH", "UGX", "UYU", "UZS", "VES",
    "VND", "VUV", "WST", "XAF", "XCD",
    "XDR", "XOF", "XPF", "YER", "ZAR",
    "ZMW", "ZWL"
  ];
const amount = document.querySelector("#amount");
const primaryCurrency = document.querySelector("#primary-currency")
const secoundryCurrency = document.querySelector("#secoundry-currency")
const selectMenu = document.querySelectorAll(".select-menu");
const result = document.querySelector("#result");
const convertBtn = document.querySelector("#convert-btn")
async function getData() {
    let response = await fetch(`https://v6.exchangerate-api.com/v6/df6e97f22687196dd59b93f2/latest/${selectMenu[0].value}`);
    let data = await response.json();
    console.log(data);
    let operation = Number(amount.value ) * data.conversion_rates[`${selectMenu[1].value}`];
    result.innerHTML = `${amount.value} ${data.base_code} = ${operation} ${selectMenu[1].value} `
}
function setoptions () {
  for (currency of CurrencyCodes) {
    selectMenu[0].innerHTML += `<option vlaue="${currency}" class="option">${currency}</option>`;
    selectMenu[1].innerHTML += `<option vlaue="${currency}" class="option">${currency}</option>`;
  }
}
setoptions()
console.log(selectMenu[0].value);
convertBtn.addEventListener('click',()=>{
  getData()
})
