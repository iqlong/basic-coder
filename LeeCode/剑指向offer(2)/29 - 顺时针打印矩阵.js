/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    if(matrix.length<2) return matrix[0]
    const yLen=matrix[0].length,xLen=matrix.length;
    // 记遍历的次数
    let xTimes=yLen,yTimes=xLen-1;
    // 记遍历的位置
    let n=0;
    let x=0,y=0;
    let result=[];
    let flag=true;
    while(xTimes>0){
        // 对于x的遍历
        if(y<yLen-1-n && flag){
            // x递增的遍历方式
            for(;y<yLen-n;y++){
                result.push(matrix[x][y])
            }
            y--;    // 拙劣的回退
            // 为下一步(对y的遍历)做好准备
            x++;
        }else if(y==yLen-2-n){
            // x递减的遍历方式

            for(;y>=n;y--){
              result.push(matrix[x][y])
            }
            y++;
            x--;
        }
        // 对于y的遍历
        if(x<=xLen-1-n && flag){
            // x递增的遍历方式
                // 也要多余考虑的东西
            for(;x<xLen-n;x++){
                result.push(matrix[x][y])
            }

            x--;    // 回退
            y--;
            flag=!flag;

        }else if(x==xLen-2-n){
            n++
            // x递减的遍历方式
            // 要考虑的 - 第一次静茹
            for(;x>n-1;x--){
              result.push(matrix[x][y])
            }
            x++;
            y++;
            flag=!flag

        }

        xTimes--;
        yTimes--;
    }
    console.log(result);
    return result

};
 const matrix = [[1,2,3,],[4,5,6,],[7,8,9,],[7,8,9,]];
spiralOrder(matrix)

// 注意只有两列的数组

