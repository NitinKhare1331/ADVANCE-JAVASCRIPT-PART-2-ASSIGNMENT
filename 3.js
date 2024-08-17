class Calculator {
    constructor(value = 0){
        this.value = value;
    }

    add(number){
        this.value += number;
        return this;
    }

    sub(number){
        this.value -= number;
        return this;
    }

    multiply(number){
        this.value *= number;
        return this;
    }

    divide(number){
        if(number != 0){
            this.value /= number;
        }
        else{
            console.log("Error dividing with zero");
        }
        return this
    }

    getResult(){
        console.log(`Result: ${this.value}`);   
    }
}

const calculator = new Calculator();

const res = calculator
.add(5)
.sub(2)
.multiply(10)
.divide(10)
.getResult()