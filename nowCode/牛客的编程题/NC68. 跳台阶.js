function jumpFloor(number)
{
    // write code here
    if(number < 3) return number
    // f(n) = f(n-1) + f(n-2)
    let first = 1, second = 2
    for(let i=3; i<number; i++) {
        const cur = first + second
        first = second
        second = cur
    }
    return  second
}
module.exports = {
    jumpFloor : jumpFloor
};
