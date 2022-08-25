var arrayRankTransform = function(arr) {
    
    // sort cut
    let sorted = Array.from(new Set(arr)).sort((a, b) => a-b)
    return arr.map((element) => sorted.indexOf(element) + 1)


    // long process
    /*
    let h = new Set(arr)
    let sortedArr = []
    for(let val of h.values()){
        sortedArr.push(val)
    }
    sortedArr.sort((a,b) => a-b)

    for(let i=0; i<arr.length; i++) {
        let position = sortedArr.indexOf(arr[i]) + 1
        arr[i] = position
    }
    return arr
    */

};


let  arr = [37,12,28,9,100,56,80,5,12]
console.log(arrayRankTransform(arr));