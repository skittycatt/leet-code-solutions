/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const arr = s.split("")
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        let x = arr[i]
        const nxt = arr[i + 1]
        switch (x) {
            case 'M':
                sum += 1000
                break
            case 'D': 
                sum += 500
                break
            case 'C':
                if (nxt === 'D' || nxt === 'M') {
                    sum -= 100
                } else sum += 100
                break
            case 'L':
                sum += 50
                break
            case 'X':
                if (nxt === 'L' || nxt === 'C') {
                    sum -= 10
                } else sum += 10
                break
            case 'V':
                sum += 5
                break
            case 'I':
                if (nxt === 'V' || nxt === 'X') {
                    sum -= 1
                } else sum += 1
                break
        }
    }
    return sum
};

console.log(romanToInt('III'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))