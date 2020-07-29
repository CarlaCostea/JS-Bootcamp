let varOne = 'varOne'; // Global scope

if (true) {
    console.log(varOne);
    let varTwo = 'varTwo' // Local scope
    console.log(varTwo);

    if (true) {
        let varFour = 'varFour';
    }
}

// JS uses lexical scope (static scope)
// Global scope - Defined outside of all code blocks
// Local scope - Defined inside a code block

// In a scope you can acces variables defined in that scope or in any parrent/ancestor scope

// we can not acces varTwo outside the block where it was defined - console.log(varTwo) => Error

if (true) {
    console.log(varOne);
    let varThree = 'varThree' // Local scope
    console.log(varThree);
}

// Scope Tree

//Gs (varOne)
    //Ls (varTwo)
        // Ls (var Four)
    //Ls (varThree)