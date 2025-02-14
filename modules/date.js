const myDate = new Date()
const months = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
]

let day = myDate.getDate()
let month = months[myDate.getMonth()]
let year = myDate.getFullYear()
let hour = myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours()
let minuts =
    myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes()

export const currentDate = `${day}.${month}.${year} ${hour}:${minuts}`
