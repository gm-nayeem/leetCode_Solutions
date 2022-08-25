

function binarySearch(newArr, arr, begin, end, val){

    if(begin > end) return;

    let mid = Math.floor((end + begin) / 2)

    if(arr[mid] == val) {
        newArr.push(mid);
    }
    
    binarySearch(newArr, arr, begin, mid-1, val);
    binarySearch(newArr, arr, mid+1, end, val);
        
}    

var targetIndices = function(nums, target) {
    let sorted = nums.sort((a, b) => a-b)
    let begin = 0
    let end = sorted.length - 1;
    let res = []

    if(!nums.includes(target)) return res
    binarySearch(res, sorted, begin, end,  target)
    return res.sort((a, b) => a-b)
    
};

nums = [1,2,9,2,3,3,12,3,4,5], target = 3
console.log(targetIndices(nums, target));