const canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d");

const centerPonint = { x: canvas.width / 2, y: canvas.height / 2 };
context.lineWidth = 5;
context.strokeStyle = "blue";
context.arc(
  centerPonint.x,
  centerPonint.y,
  20,
  -Math.PI / 6,
  (-Math.PI * 5) / 6,
  true
);
context.stroke();
