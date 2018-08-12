//other ideas:
//- WPM count
//- API to return random text OR array of dif texts (w math rand)
//- or hi score board
//- count errors

//constants that map to the different componenents in the HTML!!!
const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];
var interval;
var timerRunning = false;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    //min, second, hundreth of second
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++; //timer runs every thousandth of a second
    //math to display dif values
    //min
    timer[0] = Math.floor((timer[3]/100)/60);
    //second
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60)); //every time we hit 60 s, value returns to zero
    //hundreth of second
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000)); //everytime minutes reaches 100, reset to 0
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    //console.log(textEntered);
    let originTextMatch = originText.substring(0,textEntered.length);
    
    if (textEntered == originText) {
        clearInterval(interval);
        testWrapper.style.borderColor = "lightgreen";
    } else {
        //blue
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65CCf3";
        } else {
            testWrapper.style.borderColor = "tomato";
        }
    }
}


// Start the timer:
function start() {
    let textEnteredLength = testArea.value.length;
    if (textEnteredLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10); //legacy
        //runs function every 1/1000th of a second. like a loop, but intervals
    }
    console.log(textEnteredLength);
}

// Reset everything:
function reset() {
    //console.log('reset button pressed');
    //reset all variables
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunning = false;
    
    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "#FFF";
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);