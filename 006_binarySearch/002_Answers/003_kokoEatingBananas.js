const arr1 = [7, 15, 6, 3], h1 = 8;
const arr2 = [25, 12, 8, 14, 19], h2 = 5;

const kokoEatingBananas = (arr, h) => {
    let max = 0;
    for (let item of arr) {
        if (item > max) max = item;
    }
    let left = 1, right = max;
    let speed = Infinity;
    while (left <= right) {
        let currentSpeed = Math.floor((left + right) / 2);
        let time = 0;
        for (let item of arr) {
            time += Math.ceil(item / currentSpeed);
        }
        if (time <= h) {
            speed = currentSpeed;
            right = currentSpeed - 1;
        } else {
            left = currentSpeed + 1;
        }
    }
    return speed;
}

console.log("kokoEatingBananas: ", kokoEatingBananas(arr1, h1));
console.log("kokoEatingBananas: ", kokoEatingBananas(arr2, h2));
