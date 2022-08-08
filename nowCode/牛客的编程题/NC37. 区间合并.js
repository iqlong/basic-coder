function merge(intervals) {
    // 按区间的左端点从小到大排序
    intervals.sort((a, b) => a.start - b.start)
    // 准备目标数组
    const target = []
    // 当intervals数组不为空时，将首元素加入目标数组
    if (intervals[0]) target.push(intervals[0])
    // 从索引1开始遍历intervals数组，与target数组中的最后一个元素（区间）做对比
    for (let i = 1; i < intervals.length; i++) {
        // target数组最后一个元素的右端点大于intervals[i]的右端点，表示intervals[i]位于当前区间内，不执行操作
        if (target[target.length - 1].end >= intervals[i].end) continue
        // target数组最后一个元素的右端点大于intervals[i]的左端点，表示两个区间有交集，更新当前元素右端点
        else if (target[target.length - 1].end >= intervals[i].start)
            target[target.length - 1].end = intervals[i].end
        // 除以上情况外，表示两个区间无交集，将intervals[i]加入target数组
        else target.push(intervals[i])
    }
    return target
}

module.exports = {
    merge : merge
};
