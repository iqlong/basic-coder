while (line = readline()) {
    immortal(Number(line))
}

function immortal(num) {
    if(num < 3) return 1
    let first = 1, second = 1
    for(let i=3; i<=num; i++) {
        const cur = first + second;
        first = second;
        second = cur;
    }
    console.log(second)
}
