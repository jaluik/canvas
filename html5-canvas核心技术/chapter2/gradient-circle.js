const canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  gradient = ctx.createRadialGradient(
    canvas.width / 2,
    0,
    100,
    canvas.width / 2,
    canvas.height,
    60
  );

gradient.addColorStop(0, "blue");
gradient.addColorStop(0.25, "white");
gradient.addColorStop(0.5, "purple");
gradient.addColorStop(0.75, "red");
gradient.addColorStop(1, "yellow");
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);
