
// Set the screen dispaly to concatenate inactive and active text
function setScreenDisplay(){
    let inactiveTextContainer = document.getElementById('inactive-screen-text');
    inactiveTextContainer.textContent = inactiveText;
    let activeTextContainer = document.getElementById('active-screen-text');
    activeTextContainer.textContent = activeText;
}

// Clear the screen to display 0
function resetScreen(){
    inactiveText = inactiveTextDefault;
    activeText = activeTextDefault;
    setScreenDisplay();
}

function handleKeyPressOnScreen(event){
    let key = event.key;
    if (
        //Check for numeric keypress
        // Ignore 0 if that is currently the displayed value
        (key == '0' && activeText != '0') 
        ||
        (key >= '1' && key <= '9')

        //Check that text length isn't exceeded
        && activeText.length < 10
    ){
        //If 0 is displayed, replace the digit; otherwise, append new active
        //digit and remove the inactive digit
        if (activeText === '0'){
            activeText = key;
        }
        else{
            inactiveText = inactiveText.substring(0, inactiveText.length - 1);
            activeText += key;
        }
        setScreenDisplay();
    }
    //Backspace to clear the screen
    else if (key === 'Backspace'){
        resetScreen();
    }
}
const inactiveTextDefault = '888888888';
const activeTextDefault = '0';
var inactiveText = inactiveTextDefault;
var activeText = activeTextDefault;
var body = document.getElementById('body-all');

//Allow for keyboard input
body.addEventListener('keydown', function (event) {
    handleKeyPressOnScreen(event);
}
);

resetScreen();