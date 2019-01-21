// translating a decimal number to a roman number

let ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
let tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
let hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
let thousands = ['', 'M', 'MM', 'MMM']

function decToRoman(dec) {

    thousandsDigit = ~~(dec / 1000)
    dec %= 1000
    // console.error("1000=" + thousandsDigit + " , dec=" + dec)

    hundredsDigit = ~~(dec / 100)
    dec %= 100
    // console.error("100=" + hundredsDigit + " , dec=" + dec)

    tensDigit = ~~(dec / 10)
    dec %= 10
    // console.error("10=" + tensDigit + " , dec=" + dec)

    onesDigit = dec
    // console.error("1=" + onesDigit + " , dec=" + dec)


    return ("" + thousands[thousandsDigit] + hundreds[hundredsDigit] + tens[tensDigit] + ones[onesDigit])
}
