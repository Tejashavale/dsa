let nums1 = [3, 1, -2, -5, 2, -4];
let nums2 = [-1, 1];

const rearrangePosNegNos = (nums) => {
    let pos = [], neg = [];
    let n = nums.length;
    let result = new Array(n);

    for (let num of nums) {
        if (num < 0) neg.push(num);
        else pos.push(num);
    }
    for (let i = 0; i < pos.length; i++) {
        result[2 * i] = pos[i];
        result[2 * i + 1] = neg[i];
    }

    return result;
}

console.log("rearrangePosNegNos: ", rearrangePosNegNos(nums1));
console.log("rearrangePosNegNos: ", rearrangePosNegNos(nums2));

const rearrangePosNegNosOptimal = (nums) => {
    let pos = 0, neg = 1;
    let n = nums.length;
    let result = new Array(n).fill(0);
    for (let num of nums) {
        if (num < 0) {
            result[neg] = num;
            neg += 2;
        } else {
            result[pos] = num;
            pos += 2;
        }
    }
    return result;
}


console.log("rearrangePosNegNosOptimal: ", rearrangePosNegNosOptimal(nums1));
console.log("rearrangePosNegNosOptimal: ", rearrangePosNegNosOptimal(nums2));
