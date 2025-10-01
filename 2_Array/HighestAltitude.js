function largestAltitude(gain) {
    let maxAltitude = 0;
    let currentAltitude = 0;
    for(let gainInAltitude of gain) {
        currentAltitude += gainInAltitude;
        maxAltitude = Math.max(currentAltitude, maxAltitude);
    }
    return maxAltitude;
}

console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1
console.log(largestAltitude([4, -3, 2, -1, -2])); // 4
console.log(largestAltitude([2, 2, -3, -1, 2, 1, -5])); // 4