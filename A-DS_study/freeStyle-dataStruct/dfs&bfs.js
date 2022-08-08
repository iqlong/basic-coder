let tree = [
  {
    label: "a",
    children: [
      {
        label: "b",
        children: [
          {
            label: "d",
            children: [
              {
                label: 'I'
              }, {
                label: 'II'
              }

            ]
          },
          {
            label: "e",
          },
        ],
      },
      {
        label: "c",
        children: [
          {
            label: "f",
          },
        ],
      },
    ],
  },
];

// DFSの第一种方法：利用递归实现DFS
function dfs(tree) {
  tree.forEach((item) => {
    console.log(item.label);
    if (item.children) dfs(item.children); // 循环的改变使用参数传递实现
    // 递归的子事件结束 ： 什么也不干
  });
}

// DFSの的二中方法：利用stack来实现
// function dfs(tree){
//     if(!tree)  return null;
//     let stack=[tree];
//     // 当栈区中有内容的使用
//     while(stack.length){
//         // 要执行的stack子内容弹出来再执行
//         let item=stack.pop();
//         console.log(item.label);
//         children = item&&item.children ? item.children : [];
//         for(let i=children.length-1; i>-1; i--){
//             stack.push(children[i])
//         }
//         // 每次子递归不需要return
//     }
// }

function deepSearch1(tree) {
  let nodes = []; // 按顺序保存所有的节点
  if (tree) {
    let stack = []; // 定义一个栈
    stack.push(tree); // 原始的树入栈
    while (stack.length != 0) {
      let item = stack.pop(); // 出栈
      console.log(item, "item");
      nodes.push(item);
      // 这儿的children代表的是 --- 左子树 && 右子树
      children = item && item.children ? item.children : [];
      for (let i = children.length - 1; i >= 0; i--) {
        // 栈顶的元素先出栈，所以后面的子节点先入栈
        stack.push(children[i]); // 子节点入栈
      }
    }
    console.log(nodes, "nodes"); // abdecf
    console.log(stack, "stack");
  }
}

// BFS(tree);
function bfs([tree]){
  let queue=[tree]
  for(let i=0;i<queue.length;i++){
    const item = queue[i]
    console.log(item.label)
    queue=item.children? queue.concat(item.children):queue
  }
}
console.log('BFS-广度遍历开始了......')
bfs(tree)

console.log('----------------------------')
console.log('----------------------------')

dfs(tree)
