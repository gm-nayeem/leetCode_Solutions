var makeGood = function(s) {
    let arr = []

    for(let i=0; i<s.length; i++) {

        if(arr.length == 0) arr.push(s[i]);
        else {
            let x = s.charCodeAt(i)
            let y = arr[arr.length-1].charCodeAt()
            let diff = Math.abs(x-y)
    
            if(diff == 32) arr.pop()
            else arr.push(s[i])
        }

        
    }
    return arr.join('')
};

let s = "abBAcC"
console.log(makeGood(s));
