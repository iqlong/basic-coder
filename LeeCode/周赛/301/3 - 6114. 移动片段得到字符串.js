/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 * from @汪乐平
 */
var canChange = function(start, target) {
    let startStr = []
    let targetStr = []
    let startIndex = []
    let targetIndex = []
    const len = start.length

    for(let i=0; i<len; i++) {
        const strChar = start.charAt(i)
        const tgtChar = target.charAt(i)
        if(strChar !== '_') {
            startStr.push(strChar)
            startIndex.push(i)
        }
        if(tgtChar !== '_') {
            targetStr.push(tgtChar)
            targetIndex.push(i)
        }
    }

    // basic equal condition
    if(startStr.join('') !== targetStr.join('')) return false
    for(let i=0; i<startStr.length; i++) {
        if(startStr[i] === 'L' && startIndex[i] < targetIndex[i]) {
            return false
        }
        if(startStr[i] === 'R' && startIndex[i] > targetIndex[i]) {
            return false
        }

    }
    return true

};
