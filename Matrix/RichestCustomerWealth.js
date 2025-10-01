function maximumWealth(accounts) {
    let maxWealth = 0;
    
    for(let customer of accounts) {
        let wealthOfCustomer = 0;
        for(let money of customer) {
            wealthOfCustomer += money;
        }
        maxWealth = Math.max(maxWealth, wealthOfCustomer);
    }

    return maxWealth;
}

console.log(maximumWealth([[5,2,3],[0,6,7]])); // 13
console.log(maximumWealth([[1,2],[3,4],[5,6]])); // 11
console.log(maximumWealth([[5,10,15],[10,20,30],[15,30,45]])); // 90