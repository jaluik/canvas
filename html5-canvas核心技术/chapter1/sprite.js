let canvas = document.getElementById("canvas"),
  readout = document.getElementById("readout"),
  context = canvas.getContext("2d"),
  spriteSheet = new Image();

function windowToCanvas(canvas, x, y) {
  let bbox = canvas.getBoundingClientRect();
  return {
    x: (x - bbox.left) * (canvas.width / bbox.width),
    y: (y - bbox.top) * (canvas.height / bbox.height),
  };
}

function drawBackground() {
  let VERTICAL_LINE_SPACING = 12,
    i = context.canvas.height;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = "lightGray";
  context.lineWidth = 0.5;

  while (i > VERTICAL_LINE_SPACING * 4) {
    context.beginPath();
    context.moveTo(0, i);
    context.lineTo(context.width, i);
    context.stroke();
    i -= VERTICAL_LINE_SPACING;
  }
}

function drawSpritesheet() {
  context.drawImage(spriteSheet, 0, 0);
}

function drawGuideLine(x, y) {
  context.stokeStyle = "rgba(0,0,230, 0.8)";
  context.lineWidth = 0.5;
  drawVerticalLine(x);
  drawHorizontalLine(y);
}

function updateReadout(x, y) {
  readout.innerHTML = `(${x.toFixed(0)}, ${y.toFixed(0)})`;
}

function drawVerticalLine(x) {
  context.beginPath();
  context.moveTo(x + 0.5, 0);
  context.lineTo(x, canvas.height);
  context.stroke();
}

function drawHorizontalLine(y) {
  context.beginPath();
  context.moveTo(0, y + 0.5);
  context.lineTo(canvas.width, y + 0.5);
  context.stroke();
}

canvas.addEventListener("mousemove", (e) => {
  const { x, y } = windowToCanvas(canvas, e.clientX, e.clientY);
  drawBackground();
  drawSpritesheet();
  drawGuideLine(x, y);
  updateReadout(x, y);
});

spriteSheet.src = "act11.jpg";
spriteSheet.onload = function () {
  drawSpritesheet();
};
