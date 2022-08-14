let s = "lEetcode"
let str = s.split("")

let left = 0
let right = str.length - 1

while(left < right) {
    let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    let l = vowel.includes(str[left])
    let r = vowel.includes(str[right])

    if(!l) {
        left++
    }
    if(!r) {
        right--
    }

    if( l && r ) {
        
        let temp = str[left]
        str[left] = str[right]
        str[right] = temp

        left++
        right--
    }

}

console.log(str.join(""));