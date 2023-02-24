const timeDOME = document.getElementsByClassName('game-time')[0];

let time = 0;

const covertToTwoNumber = (num) => {
    const stringNum = `${num}`;
    if (stringNum.length === 1) return `0${stringNum}`;
    else return stringNum;
};

const getTimeString = (time) => {
    const hours = Math.floor(time / 3600);
    time = time - hours * 3600;
    const minutes = Math.floor(time / 60);
    time = time - minutes * 60;
    const seconds = time;

    return `${covertToTwoNumber(hours)}:${covertToTwoNumber(minutes)}:${covertToTwoNumber(seconds)}`
};

const startTimer = () => {
    setInterval(() => {
        time++;
        timerDOM.innerHTML = getTimeString(time);
    }, 1000);
};