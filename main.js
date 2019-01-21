// translating a decimal number to a roman number

let dec = 12

let map = new Map()
map.set(1, "I")
map.set(5, "V")
map.set(10, "X")
map.set(50, "L")
map.set(100, "C")
map.set(500, "D")
map.set(1000, "M")

alert(dec + " = " + decToRoman(roman))

function decToRoman(dec) {
    let decLength = (dec + "").length
    return decToRoman(dec, decLength)
}


// overloading? it that even allowed in java script?
function decToRoman(dec, decLength) {
    
}

// translating a single dec digit to roman digit/s
function decDigitToRoman(decDigit) {

}