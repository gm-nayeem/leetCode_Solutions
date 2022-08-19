// using sieve algorithm (more efficient)

var countPrimes = function(n) {
    
    let primes = []

    if(n < 3) return 0

    for(let i=3; i<n; i+=2) {   // check odd number
        primes[i] = 1;
    }

    let count = 0
    let res = 0
    for(let i=3; i<n; i+=2) {
        if(primes[i] == 1) {
            count++
            for(let j=2; i*j<n; j++) {
                res++
                primes[i*j] = 0
            }
        }
    }
    console.log(res)
    return count + 1
    
};

let n = 1000
console.log(countPrimes(n));


// normal approach (not efficient)
/*
var countPrimes = function(n) {

    let num = n - 1

    if(num < 2) {
        return 0;
    }
    let p=0
    let res = 1
    for(let j=3; j<=num; j+=2) {

        let afterSqrtRoot = Math.floor(Math.sqrt(j))
        let count = 0
        for(let i=3; i<=afterSqrtRoot; i+=2){
            p++
            if(j%i == 0){
                count++
                break
            }
        }
        
        if(count==0) {
            res++
        }

    }
    console.log(p)
    return res
    

};

let n = 1000
console.log(countPrimes(n))
*/
