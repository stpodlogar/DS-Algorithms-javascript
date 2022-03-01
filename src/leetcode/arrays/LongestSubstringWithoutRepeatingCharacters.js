// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let hash_set = new Set();
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        while(hash_set.has(s[right])) {
            hash_set.delete(s[left]);
            left++;
        }
        hash_set.add(s[right]);
        max = Math.max(max, right - left + 1);
    }
    return max;
};
