export class ArrayLimited {
    maxLength: number
    values: any[]
    constructor(maxLength: number) {
        this.maxLength = maxLength
        this.values = []
    }

    push = (data: any) => {
        if (this.values.length >= this.maxLength) {
            this.values.shift();
        }
        return this.values.push(data);
    }

    isFilled = () => {
        return (this.values.length === this.maxLength)
    }

    pushFront = (data: any) => {
        if (this.values.length >= this.maxLength) {
            this.values.pop();
        }
        return this.values.unshift(data);
    }
}