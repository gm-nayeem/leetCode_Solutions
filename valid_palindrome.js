let s =  "A man, a plan, a canal: Panama"
let newStr = s.split(' ').join('').toLowerCase()

let rev = ""
let len = newStr.length

if(len == 0 || len == 1) {
    console.log('true');
    return 
}

for(let i=0; i<len; i++) {
    let ch = newStr[i]
    let charValue = newStr.charCodeAt(i)
    
    if( (charValue < 48 || charValue > 57) && (charValue < 97 || charValue > 122) ) {
        newStr = newStr.replace(ch, '')
        len--
        i--
    } else {
        rev = ch + rev
    }
}

newStr == rev ? console.log('true') : console.log('false');

