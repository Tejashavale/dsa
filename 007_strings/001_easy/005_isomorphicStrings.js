// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

let s1 = "f11", t1 = "b23";
let s2 = "paper", t2 = "title";

const isIsomorphic = (s, t) => {
    let map1 = new Map();
    let map2 = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map1.has(s[i]) && map1.get(s[i]) !== t[i]) return false;
        if (map2.has(t[i]) && map2.get(t[i]) !== s[i]) return false;

        map1.set(s[i], t[i]);
        map1.set(t[i], s[i]);
    }
    return true;
};

console.log("isIsomorphic: ", isIsomorphic(s1, t1));
console.log("isIsomorphic: ", isIsomorphic(s2, t2));