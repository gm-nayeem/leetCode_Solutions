let s = "aab", t = "ahbgdacab"
// true

let x = 0, cnt = 0
for(let i=0; i<s.length; i++){
    let index = x
    for(let j=index; j<t.length; j++){
        if(s[i]==t[j]){
            cnt++
            x = j + 1
            break
        }
    }
    
}

cnt == s.length ? console.log(true) : console.log(false)


