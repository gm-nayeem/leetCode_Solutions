let strs = ["apa","apbc","ap","apb","apb"]
let sum = ""

if(strs.length == 1){
    return console.log(strs[0]);
}

for (let i = 0; i < strs.length-1; i++) {
    sum = ""
    for (let j = 0; j < strs[i].length; j++) {
        if (strs[i][j] == strs[i+1][j]) {
            sum += strs[i][j]
        } else {
            break
        }
    }  
    strs.splice(i, 2)
    strs.unshift(sum)
    i--
    if(sum == "") break
}

console.log(sum);

