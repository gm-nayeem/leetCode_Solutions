var frequencySort = function(s) {
    
    let map = {}

    for(let ch of s) {
        map[ch] = (map[ch] || 0) + 1
    }

    let sorted = Object.keys(map).sort((a, b) => map[b] - map[a])
    let str = ""
    
    for(let ch of sorted){
        for(let i=0; i<map[ch]; i++) {
            str += ch
        }
    }

    return str
    
};

let s = "tree"
console.log(frequencySort(s));