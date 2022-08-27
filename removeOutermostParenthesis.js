var removeOuterParentheses = function(s) {
    let str = ""
    let cnt = 0

    for(let i=0; i<s.length; i++){
        if(s[i] == '(') {
            if(cnt > 0) {
                str += s[i] 
            }
            cnt ++
        } else {
            if(cnt > 1) {
                str += s[i]
            }
            cnt--
        }
    }

    return str
};

let s = "(()())(())"
console.log(removeOuterParentheses(s));