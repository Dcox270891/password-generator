const numberRequiredCheck = document.querySelector(`input[name=numbers]`);
const lowerRequiredCheck = document.querySelector(`input[name=lower-case]`);
const upperRequiredCheck = document.querySelector(`input[name=upper-case]`);
const specialRequiredCheck = document.querySelector(`input[name=special-characters]`);
const passwordLength = document.querySelector(`#password-length`);
const submitButton = document.querySelector(`#submit-button`);
const passwordArea = document.querySelector(`#password-here`);
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const special = [`!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `\``, `]`, `^`, `_`, "`",`{`, `|`, `}`, `~`];
let password = [];
let numberRequired = false;
let lowerRequired = false;
let upperRequired = false;
let specialRequired = false;
let desiredPasswordLength;
let functionsToCall = [];
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
function fillFunctionsToCall(){
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
};
function randomCharFromFunctions(charChosen, characterTypeChosen){
    fillFunctionsToCall();
    characterTypeChosen = randomNumber(Number(functionsToCall.length));
    charChosen = functionsToCall.slice(characterTypeChosen, (characterTypeChosen +1));
    password.push(charChosen);
};
function fillPassword(){
    if (password.length < desiredPasswordLength) {
        for (let i = 0; i < desiredPasswordLength; i ++){
            functionsToCall = [];
            randomCharFromFunctions();
        };
    };
};
numberRequiredCheck.addEventListener(`change`, function(){
    if(this.checked) {
        numberRequired = true;
    } else {
        numberRequired = false;
    };
});
lowerRequiredCheck.addEventListener(`change`, function(){
    if(this.checked) {
        lowerRequired = true;       
    } else {
        lowerRequired = false;
    };
});
upperRequiredCheck.addEventListener(`change`, function(){
    if(this.checked) {
        upperRequired = true;        
    } else {
        upperRequired = false;
    };
});
specialRequiredCheck.addEventListener(`change`, function(){
    if(this.checked) {
        specialRequired = true;     
    } else {
        specialRequired = false;
    };
});
submitButton.addEventListener(`click`, function(){
    passwordArea.innerHTML = ``;
    desiredPasswordLength = (Number(passwordLength.value));
    if ((numberRequired||lowerRequired||upperRequired||specialRequired) && (desiredPasswordLength <= 128 && desiredPasswordLength >= 8)){
        fillPassword();
        passwordArea.innerHTML = password.join(``);
        password = [];
    } else {
        alert(`Your password cannot be any longer than 8-128 characters and you will need to select one of the characters required.`);
    }
});