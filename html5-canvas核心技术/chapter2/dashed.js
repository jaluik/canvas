const canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  moveToFunction = CanvasRenderingContext2D.prototype.moveTo;
CanvasRenderingContext2D.prototype.lastMoveToLocation = {};

CanvasRenderingContext2D.prototype.moveTo = function (x, y) {
  moveToFunction.apply(this, [x, y]);
  this.lastMoveToLocation.x = x;
  this.lastMoveToLocation.y = y;
};

CanvasRenderingContext2D.prototype.dashedLineTo = function (
  x,
  y,
  dashLength = 5
) {
  const startX = this.lastMoveToLocation.x;
  const startY = this.lastMoveToLocation.y;
  const deltaX = x - startX;
  const deltaY = y - startY;
  const numDashes = Math.floor(
    Math.sqrt(deltaX ** 2 + deltaY ** 2) / dashLength
  );
  for (let i = 0; i < numDashes; i++) {
    const method = i % 2 === 0 ? "moveTo" : "lineTo";
    this[method](
      startX + (i * deltaX) / numDashes,
      startY + (i * deltaY) / numDashes
    );
  }
  this.moveTo(x, y);
};

context.lineWith = 3;
context.strokeStyle = "blue";

context.moveTo(20, 20);
context.dashedLineTo(canvas.width, canvas.height);
context.stroke();
