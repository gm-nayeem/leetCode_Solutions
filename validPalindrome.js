let s = 'A man, a plan, a canal: Panama'
let str = s.toLowerCase()

let i = 0; 
let j = str.length -1

while(i <= j) {
    if( !(str[i] >= 'a' && str[i] <= 'z' || str[i] >= '0' && str[i] <= '9') ) {
        i++
    } 
    else if( !(str[j] >= 'a' && str[j] <= 'z' || str[j] >= '0' && str[j] <= '9') ) {
        j--
    }
    else {
        if(str[i] == str[j]){
            i++
            j--
        } else {
            return console.log('false');
        }
    }
}

console.log('true');
