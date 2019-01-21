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


// "overloading" in js: sending a null as parameter. good practice: setting that parameter as the last one
function decToRoman(dec) {
    if (dec != 0)
    {
        let decLength = (dec + "").length
        let decDigit = dec % (10**(decLength - 1))
        
        return decDigit + (dec / (10**(decLength - 1))) + ""
    }

    return     
}

// translating a single dec digit to roman digit/s
function decDigitToRoman(decDigit) {
    return decDigit
}
