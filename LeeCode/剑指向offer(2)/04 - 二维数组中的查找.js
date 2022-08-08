/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    if(matrix.length==0 || matrix[0].length==0){
        return false
    }
    // 线性查找法
    const row=matrix.length,col=matrix[0].length;
    let r=0,c=col-1;
    while(r<row && c>=0){
        if(matrix[r][c]>target){
            c--;
        }else if(matrix[r][c]<target){
            r++;
        }else{
            return true;
        }
    }
    return false;

};
findNumberIn2DArray([[-5]], -10)
