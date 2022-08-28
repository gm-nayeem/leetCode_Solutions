var timeRequiredToBuy = function(tickets, k) {
    
    let totalSecond = 0
    while(tickets[k] != 0) {
        for(let i=0; i<tickets.length; i++) {
            if(tickets[k] == 0) break
            if(tickets[i] > 0) {
                totalSecond++
                tickets[i]--
            }
        }
    }
    return totalSecond
};

let tickets = [2,3,2], k = 2
console.log(timeRequiredToBuy(tickets, k))