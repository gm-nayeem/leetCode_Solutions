var singleNumber = function(nums) {

    nums = nums.sort()
    console.log(nums)
    for(let i=0; i<nums.length; i+=2) {
        if(nums[i] != nums[i+1]) return nums[i]
    }

};


let nums = [4,1,2,1,2]
console.log(singleNumber(nums));