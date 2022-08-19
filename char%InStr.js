let s = "foobar", letter = "o"

let countLetter = s.split(letter).length - 1
let len = s.length
let res = Math.floor((countLetter*100) / len)

console.log(res);