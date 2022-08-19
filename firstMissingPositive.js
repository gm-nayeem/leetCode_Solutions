var firstMissingPositive = function(nums) {

    let map = {}
    for(let i=0; i<nums.length; i++) {
        map[nums[i]] = i+1
    }
    
    for(let x=1; x<=nums.length + 1; x++) {
        if(!map[x]) return x
    }

}

let nums = [0]
console.log(firstMissingPositive(nums));