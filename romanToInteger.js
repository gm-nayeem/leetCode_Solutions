let s = prompt('Enter Roman Character to Convert Integer: ')

let c = 0;
let sum = 0;

const findValue = function(v) {
    if(v == 'I') return c = 1;
    else if(v == 'V') return c = 5;
    else if(v == 'X') return c = 10;
    else if(v == 'L') return c = 50;
    else if(v == 'C') return c = 100;
    else if(v == 'D') return c = 500;
    else if(v == 'M') return c = 1000;
}

for (let i = 0; i < s.length; i++) {
    let v1 = findValue(s[i]);
    let v2 = findValue(s[i+1])
    if(v1 == v2) {
        sum = sum + 2*v1;
        i = i+1;
    }
    else if(v1 > v2) {
        sum = sum + v1;
    }
    else if(v1 < v2){
        sum = sum + v2 - v1;
        i = i+1;
    } else {
        sum = sum + v1;
    }

}

return sum;

