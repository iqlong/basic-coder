/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    let suitsMap = new Map();
    let ranksMap = new Map();

    ranks.forEach(item => {
        if(ranksMap.has(item)) {
            ranksMap.set(item, ranksMap.get(item) + 1)
        }else {
            ranksMap.set(item, 1)
        }
    })

    suits.forEach(item => {
        if(suitsMap.has(item)) {
            suitsMap.set(item, suitsMap.get(item) + 1)
        }else {
            suitsMap.set(item, 1)
        }
    })

    let maxPair = 0;
    ranksMap.forEach((val, key) => {
        if(val > maxPair) maxPair = val;
    })

    if(suitsMap.size == 1) return 'Flush'
    else {
        if(maxPair >= 3) {
            return 'Three of a kind'
        }else if(maxPair == 2) {
            return 'Pair'
        }else {
            return 'High Card'
        }
    }
};

let res = bestHand( [4,4,2,4,4], ["d","a","a","b","c"])
console.log(res)
