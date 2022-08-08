let solution = function solution(array) {
    let temp = '';
    for(let i=0; i<array.length-1;i++) {
        for(let j=i+1;j<array.length;j++) {
            if(array[i]>array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
console.log(solution([-1,5,2,3]))
