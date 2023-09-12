class Invoice {
    client: string;
    amount: number;
    details: string;
    

    constructor(c:string , a:number, d:string) {
        this.client = c
        this.amount = a
        this.details = d
    }

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}

const firstInvoice = new Invoice('Steven', 250, 'work on website project')
const secondInvoice = new Invoice('Josh', 220, 'testing the website project')

let invoices : Invoice[] = []
invoices.push(firstInvoice)
invoices.push(secondInvoice)

console.log(invoices)

const form = document.querySelector('form') as HTMLFormElement;
// console.log(form.children)

const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#toFrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    // Prevents the page from refreshing after the button is pressed
    e.preventDefault();

    console.log(
        type.value, 
        toFrom.value, 
        details.value, 
        amount.valueAsNumber
    )
})

