var findDifferentBinaryString = function (nums) {
    let len = nums.length
    let power = Math.pow(2, len)

    let binToDec = (bStr) => {
        let decimal = parseInt(bStr, 2);
        return decimal
    }

    let decimalArr = []
    for (let i = 0; i < len; i++) {
        let decimal = binToDec(nums[i])
        decimalArr.push(decimal)
    }

    let set = new Set(decimalArr)
    for (let i = 0; i < power; i++) {
        if (!set.has(i)) {
        
            let res = i.toString(2);
            if(res.length == len) return res

            let loopLen = len - res.length
            for (let j = 1; j<=loopLen; j++) {
                res = '0' + res
            }
            return res
        }
    }
};

let nums = ["00","01"]
console.log(findDifferentBinaryString(nums))
