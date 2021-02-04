const checkAge = (age) => {
    if (age>=18){
        return true;
    }
    return false;
}

const greeting = (age) => {
    if (checkAge(age)){
        return "Hello there";
    }
    return "Hey kiddo";
}

console.log(greeting(6));
console.log(greeting(18));
console.log(greeting(26));

const calcVat = (vat) => {
    return 1 + (vat / 100);
}

const calcFullPrice = (price, vat) => {
    return price * calcVat(vat);
}

console.log(calcFullPrice(1000, 21));
console.log(calcFullPrice(2, 9));

const calcVatAmount = (fullPrice, vat) => {
    return fullPrice - (fullPrice / calcVat(vat));
}

const calcBasePriceAndVat = (fullPrice, vat) => {
    return [fullPrice - calcVatAmount(fullPrice, vat), calcVatAmount(fullPrice, vat)]
}

console.log(calcBasePriceAndVat(1210, 21));
console.log(calcBasePriceAndVat(2.18, 9));