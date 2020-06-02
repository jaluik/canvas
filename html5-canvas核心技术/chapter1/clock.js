let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  FONT_HEIGHT = 15,
  MARGIN = 35,
  HAND_TRANCATION = 15,
  HOUR_HAND_TRANCATION = canvas.width / 2,
  NUMERAL_SPACING = 20,
  RADIUS = canvas.width / 2 - MARGIN,
  HAND_RADIUS = RADIUS + NUMERAL_SPACING;

function drawCirle() {
  context.beginPath();
  context.arc(
    canvas.width / 2,
    canvas.height / 2,
    RADIUS,
    0,
    Math.PI * 2,
    true
  );
  context.stroke();
}

function drawNumerals() {
  let numerals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    angle = 0,
    numeralWidth = 0;

  numerals.forEach((numeral) => {
    angle = (Math.PI / 6) * (numeral - 3);
    numeralWidth = context.measureText(numeral).width;
    context.fillText(
      numeral,
      canvas.width / 2 + Math.cos(angle) * HAND_RADIUS - numeralWidth / 2,
      canvas.height / 2 + Math.sin(angle) * HAND_RADIUS + FONT_HEIGHT / 3
    );
  });
}

function drawCenter() {
  context.beginPath();
  context.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.Pi * 2, true);
  context.stroke();
}

function drawHand(loc, isHour) {
  var angle = Math.PI * 2 * (loc / 60) - Math.PI / 2,
    handRadius = isHour
      ? RADIUS - HAND_TRANCATION - HOUR_HAND_TRANCATION
      : RADIUS - HAND_TRANCATION;
  context.moveTo(canvas.width / 2, canvas.height / 2);
  context.lineTo(
    canvas.width / 2 + Math.cos(angle) * handRadius,
    canvas.height / 2 + Math.sin(angle) * handRadius
  );
  context.stroke();
}

function drawHands() {
  let date = new Date(),
    hour = date.getHours();

  hour = hour > 12 ? hour - 12 : hour;
  drawHand(hour * 5 + date.getMinutes() / 12, true, 0.5);
  drawHand(date.getMinutes(), false, 0.5);
  drawHand(date.getSeconds(), false, 0.2);
}

function drawClock() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawCirle();
  drawCenter();
  drawHands();
  drawNumerals();
}

context.font = FONT_HEIGHT + "px Arial";
loop = setInterval(drawClock, 1000);
