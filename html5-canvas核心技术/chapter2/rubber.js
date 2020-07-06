let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  eraseAllButton = document.getElementById("eraseAllButton"),
  strokeStyleSelect = document.getElementById("strokeStyleSelect"),
  guidewireCheckbox = document.getElementById("guidewireCheckbox"),
  drawingSurfaceImageData,
  mousedown = {},
  rubberBandRect = {},
  dragging = false,
  guidewire = guidewireCheckbox.checked;

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

function windowToCanvas(x, y) {
  const bBox = canvas.getBoundingClientRect();
  return {
    x: x - bBox.left * (canvas.width / bBox.width),
    y: y - bBox.top * (canvas.height / bBox.height),
  };
}

function saveDrawingSurface() {
  drawingSurfaceImageData = context.getImageData(
    0,
    0,
    canvas.width,
    canvas.height
  );
}

function updateRubberbandRectangle(loc) {
  rubberBandRect.width = Math.abs(loc.x - mousedown.x);
  rubberBandRect.height = Math.abs(loc.y - mousedown.y);
  if (loc.x > mousedown.x) rubberBandRect.left = mousedown.left;
  else rubberBandRect.left = loc.x;
  if (loc.y > mousedown.y) rubberBandRect.top = mousedown.y;
  else rubberBandRect.top = loc.y;
}

function drawRubberbandShape(loc) {
  context.beginPath();
  context.moveTo(mousedown.x, mousedown.y);
  context.lineTo(loc.x, loc.y);
  context.stroke();
}

function updateRubberband(loc) {
  updateRubberbandRectangle(loc);
  drawRubberbandShape(loc);
}

function drawHorizontalLine(y) {
  context.beginPath();
  context.moveTo(0, y + 0.5);
  context.moveTo(canvas.width, y + 0.5);
  context.stroke();
}

function drawVerticalLine(x) {
  context.beginPath();
  context.moveTo(x + 0.5, 0);
  context.moveTo(x + 0.5, canvas.height);
  context.stroke();
}
function drawGuidewires(x, y) {
  context.save();
  context.strokeStyle = "rgba(0,0,230,0.4)";
  context.lineWidth = 0.5;
  drawVerticalLine(x);
  drawHorizontalLine(y);
  context.restore();
}
