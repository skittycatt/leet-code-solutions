/**
 * 
 */

var partitionString = function (s) {
    var count = 1
    const charset = new Map()
    for (let i = 0; i < s.length; i++) {
        if (charset.has(s[i])) {
            count++
            charset.clear()
            charset.set(s[i])
            continue
        }
        charset.set(s[i])
    }
    return count
}

