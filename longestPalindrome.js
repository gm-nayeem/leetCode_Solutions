let s = "abccccdd"

const longestPalindrome = (s) => {

    let originalLen = s.length
    if(originalLen==1) return 1

    let sum = 0
    let i = originalLen - 1

    while(i>=0){
        let ch = s[i]
        let prevLen = s.length
        let len = prevLen - s.replaceAll(ch, "").length

        if( len > 1) {
            if(len % 2 == 0) sum += len 
            else sum += len -1
        }
        s = s.replaceAll(ch, "")
        i = s.length - 1
    }

    return originalLen == sum ? sum : sum+1
}

console.log(longestPalindrome(s));