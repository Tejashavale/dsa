let weights1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], days1 = 5;
let weights2 = [3, 2, 2, 4, 1, 4], days2 = 3;
let weights3 = [1, 2, 3, 1, 1], days3 = 4;

const shipCargoInDays = (weights, days) => {
    let sum = 0;
    let max = 0;

    for (let weight of weights) {
        sum += weight;
        if (weight > max) max = weight;
    }

    let left = max, right = sum;
    let answer = 0;
    while (left <= right) {
        let currentCapacity = Math.floor((left + right) / 2);
        let daysRequired = caculateDaysRequired(weights, currentCapacity);
        if (daysRequired <= days) {
            answer = currentCapacity;
            right = currentCapacity - 1;
        } else {
            left = currentCapacity + 1;
        }
    }
    return answer;
}

const caculateDaysRequired = (weights, capacity) => {
    let days = 1;
    let totalWeight = 0;
    for (let weight of weights) {
        totalWeight += weight;
        if (totalWeight > capacity) {
            days++;
            totalWeight = weight;
        }
    }
    return days;
}

console.log("shipCargoInDays: ", shipCargoInDays(weights1, days1));
console.log("shipCargoInDays: ", shipCargoInDays(weights2, days2));
console.log("shipCargoInDays: ", shipCargoInDays(weights3, days3));
