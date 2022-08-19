var singleNumber = function(nums) {

    let map = {}
    for(let i=0; i<nums.length; i++) {
        let digit = nums[i]
        map[digit] = (map[digit] || 0) + 1 
    }

    let sorted = Object.keys(map).sort((a, b) => map[b] - map[a])

    return parseInt(sorted[0])
};

let nums = [1,3,4,2,2]
console.log(singleNumber(nums));