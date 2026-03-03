/*
You are given an integer array bloomDay, an integer m and an integer k.

You want to make m bouquets. To make a bouquet, you need to use k adjacent flowers from the garden.

The garden consists of n flowers, the ith flower will bloom in the bloomDay[i] and then can be used in exactly one bouquet.

Return the minimum number of days you need to wait to be able to make m bouquets from the garden. 
If it is impossible to make m bouquets return -1.
*/

let bloomDay1 = [1, 10, 3, 10, 2], m1 = 3, k1 = 1;
let bloomDay2 = [1, 10, 3, 10, 2], m2 = 3, k2 = 2;
let bloomDay3 = [7, 7, 7, 7, 12, 7, 7], m3 = 2, k3 = 3;

const makeBouquets = (bloomDay, m, k) => {
    if (bloomDay.length < m * k) return -1;
    let min = Infinity, max = -Infinity;
    for (let day of bloomDay) {
        if (day < min) min = day;
        if (day > max) max = day;
    }
    let left = min, right = max;
    let ans = -1;
    while (left <= right) {
        let day = Math.floor((left + right) / 2);
        let bouquetCount = bouquetsPossible(bloomDay, day, k, m);
        if (bouquetCount) {
            ans = day;
            right = day - 1;
        } else {
            left = day + 1;
        }
    }
    return ans;
}

const bouquetsPossible = (bloomDay, day, k, m) => {
    let bouquetCount = 0;
    let consecutiveCount = 0;
    for (let flower of bloomDay) {
        if (day >= flower) {
            consecutiveCount++
        } else {
            consecutiveCount = 0;
        }
        if (consecutiveCount === k) {
            bouquetCount++;
            consecutiveCount = 0;
        }
    }
    return bouquetCount >= m;
}

console.log("makeBouquets: ", makeBouquets(bloomDay1, m1, k1));
console.log("makeBouquets: ", makeBouquets(bloomDay2, m2, k2));
console.log("makeBouquets: ", makeBouquets(bloomDay3, m3, k3));
