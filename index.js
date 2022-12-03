const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
const resetBtn = document.querySelector("#reset-btn");

let seconds = 0;
let minutes = 0;

startBtn.addEventListener("click", () => {
  let interval = setInterval(setTime, 1000);

  function setTime() {
    if (seconds >= 60) {
      minutes++;
      seconds = 0;
    }
    seconds++;
    updateClock();
  }

  stopBtn.addEventListener("click", () => {
    clearInterval(interval);
  });

  resetBtn.addEventListener("click", () => {
    seconds = 0;
    minutes = 0;
    updateClock();
    setTimeout({}, 1000);
  });
});

function updateClock() {
  document.querySelector(".seconds").innerHTML = seconds;
  document.querySelector(".minutes").innerHTML = minutes;
}
