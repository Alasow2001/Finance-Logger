import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
let docOne;
let docTwo;
docOne = new Invoice("Brian", 280, "Work on the database");
docTwo = new Payment("Liam", 300, "for his weekly wage");
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
// const firstInvoice = new Invoice('Steven', 250, 'work on website project')
// const secondInvoice = new Invoice('Josh', 220, 'testing the website project')
// let invoices : Invoice[] = []
// invoices.push(firstInvoice)
// invoices.push(secondInvoice)
// console.log(invoices)
const form = document.querySelector('form');
// console.log(form.children)
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    // Prevents the page from refreshing after the button is pressed
    e.preventDefault();
    let doc;
    // Checking whether the type of finance logged is an invoice or a payment, printing the result into the console
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, amount.valueAsNumber, details.value);
    }
    else {
        doc = new Payment(toFrom.value, amount.valueAsNumber, details.value);
    }
    console.log(doc);
});
