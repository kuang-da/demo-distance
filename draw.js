var ctx = canvas.getContext("2d");
var BB = canvas.getBoundingClientRect();
var offsetX = BB.left;
var offsetY = BB.top;
var WIDTH = canvas.width;
var HEIGHT = canvas.height;

var show_fide_flg = false

function show_hide(){
    var elem = document.getElementById("show_button");
    if (elem.value=="Show answer") elem.value = "Hide answer";
    else elem.value = "Show answer";

    show_fide_flg = !show_fide_flg
    draw();
}
// draw a single rect
function rect(x, y, w, h, idx) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fill();
    if (idx != 0) {
        ctx.fillStyle = "#FAF7F8";
        ctx.font = '25px Courier bolder';
        ctx.fillText(idx, x + 17, y + 33);
        ctx.lineWidth = 7;
    }
    ctx.closePath();
}   

// clear the canvas
function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

// redraw the scene
function draw() {
    console.log('draw the rects!')
    clear();
    ctx.fillStyle = "#FAF7F8";
    rect(0, 0, WIDTH, HEIGHT, 0);
    // redraw each rect in the rects[] array
    for (var i = 0; i < rects.length; i++) {
        var r = rects[i];
        ctx.fillStyle = r.fill;
        // dot(r.x, r.y, r.width, r.height);
        rect(r.x, r.y, r.width, r.height, i+1);

    }
    if (show_fide_flg){
        draw_alpha();
    }
}

// redraw the scene
function draw_alpha() {
    // redraw each rect in the rects[] array
    for (var i = 0; i < rects_fade.length; i++) {
        var r = rects_fade[i];
        ctx.fillStyle = r.fill;
        // console.log(r.fill)
        rect(r.x, r.y, r.width, r.height, 0);
    }
}