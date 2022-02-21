
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

var isPalindrome = function(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        while (left < right && !isAlphaNum(s[left])) {
            left++;
        }
        
        while (right > left && !isAlphaNum(s[right])) {
            right--;
        }
        
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        
        left++, right--;
    }
    return true;
};

function isAlphaNum(char) {
    return ('0'.charCodeAt() <= char.charCodeAt() && char.charCodeAt() <= '9'.charCodeAt() ||
            'A'.charCodeAt() <= char.charCodeAt() && char.charCodeAt()<= 'Z'.charCodeAt() ||
            'a'.charCodeAt() <= char.charCodeAt() && char.charCodeAt() <= 'z'.charCodeAt())
};