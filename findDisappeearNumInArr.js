var findDisappearedNumbers = function (nums) {

    let set = new Set(nums)
    let arr = []
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) arr.push(i)
    }
    return arr
};

let nums = [4, 3, 2, 7, 8, 2, 3, 1]
console.log(findDisappearedNumbers(nums));