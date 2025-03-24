// biome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Sara King
      Date: March 23, 2025

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

function Timer(min, sec) {
    this.minutes = min;
    this.seconds = sec;
    this.timeID = null;
}

// biome-ignore lint/complexity/useArrowFunction: <explanation>
Timer.prototype.runPause = function (timer, minBox, secBox) {
    if (timer.timeID) {
        window.clearInterval(timer.timeID);
        timer.timeID = null;
    } else {
        timer.timeID = window.setInterval(() => {
            countdown(timer, minBox, secBox);
        }, 1000);
    }
};

function countdown(timer, minBox, secBox) {
    if (timer.seconds > 0) {
        timer.seconds -= 1;
    } else if (timer.minutes > 0) {
        timer.minutes -= 1;
        timer.seconds = 59;
    } else {
        window.clearInterval(timer.timeID);
        timer.timeID = null;
    }

    minBox.value = timer.minutes;
    secBox.value = timer.seconds;
}

/*--------------- Interface Code -----------------*/

document.addEventListener("DOMContentLoaded", () => {
    const minBox = document.getElementById("minutesBox");
    const secBox = document.getElementById("secondsBox");
    const runPauseButton = document.getElementById("runPauseButton");

    const myTimer = new Timer(Number.parseInt(minBox.value, 10), Number.parseInt(secBox.value, 10));

    minBox.onchange = () => {
        myTimer.minutes = Number.parseInt(minBox.value, 10);
    };

    secBox.onchange = () => {
        myTimer.seconds = Number.parseInt(secBox.value, 10);
    };

    runPauseButton.onclick = () => {
        myTimer.runPause(myTimer, minBox, secBox);
    };
});
