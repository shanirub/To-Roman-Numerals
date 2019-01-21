
function assertEquals(expected, actual, message) {
    if (expected != actual) {
        msg = "expected: " + expected + ", actual: " + actual
        if (message != null) {
            msg = "ERROR: " + message + ": " + msg
        }
        console.error(msg)
    }
    else console.error(" Hurra! exp = actual! " + "expected: " + expected + ", actual: " + actual)
}

assertEquals("II", decToRoman(2))
assertEquals("X", decToRoman(10))
assertEquals("CMV", decToRoman(905))
assertEquals("", decToRoman(0))
assertEquals("I", decToRoman(1))
assertEquals( "IV", decToRoman(4))
assertEquals("VI", decToRoman(6))
assertEquals("IX", decToRoman(9))
assertEquals("XI", decToRoman(11))
assertEquals("XL", decToRoman(40))
assertEquals("LX", decToRoman(60))
assertEquals("MDC", decToRoman(1600))
assertEquals("CMV", decToRoman(905))
assertEquals("XLII", decToRoman(42))
assertEquals("XCIX", decToRoman(99))
assertEquals("MMXIII", decToRoman(2013))
assertEquals("MCDXCII", decToRoman(1492))
assertEquals("MCMLXXXIV", decToRoman(1984))

