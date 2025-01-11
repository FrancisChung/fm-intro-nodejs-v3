// new Array(1000 * 20).fill(0).map((_, i) => {
//     console.log(i)
// })


// fs.readFile('file.txt').then(function (data) {
//     console.log(data)
// })
//     .then(function (data) {
//     console.log(data)
// })
//     .then(function (data) {
//     console.log(data)
// })

// const wait = (time, cb) => {
//     setTimeout(() => {
//         cb()
//     }, time)
// }
//
// wait(3000, () => console.log("3s hello world"))

const wait2 = (time, cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

wait2(3000)
    .then(() => {
        return wait2(2000)
    })

await wait2(2000)
await wait2(3000)