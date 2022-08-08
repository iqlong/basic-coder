import Tree from './991.1 - templateTree.mjs'

function sequenceTravers(tree) {
    // 改一下结构，统一判定，可以去除 Array.isArray() 不成立的情况
    let queue = [[tree]]
    for(let i=0; i<queue.length; i++) {
        // add the data of every layer into an array named temp
        let temp = []
        // queue become an two-dimension Array
        const item = queue[i]
        console.log(`the ${i} layer element: `)
        // if(Array.isArray(item)) {
            item.forEach(item => {
                item.left && temp.push(item.left)
                item.right && temp.push(item.right)
                console.log(item.val)
            })
        // }else {
        //     // 应对一开始只有一个对象的状态
        //     console.log(`${item.val}`)
        //     item.left && temp.push(item.left)
        //     item.right && temp.push(item.right)
        // }
        temp.length && queue.push(temp)
    }
}

sequenceTravers(Tree)
