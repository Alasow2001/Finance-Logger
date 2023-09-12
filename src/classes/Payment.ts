import { HasFormatter } from "../interfaces/HasFormatter"

export class Payment implements HasFormatter{

    constructor(
        readonly recepient: string,
        public amount: number,
        private details: string,
    ) {}

    format() {
        return `${this.recepient} is owed ${this.amount} for ${this.details}`
    }
}