import { Invoice } from './classes/Invoice.js';
const firstInvoice = new Invoice('Steven', 250, 'work on website project');
const secondInvoice = new Invoice('Josh', 220, 'testing the website project');
let invoices = [];
invoices.push(firstInvoice);
invoices.push(secondInvoice);
console.log(invoices);
const form = document.querySelector('form');
// console.log(form.children)
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    // Prevents the page from refreshing after the button is pressed
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
