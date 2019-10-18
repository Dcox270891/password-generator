const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const special = [`!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `\``, `]`, `^`, `_`, "`",`{`, `|`, `}`, `~`];
let functionsToCall = [];
let password = [];
const numberRequired = document.querySelector(`input[name=numbers]`);
const lowerRequired = document.querySelector(`input[name=lower-case]`);
const upperRequired = document.querySelector(`input[name=upper-case]`);
const specialRequired = document.querySelector(`input[name=special-characters]`);
const passwordLength = document.querySelector(`password-length`);

function randomNumber(max){
    return Math.floor(Math.random() * (max));
};
function randomLowerLetter(){
    return letters[randomNumber(letters.length)];
};
function randomUpperLetter(){
    return randomLowerLetter().toUpperCase();
};
function randomSpecialChar(){
    return special[randomNumber(special.length)];
};

numberRequired.addEventListener(`change`, function(){
    if(this.checked) {
        randomNumber(10);
    };
});
lowerRequired.addEventListener(`change`, function(){
    if(this.checked) {
        randomLowerLetter();        
    };
});
upperRequired.addEventListener(`change`, function(){
    if(this.checked) {
        randomUpperLetter();        
    };
});
specialRequired.addEventListener(`change`, function(){
    if(this.checked) {
        randomSpecialChar();       
    };

});
passwordLength.addEventListener(`click`, function randomCharFromFunctions(){
    if(numberRequired.addEventListener(`change`, function(){
        functionsToCall.push(randomNumber(10));
    })) if (lowerRequired.addEventListener(`change`, function(){
        functionsToCall.push(randomLowerLetter());
    })) if (upperRequired.addEventListener(`change`, function(){
        functionsToCall.push(randomUpperLetter());
    })) if (specialRequired.addEventListener(`change`, function(){
        functionsToCall.push(randomSpecialChar());
    }));
    let characterTypeChosen = randomNumber(functionsToCall.length);
    let charChosen = functionsToCall.slice(characterTypeChosen, (characterTypeChosen +1));
    password.push(charChosen);
});

// const passwordNumbers = confirm (`Would you like numbers in the password?`);
// const passwordLowerCase = confirm (`Would you like lower case letters in the password?`);
// const passwordUpperCase = confirm (`Would you like upper case letters in the password?`);
// const passwordSpecial = confirm (`Would you like special letters in the password?`);
// const desiredPasswordLength = prompt (`How long would you like your password?`);

if (password.length < desiredPasswordLength.length) {
     for (let i = 0; i < desiredPasswordLength; i ++){
        charChosen = [];
        characterTypeChosen = [];
        functionsToCall = [];
        randomCharFromFunctions();
    };
}
alert (`Your password is: ${password.join("")}`);