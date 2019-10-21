const numberRequiredCheck = document.querySelector(`input[name=numbers]`);
const lowerRequiredCheck = document.querySelector(`input[name=lower-case]`);
const upperRequiredCheck = document.querySelector(`input[name=upper-case]`);
const specialRequiredCheck = document.querySelector(`input[name=special-characters]`);
const passwordLength = document.querySelector(`#password-length`);
const submitButton = document.querySelector(`#submit-button`);
const passwordArea = document.querySelector(`#password-here`);
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const special = [`!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `\``, `]`, `^`, `_`, "`",`{`, `|`, `}`, `~`];
let functionsToCall = [];
let password = [];
let numberRequired = false;
let lowerRequired = false;
let upperRequired = false;
let specialRequired = false;
let desiredPasswordLength;
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
function randomCharFromFunctions(){
    if(numberRequired === true){
        functionsToCall.push(randomNumber(10));
    };
    if (lowerRequired === true){
        functionsToCall.push(randomLowerLetter());
    };
    if (upperRequired === true){
        functionsToCall.push(randomUpperLetter());            
    };
    if (specialRequired === true){
        functionsToCall.push(randomSpecialChar());
    };
    let characterTypeChosen = randomNumber(Number(functionsToCall.length)-1);
    let charChosen = functionsToCall.slice(characterTypeChosen, (characterTypeChosen +1));
    password.push(charChosen);
};
function fillPassword(){
    if (password.length < desiredPasswordLength) {
        for (let i = 0; i < desiredPasswordLength; i ++){
            charChosen = [];
            characterTypeChosen = [];
            functionsToCall = [];
            randomCharFromFunctions();
        };
    };
};
numberRequiredCheck.addEventListener(`change`, function(){
    if(this.checked) {
        numberRequired = true;
    };
});
lowerRequiredCheck.addEventListener(`change`, function(){
    if(this.checked) {
        lowerRequired = true;       
    };
});
upperRequiredCheck.addEventListener(`change`, function(){
    if(this.checked) {
        upperRequired = true;        
    };
});
specialRequiredCheck.addEventListener(`change`, function(){
    if(this.checked) {
        specialRequired = true;     
    };
});
submitButton.addEventListener(`click`, function(){
    passwordArea.innerHTML = ``;
    desiredPasswordLength = (Number(passwordLength.value));
    if ((numberRequired||lowerRequired||upperRequired||specialRequired) && desiredPasswordLength<= 30){
        fillPassword();
        passwordArea.innerHTML = password.join(``);
        password = [];
    } else {
        alert(`Your password cannot be any longer than 30 characters and you will need to select one of the characters required.`);
    }
});