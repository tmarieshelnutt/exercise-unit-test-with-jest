// const { sum } = require('./app.js');

// test ('adds 14 + 9 to equal 23', () => {
//     let total = sum(14, 9);
//     expect(total).toBe(23);
// });

//one euro is:
let oneEuroIs = {
    "JPY": 127.9,
    "USD": 1.2,
    "GPB": 0.8
}

//1 EUR (Euro) = 1.2 USD (US Dollar)

function fromDollarToYen(dollars) {
    const exchangeRate = 127.9;
    const yen = Dollars * exchangeRate;
    return yen;
}

const dollars = 50;
const yen = fromDollarToYen(dollars)
console.log('${dollars} dollars=${yen} yen')

function fromEuroToDollar(Euro) {
    const exchangeRate = 1.2;
    const dollar = Euro * exchangeRate;
    return dollar;
}

const euro = 50;
const dollar = fromEuroToDollar(dollars)
console.log('${euro} euro=${dollar} dollar')


function fromYenToPound(Yen) {
    const exchangeRate = 0.8;
    const pound = Yen * exchangeRate;
    return pound;
}

const yen = 50;
const pound = fromYenToPound(yen)
console.log('${yen} yen=${pound} pound')

test("One euro should be 1.206 dollars", function() {
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2;
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})