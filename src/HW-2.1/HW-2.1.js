function reverse(str) {
    return str.split("").reverse().join("")
}

function palindrome(string) {
    return str === reverse(str)
}

function getPaired(arr) {
    return arr.filter(num => num % 2 === 0).reverse()
}

function sendsSMS(smsText) {
    let smsCount = Math.ceil(smsText.length / 60)
    console.log(`you need ${smsCount} sms to send text - smsText`)
}
