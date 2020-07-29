let isAccountLocked = true;
let userRole = 'admin';

if (isAccountLocked) {
    console.log('Account is locked');
} else {
    console.log('Wellcome');
}

if (isAccountLocked) {
    console.log('Account is locked');
} else if (userRole === 'admin') {
    console.log('Wellcome admin');
} else {
    console.log('Wellcome');
}

//Challenge 6

let temp = 26;

if (temp < 0) {
    console.log('It is freezing outside');
} else if (temp > 35) {
    console.log('It is hot outside');
} else {
    console.log('Go nuts');
}