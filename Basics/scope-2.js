//G (name)
    //L
        //L
    //L

let name = 'Carla'

if (true) {
    //variable shadowing
    let name = 'Cristina'
    if (true) {
        nameLeaked = 'Jen' //if is not defined it becomes global
        console.log(name)
    }
}

if (true) {
    console.log(name)
    console.log(nameLeaked)
}