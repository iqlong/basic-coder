var CQueue = function() {
    this.val=[]
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.val.unshift(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.val.length==0){
        return -1
    }else{
        return this.val.pop()
    }
};
