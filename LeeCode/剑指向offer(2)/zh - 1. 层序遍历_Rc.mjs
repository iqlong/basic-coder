import Tree from './991.1 - templateTree.mjs'

// 初始层序遍历版本
function sequenceTravers(tree) {
    let queue = [[tree]]
    for(let i=0; i<queue.length; i++) {
        let temp = []
        const item = queue[i]
        console.log(`the ${i} layer element: `)
        item.forEach(item => {
            item.left && temp.push(item.left)
            item.right && temp.push(item.right)
            console.log(item.val)
        })

        temp.length && queue.push(temp)
    }
}

// 衍生 - 层序遍历统计每层的sumVal
function sequenceSumVal(tree) {
    let queue = [[tree]]
    for(let i=0; i<queue.length; i++) {
        let temp = []
        const item = queue[i]
        let sum = 0;
        console.log(`the ${i} layer element's sumVal: `)
        item.forEach(item => {
            item.left && temp.push(item.left)
            item.right && temp.push(item.right)
            // console.log(`test val: ${item.val}`)
            sum += item.val
        })
        console.log(sum)

        temp.length && queue.push(temp)
    }
}

sequenceTravers(Tree)
sequenceSumVal(Tree)
