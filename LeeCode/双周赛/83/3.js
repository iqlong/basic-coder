
var NumberContainers = function() {
    this.rowMap = new Map()
    this.innerMap = new Map()
};

/**
 * @param {number} index
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
    // 从 key -> val 到 val -> key: number[]
    if(!this.rowMap.has(index)) {
        // 不存的话，那么 innerMap.set() 一定为false
        let resArr = this.innerMap.has(number) ? this.innerMap.get(number) : []

        this.innerMap.set(number, resArr.concat([index]))
    }else {
        const getVal = this.rowMap.get(index)
        // 一定存在，判断是否需要修改
        if(number !== getVal) {
            // 删除原来的，
            let getArr = this.innerMap.get(getVal)
            getArr.splice(getArr.indexOf(index), 1)
            this.innerMap.set(getVal, getArr)

            // 增加现在的
            let tArr = this.innerMap.get(getVal)
            tArr.push(index)
            this.innerMap.set(number, tArr)
        }
    }

    this.rowMap.set(index, number)
};

/**
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
    // const index = this.innerArr.indexOf(number)
    // return index;

    // let index = -1;
    // this.innerMap.forEach( (val, key) => {
    //     if(val == number) {
    //         if(key < index || index == -1) {
    //             index = key
    //         }
    //     }
    // })
    // return index;

    // console.log(this.rowMap,'@', this.innerMap)

    if(this.innerMap.has(number)) {
        const index = Math.min(...this.innerMap.get(number))
        return index;
    }else {
        return -1
    }

};

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */

let nc = new NumberContainers();
let res1 = nc.find(10); // 没有数字 10 ，所以返回 -1 。
console.log(res1)
let res2 = nc.change(2, 10); // 容器中下标为 2 处填入数字 10 。
console.log(res2)
let x = nc.find(10)
console.log(x)
