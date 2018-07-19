/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.inStack  = [];
    this.outStack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inStack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.outStack.length ===0){
        while(this.inStack.length >0){
            this.outStack.push(this.inStack.pop())
        }
    }
    if (this.outStack.length ===0){
        return null
    } else {
        return this.outStack.pop()
    }

};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.outStack.length ===0){
        while(this.inStack.length >0){
            this.outStack.push(this.inStack.pop())
        }
    }
    if (this.outStack.length ===0){
        return null
    } else {
        return this.outStack[this.outStack.length-1]
    }

};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (this.inStack.length ===0 && this.outStack.length ===0){
        return true
    }
    return false
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */