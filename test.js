
function assertEquals(expected, actual, message) {
    if (expected != actual) {
        msg = "expected: " + expected + ", actual: " + actual
        if (message != null) {
            msg = message + ": " + msg
        }
        console.error(msg)
    }

    console.error(" Hurra! exp = actual")
}

assertEquals("2", decToRoman(2), " checking function calls ")
assertEquals("2", decToRoman(2))


// assertEquals("II", decToRoman(2))
// assertEquals("10 -> X", "X", decToRoman(10))


