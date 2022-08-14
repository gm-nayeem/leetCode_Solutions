let s = "loveleetcode"
//let s = 'leetcode'
//let s = "aabb"

for(let i=0; i<s.length; i++) {
    let count  = 0
    for(let j=0; j<s.length; j++){
        if(s[i] == s[j]){
            count += 1
            if(count>1){
                break
            }
        }
    }
    if(count==1){
        return console.log(i);
    }
}

return console.log(-1);





