// using map (optimize)
var missingNumber = function(nums) {

    let map = {}
    for(let i=0; i<nums.length; i++) {
        map[nums[i]] = i+1
    }
    
    for(let x=0; x<nums.length+1; x++) {
        if(!map[x]) return x
    }

}

let nums = [0,1,2,4]
console.log(missingNumber(nums));

// normally solve
/* 
var missingNumber = function(nums) {

    nums.sort((a, b) => a - b)
    let maxDigit = nums[nums.length-1]
    let res

    for(let i=0; i<=maxDigit; i++) {
        if(!nums.includes(i)) res = i
    }

    if(res==0 || res > 0) return res
    else {
        return maxDigit+1
    }

}

let nums = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]
console.log(missingNumber(nums));
*/

