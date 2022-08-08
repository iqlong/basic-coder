// 不是链表，单纯的数组实现
var mergeTwoLists = function(list1, list2) {
    const len1= list1.length,len2=list2.length;
    // 最少一个len=0的情况
    if(len1===0||len2===0){
        return len1===0?list2:list1;
    }
    // 遍历一个数组，使用一个index，将遍历的数组插入另一个数组
    let index=0;
    let n=0;
    while (n<list1.length){
        if(list1[n]<=list2[index]){
            list2.splice(index,0,list1[n]);
            n++;
        }else if(list1[n]==list2[index]){
            index++;
        }
        index++;
    }
    return list2;
};
console.log(mergeTwoLists([1,2,4],[1,3,4]))
