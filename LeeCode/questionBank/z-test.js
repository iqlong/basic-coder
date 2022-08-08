function test(root, flag) {
    // 从后向前，保存最小值和最大值
    if(!root.left && !root.right) {
        return root.val
    }

    let left
    if(root.left) {
        left = test(root.left, 'max')
        if(left === false) return false
    }
    let right
    if(root.right) {
        right = test(root.right, 'min')
        // 递归函数的break
        if(right == false) return false
    }

    if(left !== undefined && root.val <= left ||
        right !== undefined && root.val >= right) {
        return false
    } else {
        if(left === undefined) {
            return flag == 'max' ? Math.max(root.val, right)
                : Math.min(root.val, right)
        }else if(right === undefined) {
            return flag == 'max' ? Math.max(root.val, left)
                : Math.min(root.val, left)
        }else {
             return flag == 'max' ? Math.max(root.val, left, right)
                : Math.min(root.val, left, right)
        }
    }
}
var isValidBST = function(root) {
    const res = test(root)
    return res !== false
};

let tree = {
    val: 5,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: {
        val: 4,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 6,
            left: null,
            right: null
        }
    }
}
tree = {
    val: 2,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null

    }
}
tree = {
    val: 32,
    left: {
        val: 26,
        left: {
            val: 19,
            left: null,
            right: {
                val: 27,
                left: null,
                right: null
            }
        },
        right: null
    },
    right: {
        val: 47,
        left: null,
        right: {
            val: 56,
            left: null,
            right: null
        }
    }
}
tree = {
    val: 120,
    left: {
        val: 70,
        left: {
            val: 50,
            left: {
                val: 20,
                left: null,
                right: null
            },
            right: {
                val: 55,
                left: null,
                right: null
            }

        },
        right: {
            val: 100,
            left: {
                val: 75,
                left: null,
                right: null
            },
            right: {
                val: 110,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 140,
        left: {
            val: 130,
            left: {
                val: 119,
                left: null,
                right: null
            },
            right: {
                val: 135,
                left: null,
                right: null
            }
        },
        right: {
            val: 160,
            left: {
                val: 150,
                left: null,
                right: null
            },
            right: {
                val: 200,
                left: null,
                right: null
            },
        }
    }
}
let res = isValidBST(tree)
console.log(res)
