var singleNumber = function(nums) {

    let map = {}
    for(let i=0; i<nums.length; i++) {
        let digit = nums[i]
        map[digit] = (map[digit] || 0) + 1 
    }

    let sorted = Object.keys(map).sort((a, b) => map[a] - map[b])

    return parseInt(sorted[0])
};

let nums = [0,1,0,1,0,1,99]
console.log(singleNumber(nums));