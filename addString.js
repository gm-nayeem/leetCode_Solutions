let num1 = "456", num2 = "77"


let res = ""
let left = num1.length -1
let right = num2.length - 1
let carry = 0

while(left >= 0 || right >= 0 || carry) {
    let sum = carry
    if(left>=0) {
        sum += num1[left] - '0'
    }
    if(right>=0) {
        sum += num2[right] - '0'
    }

    let rem = sum % 10
    res = rem + res
    carry = Math.floor(sum / 10)

    left--
    right--
}

console.log(res);