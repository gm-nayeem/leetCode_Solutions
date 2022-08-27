function afterBackspacing(arr) {
    let len = arr.length
    for(let i=0; i<len; i++) {
        if(arr[i] == '#') {
            if(arr[i-1]) {
                arr.splice(i-1, 2);
                len = arr.length
                i = i-2
            } else {
                arr.splice(i, 1);
                len = arr.length
                i = i-1
            }
            
        }
    }
    return arr.join('')
}

var backspaceCompare = function(s, t) {
    let arr_s = s.split('')
    let arr_t = t.split('') 

    let str_s = afterBackspacing(arr_s)
    let str_t = afterBackspacing(arr_t)

    console.log(str_s, str_t)

    if(str_s == str_t) return true
    else return false

};


let  s = "y#fo##f", t = "y#f#o##f"
console.log(backspaceCompare(s, t));