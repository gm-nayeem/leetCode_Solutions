let a = "1010", b = "1011"

let i = a.length - 1
let j = b.length - 1

let str = ""
let carry = 0

while (i>=0 || j>=0 || carry) {
    let sum = carry
    if(i>=0) {
        sum += a[i] - '0'
        i--
    }
    if(j>=0) {
        sum += b[j] - '0'
        j--
    }
    
    sum > 1 ? carry=1 : carry=0
    let rem = sum % 2
    str = rem + str
}


console.log(str);




