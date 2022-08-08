var MaxQueue = function() {
    // new 创建一个新对象，给对象赋予[[prototype]] this指向这个新对象，若构函没有return则返回这个新对象
    this.queue = []
};

/**
 * @return {number}
 */
// 为空的时候返回-1
// 不改变队列元素的数量，但要完全遍历一次队列 - 以找到最大值
MaxQueue.prototype.max_value = function() {
    if(!this.queue.length) return -1;

    const max = this.queue.reduce( (pre, cur) => {
        if(pre < cur) pre = cur;
        return pre;
    })
    return max;
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.queue.push(value)
};

/**
 * @return {number}
 */
// 为空的时候返回-1
MaxQueue.prototype.pop_front = function() {
    if(this.queue.length == 0) return -1
    return this.queue.shift()
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
