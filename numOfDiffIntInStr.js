var numDifferentIntegers = function(word) {
    let arr = []
    let str = ""
    for(let i=0; i<word.length; i++) {
        let digit = word[i] - '0'
        if(digit < 10) {
            str += digit
            
        } else { 
            if(str.length != 0) {
                for(let i=0; i<str.length; i++) {
                    if(str[i] == "0"){
                        str = str.substring(1)
                        i = i-1
                    } else {
                        break
                    }
                }
                arr.push(str)
                str = ""
            } 
        }
    }
    if(str.length != 0) {
        for(let i=0; i<str.length; i++) {
            if(str[i] == "0"){
                str = str.substring(1)
                i = i-1
            } else {
                break
            }
        }
        arr.push(str)
    }
    return Array.from(new Set(arr)).length
};

let word = "a1b01c001"
console.log(numDifferentIntegers(word));
