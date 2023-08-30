export class ArrayLimited<ArrayType = any> {
    maxLength: number
    values: ArrayType[]
    constructor(maxLength: number) {
        this.maxLength = maxLength
        this.values = []
    }

    push = (data: ArrayType) => {
        if (this.values.length >= this.maxLength) {
            this.values.shift();
        }
        return this.values.push(data);
    }

    isFilled = () => {
        return (this.values.length === this.maxLength)
    }

    pushFront = (data: ArrayType) => {
        if (this.values.length >= this.maxLength) {
            this.values.pop();
        }
        return this.values.unshift(data);
    }
}
