var frequencySort = function(nums) {
    
    let map = {}

    nums.forEach(num => {
        map[num] = (map[num] || 0) + 1
    })

    let sorted = Object.keys(map).sort((a, b) => {

        if(map[a]==map[b]) {
            return b-a
        }
        return map[a]- map[b]
        
    })

    let arr = []
    
    for(let num of sorted){
        for(let i=0; i<map[num]; i++) {
            arr.push(num-'0')
        }
    }

    return arr
    
};

let nums = [-1,1,-6,4,5,-6,1,4,1]
console.log(frequencySort(nums));