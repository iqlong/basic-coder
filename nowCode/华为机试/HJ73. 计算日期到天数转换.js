let dataStr = readline()
let dataArr = dataStr.split(' ')
const year = Number(dataArr[0])
const month = Number(dataArr[1])
const day = Number(dataArr[2])
let allDay = 0

const leapYear = year % 400 == 0 || year % 100 != 0 && year % 4 == 0
for(let i=1; i<month; i++) {
    const flag = i > 8
    if(flag ? i % 2 != 0 : i % 2 == 0) {
        if(i == 2) {
            if(leapYear) {
                allDay += 29
            }else {
                allDay += 28
            }
        }else if(i == 8) {
            allDay += 31
        }else {
            allDay += 30
        }
    }else {
        allDay += 31
    }
}

const res = day + allDay
console.log(res)
