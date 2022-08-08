const tree = {
  label: "a",
  children: [
    {
      label: "b",
      children: [
        {
          label: "d",
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
};

// 使用递归的方式输出
// const dfs=(tree) => {
//     console.log(tree.label);
//     if(tree.children){
//         tree.children.forEach(element => {
//             dfs(element)
//         }); 
//     }
    
// }
function dfs(tree){
    // if(!tree)  return null;
    let stack=[tree];
    // 当栈区中有内容的使用
    while(stack.length){
        // 要执行的stack子内容弹出来再执行
        let item=stack.pop();
        console.log(item.label);
        children = item&&item.children ? item.children : [];
        for(let i=children.length-1; i>-1; i--){
            stack.push(children[i])
        }
        // 每次子递归不需要return
    }
}
dfs(tree)