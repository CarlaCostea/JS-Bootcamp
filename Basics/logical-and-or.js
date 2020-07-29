let temp = 65;

if (temp >= 60 && temp <= 90) {
    console.log('Is is pretty nice outside')
} else if (temp <=0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Whatever');
}

//Challenge 7

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('All vegan')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Vegan for one')
} else {
    console.log('Whatever');
}