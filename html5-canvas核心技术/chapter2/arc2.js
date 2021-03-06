const canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d");

function drawGrid(color, stepx, stepy) {
  context.strokeStyle = color;
  context.lineWidth = 0.5;
  for (let i = stepx + 0.5; i < canvas.width; i += stepx) {
    context.beginPath();
    context.moveTo(i, 0);
    context.lineTo(i, canvas.height);
    context.stroke();
  }
  for (let i = stepy + 0.5; i < canvas.height; i += stepy) {
    context.beginPath();
    context.moveTo(0, i);
    context.lineTo(canvas.width, i);
    context.stroke();
  }
}

function draw2Arcs() {
  context.beginPath();
  context.arc(300, 190, 150, 0, Math.PI * 2, false);
  context.arc(300, 190, 100, 0, Math.PI * 2, true);
  context.fill();
  context.shadowColor = undefined;
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.stroke();
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid("lightgray", 10, 10);
  context.save();
  context.shadowColor = "rgba(0,0,0,0.8)";
  context.shadowOffsetX = 12;
  context.shadowOffsetY = 12;
  context.shadowBlur = 15;
  draw2Arcs();
  context.restore();
}

context.fillStyle = "rgba(100,140,230,0.5)";
context.strokeStyle = context.fillStyle;
draw();
