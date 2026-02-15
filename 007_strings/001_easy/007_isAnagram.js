// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

let s1 = "anagram", t1 = "nagaram";
let s2 = "rat", t2 = "car";

// Uses two maps
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    let mapS = new Map(), mapT = new Map();
    for (let i = 0; i < s.length; i++) {
        mapS.set(s[i], (mapS.get(s[i]) || 0) + 1);
        mapT.set(t[i], (mapT.get(t[i]) || 0) + 1);
    }
    for (let [key, value] of mapS.entries()) {
        if (mapT.get(key) !== value) return false;
    }
    return true;
};

console.log("isAnagram: ", isAnagram(s1, t1));
console.log("isAnagram: ", isAnagram(s2, t2));

// Optimal uses 1 maps
const isAnagramOptimal = (s, t) => {
    if (s.length !== t.length) return false;
    let freq = new Map();
    for (let ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }
    for (let ch of t) {
        if (!freq.has(ch)) return false;
        freq.set(ch, freq.get(ch) - 1);
        if (freq.get(ch) < 0) return false;
    }
    return true;
};

console.log("isAnagram: ", isAnagramOptimal(s1, t1));
console.log("isAnagram: ", isAnagramOptimal(s2, t2));