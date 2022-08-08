/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// 记忆 -- 用于去除重复问题
function compare(n,m,word,direction,arr,memo){
    if(arr[n][m]==word[0]){
        if(memo.get(n+''+m)===m){
            return false
        }else {
            memo.set(n+''+m,m)
        }
        word = word.substring(1);
        if(word==''){
            return true
        }
        if(arr[n][m-1] && direction!='noLeft'){
            // 比较左边
            let result = compare(n,m-1,word,'noRight',arr,memo)
            if(result){
                return true
            }
        }
        if(arr[n][m+1] && direction!='noRight'){
            // 比较右边
            let result = compare(n,m+1,word,'noLeft',arr,memo)
            if(result){
                return true
            }
        }
        if(arr[n-1] && arr[n-1][m] && direction!='noTop'){
            // 比较上面
            let result = compare(n-1,m,word,'noButton',arr,memo)
            if(result){
                return true
            }
        }
        if(arr[n+1] && arr[n+1][m] && direction!='noButton'){
            // 比较下面
            let result = compare(n+1,m,word,'noTop',arr,memo)
            if(result){
                return true
            }
        }
        // 回退删除的位置要写对
        memo.delete(n+''+m);

        // else{
        //     return false
        // }
    }else{
        // 结束一个 子路径
            // 要删除回环中存储的
        return false
    }
}
var exist = function(board, word) {
    // DFS：深度优先 --- 利用递归，其中碰壁返回直接用return就行了
    // 数字结果和路径结果 -- 减枝操作
    // a[n][m]
    // left: a[n][m-1]   right:  a[n][m+1]
    // top : a[n-1][m]   button: a[n+1][m]
    // 二维数组的遍历
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            const memo = new Map()
            if(compare(i,j,word,'',board,memo)){
                return true
            }
        }
    }
    return false

};
// 会出现循环问题！！！
// console.log(exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]],"ABCESEEEFS"))
console.log(exist([['a','a'],['a','a']],"aaaaa"))
