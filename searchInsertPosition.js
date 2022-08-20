var searchInsert = function(nums, target) {

    if(nums.includes(target)) {
        for(let i=0; i<nums.length; i++) {
            if(nums[i] == target) return i
        }
    }

    for(let i=0; i<nums.length; i++) {
        if(nums[i] > target) return i
    }

    return nums.length
    
};

let nums = [1,3,5,6], target = 2
console.log(searchInsert(nums, target));
