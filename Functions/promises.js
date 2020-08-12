// Callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'This time is up')
    }, 2000);
}

getDataCallback((err, data) => {
    if (err) {
        return 'error'
    }
    console.log(data)
})

// simulate a delay
// setTimeout(() => {
//     console.log('This time is up')
// }, 2000);

// Promise
const getDataPromise = (data) => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`This is my promise succes data: ${data}`)
            //reject('this is my promise error')
        }, 2000);
    })


const myPromise = getDataPromise('someData')

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})