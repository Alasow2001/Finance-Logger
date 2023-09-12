export class Payment {
    constructor(recepient, amount, details) {
        this.recepient = recepient;
        this.amount = amount;
        this.details = details;
    }
    format() {
        return `${this.recepient} is owed ${this.amount} for ${this.details}`;
    }
}
