/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = ''

    // the returned string can't be longer than any given string
    for (let i = 0; i < strs[0].length; i++) {
        let chs = strs.map((strs) => strs[i])
        if (chs.every(v => v === chs[0])) {
            prefix += chs[0]
        } else break
    }
    return prefix
};
console.log(longestCommonPrefix(['flower', 'flour', 'flame']))