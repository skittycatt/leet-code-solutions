/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const xstr = x.toString()
    const rev_x_str = xstr.split("").reverse().join("")
    if (xstr === rev_x_str) {
        return true
    } else {
        return false
    }
};

isPalindrome('hewwo')