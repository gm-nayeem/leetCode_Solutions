let num = [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], k = 516
//[1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]

let arr = []
let str = k.toString()

let left = num.length - 1
let right = str.length - 1
let carry = 0

while(left>=0 || right>=0 || carry) {
    let sum = carry
    if(left>=0) {
        sum += num[left]
    }
    if(right>=0) {
        sum += str[right] - '0'
    }

    let rem = sum % 10
    arr.unshift(rem)
    carry = Math.floor(sum / 10)

    left--
    right--
}

console.log(arr);