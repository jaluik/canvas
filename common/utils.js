var utils = {};
utils.captureMouse = function (element) {
  var mouse = { x: 0, y: 0 };

  element.addEventListener(
    "mousemove",
    (event) => {
      var x, y;
      if (event.pageX || event.pageY) {
        x = event.pageX;
        y = event.pageY;
      } else {
        x =
          event.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft;
        y =
          event.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop;
      }

      x -= element.offsetLeft;
      y -= element.offsetTop;
      mouse.x = x;
      mouse.y = y;
    },
    false
  );

  return mouse;
};

utils.captureTouch = function (element) {
  var touch = { x: null, y: null, isPress: false };

  element.addEventListener("touchstart", () => {
    touch.isPress = true;
  });
  element.addEventListener("touchend", () => {
    touch.isPress = false;
    touch.x = null;
    touch.y = null;
  });

  element.addEventListener("touchstart", (event) => {
    var x,
      y,
      touch_event = event.touchs[0];
    if (touch_event.pageX || touch_event.pageY) {
      x = touch_event.pageX;
      y = touch_event.pageY;
    } else {
      x =
        touch_event.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      y =
        touch_event.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }
    x -= element.offsetLeft;
    y -= element.offsetTop;
    touch.x = x;
    touch.y = y;
  });
};

utils.colorToRGB = function (color, alpha = 1) {
  if (typeof color === "string" && color[0] === "#") {
    color = window.parseInt(color.slice(1), 16);
  }
  var r = (color >> 16) & 0xff;
  var g = (color >> 8) & 0xff;
  var b = color & 0xff;
  alpha = alpha < 0 || alpha > 1 ? 0 : alpha;
  if (alpha === 1) {
    return `rgb(${r},${g},${b})`;
  }
  return `rgba(${r},${g},${b}, ${alpha})`;
};

utils.parseColor = function (color, toNumber) {
  if (toNumber === true) {
    if (typeof color === "number") {
      return color | 0;
    }
    if (typeof color === "string" && color[0] === "#") {
      color = color.slice(1);
    }
    return window.parseInt(color, 16);
  } else {
    if (typeof color === "number") {
      color = `#${("00000" + (color | 0).toString(16)).substr(-6)}`;
    }
    return color;
  }
};

utils.containsPoint = function (rect, x, y) {
  return !(
    x < rect.x ||
    x > rect.x + rect.width ||
    y < rect.y ||
    y > rect.y + rect.height
  );
};

utils.intersects = function (rectA, rectB) {
  return !(
    rectA.x + rectA.width < rectB.x ||
    rectB.x + rectB.width < rectA.x ||
    rectA.y + rectA.height < rectB.y ||
    rectB.y + rectB.height < rectA.y
  );
};
