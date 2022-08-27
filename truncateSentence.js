var truncateSentence = function(s, k) {
    let arr = s.split(' ')
    let str = ""
    for(let i=0; i<k; i++) {
        str += arr[i] + " "
    }
    return str.trim()
};

let s = "Hello how are you Contestant", k = 4
console.log(truncateSentence(s, k));