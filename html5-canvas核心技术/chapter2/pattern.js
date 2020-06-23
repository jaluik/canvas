const canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  repeatRadio = document.getElementById("repeatRadio"),
  repeatYRadio = document.getElementById("repeatYRadio"),
  repeatXRadio = document.getElementById("repeatXRadio"),
  noRepeatRadio = document.getElementById("noRepeatRadio"),
  image = new Image();

function fillCanvasWidthPattern(repeatstring) {
  const pattern = ctx.createPattern(image, repeatstring);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

repeatRadio.onclick = () => {
  fillCanvasWidthPattern("repeat");
};
repeatXRadio.onclick = () => {
  fillCanvasWidthPattern("repeat-x");
};
repeatYRadio.onclick = () => {
  fillCanvasWidthPattern("repeat-y");
};
noRepeatRadio.onclick = () => {
  fillCanvasWidthPattern("no-repeat");
};
image.src = "../chapter1/act11.jpg";

image.onload = () => {
  fillCanvasWidthPattern("repeat");
};
