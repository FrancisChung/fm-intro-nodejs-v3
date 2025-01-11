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

const wait = (time, cb) => {
    setTimeout(() => {
        cb()
    }, time)
}

wait(3000, () => console.log("3s hello world"))