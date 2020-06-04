const context = document.getElementById("canvas").getContext("2d"),
  startButton = document.getElementById("startButton"),
  glasspane = document.getElementById("glasspane");
let pause = false;

startButton.onclick = function (e) {
  e.preventDefault();
  pause = !pause;
  startButton.innerHTML = pause ? "Start" : "Stop";
};

glasspane.onclick = function (e) {
  e.preventDefault();
};
