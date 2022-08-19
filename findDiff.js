
var findTheDifference = function(s, t) {

    s = s.split('').sort()
    t = t.split('').sort()
    for(let i=0; i<t.length; i++) {
        if(t[i] != s[i]) return t[i]
    }
    
}

let s = "ab", t = "abc"
console.log(findTheDifference(s, t))
