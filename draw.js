var ctx = canvas.getContext("2d");
var BB = canvas.getBoundingClientRect();
var offsetX = BB.left;
var offsetY = BB.top;
var WIDTH = canvas.width;
var HEIGHT = canvas.height;

// draw a single rect
function rect(x, y, w, h) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fill();
}

// clear the canvas
function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

// redraw the scene
function draw() {
    clear();
    ctx.fillStyle = "#FAF7F8";
    rect(0, 0, WIDTH, HEIGHT);
    // redraw each rect in the rects[] array
    for (var i = 0; i < rects.length; i++) {
        var r = rects[i];
        ctx.fillStyle = r.fill;
        // dot(r.x, r.y, r.width, r.height);
        rect(r.x, r.y, r.width, r.height);
    }
    draw_alpha();
}

// redraw the scene
function draw_alpha() {
    // redraw each rect in the rects[] array
    for (var i = 0; i < rects_fade.length; i++) {
        var r = rects_fade[i];
        ctx.fillStyle = r.fill;
        // console.log(r.fill)
        rect(r.x, r.y, r.width, r.height);
    }
}