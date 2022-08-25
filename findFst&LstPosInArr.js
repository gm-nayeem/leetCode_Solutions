

function binarySearch(newArr, arr, begin, end, val){

    if(begin > end) return;

    let mid = Math.floor((end + begin) / 2)

    if(arr[mid] == val) {
        newArr.push(mid);
    }
    
    binarySearch(newArr, arr, begin, mid-1, val);
    binarySearch(newArr, arr, mid+1, end, val);
        
}    

var searchRange = function(nums, target) {
    let sorted = nums.sort((a, b) => a-b)
    let begin = 0
    let end = sorted.length - 1;
    let res = []

    if(!nums.includes(target)) return [-1,-1]
    binarySearch(res, sorted, begin, end,  target)
    res.sort((a, b) => a-b)

    if(res.length == 1) {
        res.push(res[0])
        return res
    }
    if(res.length == 2) {
        return res
    }
    
    let res2 =[]
    res2.push(res[0])
    res2.push(res[res.length-1])
    return res2
    
    
};

let nums = [1, 2, 3,3,3,3], target = 3
console.log(searchRange(nums, target));