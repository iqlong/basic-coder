/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function(n) {
    // 键值对首选map
    let pre = new Map()
    // 由于 n>1
    for(let n=1; n<=6; n++) {
        pre.set(n, 1/6)
    }

    // 递推的过程从 2 - n
    for(let i=2; i<=n; i++) {
        let cur = new Map();
        for(let idx=i; idx<=6*i; idx++) {
            let sum=0;
            for(let preIdx= idx<=6 ? idx-1 : 6; preIdx>=1; preIdx--) {
                // for改变循环因子一直是最后，while不一定
                if(!pre.get(idx - preIdx) && (idx - preIdx) > 6*(i-1)) break
                sum += pre.get(idx - preIdx) || 0
            }
            cur.set(idx, sum * 1/6)
        }
        pre = cur;
    }

    // pre 还要遍历，将val放入数组中 再return
    let res = []
    pre.forEach( (val) => {
        res.push(val)
    })
    console.log(res)
    return res
};

dicesProbability(3)
