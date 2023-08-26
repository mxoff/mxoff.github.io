

let countdown;
const timerDisplay = document.querySelector

function timer(minutes) {

    showButton(false);
    const seconds = minutes * 60;

    const currendTime = Date.now();
    const endTime = currendTime + seconds * 1000;

    displayTimer(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((endTime - Date.now()) / 1000);

        if (secondsLeft < 0) {
            clearInterval(countdown);
            showButton(true);
            return;
        }

        displayTimer(secondsLeft);

    }, 1000)
}



function displayTimer(seconds) {
    let minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const hours = Math.floor(minutes / 60);

    if (minutes >= 60) {
        minutes -= 60;
    }

    const display = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds} `;

    document.getElementById("time").innerHTML = display
    document.title = display
}



function showButton(show) {
    document.getElementById("minutes").hidden = !show;
    document.getElementById("button").hidden = !show;
}


function startTimer() {
    const m = document.getElementById("minutes").value;
    timer(m);
}
