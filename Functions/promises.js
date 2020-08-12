// // Callback
// const getDataCallback = (callback) => {
//     setTimeout(() => {
//         callback(undefined, 'This time is up')
//     }, 2000);
// }

// getDataCallback((err, data) => {
//     if (err) {
//         return 'error'
//     }
//     console.log(data)
// })

// Callback chaining
const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2)
        } else {
            callback('Number must be provided')
        }
    }, 2000)
}

getDataCallback(2, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        getDataCallback(data, (err, data) => {
            if (err) {
                console.log('err')
            } else {
                console.log(data)
            }
        })
    }
})

// simulate a delay
// setTimeout(() => {
//     console.log('This time is up')
// }, 2000);

// // Promise
// const getDataPromise = (data) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(`This is my promise succes data: ${data}`)
//         //reject('this is my promise error')
//     }, 2000);
// })


// const myPromise = getDataPromise('someData')

// myPromise.then((data) => {
//     console.log(data)
// }, (err) => {
//     console.log(err)
// })

// myPromise.then((data) => {
//     console.log(data)
// }, (err) => {
//     console.log(err)
// })

// Promise chaining
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('You must provide a number')
    }, 2000);
})


// using nesting - not ok
getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`Promise data: ${data}`)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})

getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})