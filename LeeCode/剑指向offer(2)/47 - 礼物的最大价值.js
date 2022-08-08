/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    let m = grid.length, n = grid[0].length;
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            // 保证了当前元素必定有 1 or 2 个左邻居/上邻居
            if(i != 0 || j != 0) {
                if(i == 0) {
                    grid[i][j] = grid[i][j-1] + grid[i][j]
                }else if(j == 0) {
                    grid[i][j] = grid[i-1][j] + grid[i][j]
                }else {
                    grid[i][j] = Math.max(grid[i-1][j], grid[i][j-1]) + grid[i][j]
                }
            }
        }

    }
    return grid[m-1][n-1]
};
