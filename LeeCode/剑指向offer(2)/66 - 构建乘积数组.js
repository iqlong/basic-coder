/**
 * @param {number[]} a
 * @return {number[]}
 */
 var constructArr = function(a) {
    const Len = a.length;
    if (Len == 0) return []
    if (Len == 1) return [0]

    let L = new Array(Len), R = new Array(Len);
    let res = new Array(Len);
    L[0] = 1; R[Len-1] = 1;
    // recorde the array on the left
    for (let i=1; i<Len; i++) {
        L[i] = a[i-1] * L[i-1]
    }
    // recorde the array on the right
    for(let i=Len-2; i>-1; i--) {
        R[i] = a[i+1] * R[i+1]
    }

    // array retured
    for(let i=0; i<Len; i++) {
        res[i] =  L[i] * R[i]
    }
    return res

};
constructArr(
    [0, 2, 0,8,9]
)








