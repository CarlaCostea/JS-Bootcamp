const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('You must provide a number')
    }, 2000);
})

// an async function always returns a promise
const processData = async () => {
    let data = await getDataPromise(2)
    data = await getDataPromise(data)
    return data
    //getDataPromise(2).then((data) => {
    //     console.log(data)
    // })
}

processData().then((data) => {
    console.log('Data', data)
}).catch((error) => {
    console.log('Error', error)
})