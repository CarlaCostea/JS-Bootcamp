// const myAge = 9
// const message = myAge >= 18 ? 'You can vote' : 'You cannot vote'

// if (myAge >= 18) {
//     message ='You can vote'
// } else {
//     message = 'You cannot vote'
// }

// console.log(message)

const myAge = 30
const showPage = () => {
    console.log('showing the page')
}
const showErrorPage = () => {
    console.log('Showing the error page')
}

// run one of two functions
myAge >= 21 ? showPage() : showErrorPage()

const team = ['Ana', 'Maria']
const teamPlayers = team.length <= 4 ? `Team size: ${team.length}` : "Too many people on your team"

console.log(teamPlayers)