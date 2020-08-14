// Named export - as many as we need
// Default exprot - one

const add = (a, b) => a + b
const name = 'Carla'

const square = (x) => x * x
//export default square

export { add, name, square as default }