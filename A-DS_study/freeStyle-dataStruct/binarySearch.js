function binarySearch(arr, L, R, num) {
    while(L < R) {
        const centerIndex = L + ( (R - L) >>> 1 )
        const curNum = arr[centerIndex]
        if(curNum == num) {
            return centerIndex
        }else if(num < curNum) {
            R = centerIndex - 1
        }else {
            L = centerIndex + 1
        }
    }
    return L
}
 