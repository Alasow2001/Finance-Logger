import {Invoice} from './classes/Invoice.js'
import {Payment} from './classes/Payment.js'
import { HasFormatter } from "./interfaces/HasFormatter.js"

let docOne : HasFormatter
let docTwo: HasFormatter

docOne = new Invoice("Brian", 280, "Work on the database")
docTwo = new Payment("Liam", 300, "for his weekly wage")

let docs : HasFormatter[] = []
docs.push(docOne)
docs.push(docTwo)

console.log(docs)

// const firstInvoice = new Invoice('Steven', 250, 'work on website project')
// const secondInvoice = new Invoice('Josh', 220, 'testing the website project')

// let invoices : Invoice[] = []
// invoices.push(firstInvoice)
// invoices.push(secondInvoice)

// console.log(invoices)

const form = document.querySelector('form') as HTMLFormElement;
// console.log(form.children)

const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#toFrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    // Prevents the page from refreshing after the button is pressed
    e.preventDefault();

    let doc: HasFormatter

    // Checking whether the type of finance logged is an invoice or a payment, printing the result into the console
    if (type.value === 'invoice'){
        doc = new Invoice(toFrom.value, amount.valueAsNumber, details.value)
    } else {
        doc = new Payment(toFrom.value, amount.valueAsNumber, details.value)
    }

    console.log(doc);
})

