var findMedianSortedArrays = function(nums1, nums2) {
    let newArr = nums1.concat(nums2).sort((a, b) => a-b)
    let median = 0
    if(newArr.length % 2 == 1) {
        median = newArr[parseInt(newArr.length / 2)]
        return median.toFixed(5)
    }

    median = ( newArr[(newArr.length / 2)] + newArr[(newArr.length / 2)-1] ) / 2
    return median.toFixed(5)
};

let nums1 = [1,3], nums2 = [2,4]
console.log(findMedianSortedArrays(nums1, nums2));
