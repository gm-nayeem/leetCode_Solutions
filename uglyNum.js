
var isUgly = function(n) {

    let uglyNumber = [2, 3, 5]

    if(uglyNumber.includes(n) || n == 1) return true
    if(n < 1) return false

    let sqrt = Math.floor(Math.sqrt(n))
    for(let i=2; i<=sqrt; i++) {
        if(n%i == 0) {
            let div = n / i
            if(uglyNumber.includes(div)) return true
            else {
                return isUgly(div)
            }
        }
    }

    return false

};

let n = 8
console.log(isUgly(n));