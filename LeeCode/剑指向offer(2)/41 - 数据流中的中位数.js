/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.arr= [],

        function binarySearch(left,right,target){
            // this: 第一次call会修改this的指向，但是之后的递归调用this==global了
            while(left<right){
                // 二分查到的
                const mid = left +Math.floor((right-left)>>1)
                if(this[mid]==target || mid==left) return mid
                if(this[mid]>target){
                    return binarySearch(left,mid,target)
                }else{
                    return binarySearch(mid,right,target)
                }
            }
            // 没找到的情况
            return left
        }

};



/**
 * @param {number} num
 * @return {void}
 */

MedianFinder.prototype.addNum = function(num) {
    // 若是按顺序添加，就不用后续排序了啊，
    // 直接()left+(len-left)>>1) 就可以了
    const len = this.arr.length;
    if(len==0) {
        this.arr.push(num)
    }else{
        // 二分查找
        const bindSearch = binarySearch.bind(this.arr)

        const searchIndex = bindSearch(0,len,num)
        console.log(`preArr:${this.arr}, index: ${searchIndex}`)

        // 在当前位置后插入元素
        this.arr.splice(searchIndex+1, 0, num)
        console.log(`curArr:${this.arr}`)
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const len = this.arr.length;
    const mid = Math.floor((len-1)>>1)
    if(len%2==0){
        return (this.arr[mid]+this.arr[mid+1])>>1
    }else{
        return this.arr[mid]
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
