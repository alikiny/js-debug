function countDown() {
    // set our end time as 10 seconds
    const endTime = new Date().getTime() + 10 * 1000;

    // store clock div to avoid repeatedly querying the DOM
    const clock = document.getElementById("clock");

    // calculate remaining time from now until deadline
    function getRemainingTime(deadline) {
        const currentTime = new Date().getTime();
        return deadline - currentTime;
    }

    // pad value with zero
    function pad(value) {
        return ('0' + Math.floor(value)).slice(-2);
    }

    function showTime() {
        const remainingTime = getRemainingTime(endTime);
        const seconds = pad((remainingTime / 1000) % 60);
        const minutes = pad((remainingTime / (60 * 1000)) % 60);
        const hours = pad((remainingTime / (60 * 60 * 1000)) % 24);
        const days = pad(remainingTime / (24 * 60 * 60 * 1000));

        clock.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;

        setTimeout(() => {
            if (remainingTime === 0) {
                alert("Time is up")
            } else {
                requestAnimationFrame(showTime);
            }
        }, 1000);
    }
    requestAnimationFrame(showTime);
}

countDown()