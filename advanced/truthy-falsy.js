const products = ['1']
const product = products[0]

// Truthy - Values that resolve to true in boolean context
// Falsy - Valuest that resolve to false in boolean context
// Falsy values - false, 0, '', null, undefined, NaN

// if (product !== undefined) {
//     console.log('Product found')
// } else {
//     console.log('Product not found')
// }

if (product) {
    console.log('Product found')
} else {
    console.log('Product not found')
}