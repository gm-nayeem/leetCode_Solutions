//let s = "([)]"
//et s = "(){}[]"
//let s = "))))"
let s = "({})[]"

let openStack = []

const getComplement = (v) => {
    if(v == ')') return '('
    else if(v == '}') return '{'
    else if(v == ']') return '['
}

if(s.length < 1) {
    return false
}

for(let i=0; i<s.length; i++) {
    if( (s[i] == '(') || (s[i] == '{') || (s[i] == '[') ){
        openStack.push(s[i])
    }
    else {
        let ch = getComplement(s[i])
        if(openStack.pop() != ch) {
            return console.log('false');
        }
    }
}

if(openStack.length == 0) {
    console.log('true');
} else {
    console.log('false');
}

