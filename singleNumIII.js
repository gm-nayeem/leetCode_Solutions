var singleNumber = function(nums) {

    if(nums.length == 2) return nums
    let map = {}
    
    for(let i=0; i<nums.length; i++) {
        let digit = nums[i]
        map[digit] = (map[digit] || 0) + 1 
    }

    let sorted = Object.keys(map).sort((a, b) => map[a] - map[b])
    let arr = []
    arr.push(parseInt(sorted[0]))
    arr.push(parseInt(sorted[1]))
    return arr
};

let nums = [-1, 0]
console.log(singleNumber(nums));