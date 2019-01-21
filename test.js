
function assertEquals(expected, actual, message) {
    if (expected != actual) {
        msg = "expected: " + expected + ", actual: " + actual
        if (message != null) {
            msg = message + ": " + msg
        }
        console.error(msg)
    }
}

assertEquals("II", decToRoman(2))
assertEquals("10 -> X", "X", decToRoman(10))
