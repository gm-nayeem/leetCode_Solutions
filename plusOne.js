var plusOne = function(digits) {

    let lastDigit = digits[digits.length-1]
    if(lastDigit < 9) {
        digits[digits.length-1] = lastDigit + 1
        return digits
    }

    let carry = 1
    let arr = []
    arr.push(0)
    for(let i=digits.length-2; i>=0; i--) {
        if( (digits[i] + carry) > 9 ){
            arr.unshift(0)
            carry = 1
        } else {
            arr.unshift(digits[i] + carry)
            carry = 0
        }

    }
    if(carry == 1) arr.unshift(1)

    return arr
};

let digits = [9,8,9]
console.log(plusOne(digits));