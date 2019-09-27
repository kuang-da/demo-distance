// get canvas related references
var canvas = document.getElementById("canvas");
var data_table = document.getElementById("data_table");

var ctx = canvas.getContext("2d");
var BB = canvas.getBoundingClientRect();
var offsetX = BB.left;
var offsetY = BB.top;
var WIDTH = canvas.width;
var HEIGHT = canvas.height;

// drag related variables
var dragok = false;
var startX;
var startY;


var origin_xy = [
    { x: 250, y: 250 }, // cell 1
    { x: 200, y: 50 }, // cell 2
    { x: 30, y: 180 }, // cell 3
    { x: 50, y: 20 }, // cell 3
];

var pos = [
    { x: 250, y: 250 }, // cell 1
    { x: 200, y: 50 }, // cell 2
    { x: 30, y: 180 }, // cell 3
    { x: 50, y: 20 }, // cell 3
];

var pos_matrix = [
    { field1: 'Cell 1', field2: 0, field3: 0, field4: 0, field5: 0 },
    { field1: 'Cell 2', field2: 0, field3: 0, field4: 0, field5: 0 },
    { field1: 'Cell 3', field2: 0, field3: 0, field4: 0, field5: 0 },
    { field1: 'Cell 4', field2: 0, field3: 0, field4: 0, field5: 0 }
];

var ori_matrix = [
    { field1: 'Cell 1', field2: 0, field3: 0, field4: 0, field5: 0 },
    { field1: 'Cell 2', field2: 0, field3: 0, field4: 0, field5: 0 },
    { field1: 'Cell 3', field2: 0, field3: 0, field4: 0, field5: 0 },
    { field1: 'Cell 4', field2: 0, field3: 0, field4: 0, field5: 0 }
];

var matrix_dist = 0;

// an array of objects that define different rectangles
var rects = [];
var r = 20;
var alpha = 0.5;

rects.push({
    x: origin_xy[0].x,
    y: origin_xy[0].y,
    width: r,
    height: r,
    fill: "#444444",
    isDragging: false
});
rects.push({
    x: origin_xy[1].x,
    y: origin_xy[1].y,
    width: r,
    height: r,
    fill: "#ff550d",
    isDragging: false
});
rects.push({
    x: origin_xy[2].x,
    y: origin_xy[2].y,
    width: r,
    height: r,
    fill: "#800080",
    isDragging: false
});
rects.push({
    x: origin_xy[3].x,
    y: origin_xy[3].y,
    width: r,
    height: r,
    fill: "#0c64e8",
    isDragging: false
});


var rects_fade = [];

rects_fade.push({
    x: origin_xy[0].x,
    y: origin_xy[0].y,
    width: r,
    height: r,
    // fill: "#444444",
    fill: 'rgba(68,68,68,0.5)',
    isDragging: false
});
rects_fade.push({
    x: origin_xy[1].x,
    y: origin_xy[1].y,
    width: r,
    height: r,
    // fill: "#ff550d",
    fill: 'rgba(255,85,13,0.5)',
    isDragging: false
});
rects_fade.push({
    x: origin_xy[2].x,
    y: origin_xy[2].y,
    width: r,
    height: r,
    // fill: "#800080",
    fill: 'rgba(128,0,128,0.5)',
    isDragging: false
});
rects_fade.push({
    x: origin_xy[3].x,
    y: origin_xy[3].y,
    width: r,
    height: r,
    // fill: "#0c64e8",
    fill: 'rgba(12,100,232,0.5)',
    isDragging: false
});



// listen for mouse events
canvas.onmousedown = myDown;
canvas.onmouseup = myUp;
canvas.onmousemove = myMove;

// call to draw the scene
draw();
draw_alpha();

var data1 = [
    { field1: 'value a1', field2: 'value a2', field3: 'value a3', field4: 'value a4' },
    { field1: 'value b1', field2: 'value b2', field3: 'value b3', field4: 'value b4' },
    { field1: 'value c1', field2: 'value c2', field3: 'value c3', field4: 'value c4' }
];


// draw a single rect
function rect(x, y, w, h) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    // ctx.arc(x, y, 50, 0, 2 * Math.PI);
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

// handle mousedown events
function myDown(e) {

    // tell the browser we're handling this mouse event
    e.preventDefault();
    e.stopPropagation();

    // get the current mouse position
    var mx = parseInt(e.clientX - offsetX);
    var my = parseInt(e.clientY - offsetY);

    // test each rect to see if mouse is inside
    dragok = false;
    for (var i = 0; i < rects.length; i++) {
        var r = rects[i];
        if (mx > r.x && mx < r.x + r.width && my > r.y && my < r.y + r.height) {
            // if yes, set that rects isDragging=true
            dragok = true;
            r.isDragging = true;
        }
    }
    // save the current mouse position
    startX = mx;
    startY = my;
}


// handle mouseup events
function myUp(e) {
    // tell the browser we're handling this mouse event
    e.preventDefault();
    e.stopPropagation();

    // clear all the dragging flags
    dragok = false;
    for (var i = 0; i < rects.length; i++) {
        rects[i].isDragging = false;
    }
}



// handle mouse moves
function myMove(e) {
    // if we're dragging anything...
    if (dragok) {
        // tell the browser we're handling this mouse event
        e.preventDefault();
        e.stopPropagation();

        // get the current mouse position
        var mx = parseInt(e.clientX - offsetX);
        var my = parseInt(e.clientY - offsetY);

        // calculate the distance the mouse has moved
        // since the last mousemove
        var dx = mx - startX;
        var dy = my - startY;

        // move each rect that isDragging 
        // by the distance the mouse has moved
        // since the last mousemove
        idx = 0
        for (var i = 0; i < rects.length; i++) {
            var r = rects[i];
            if (r.isDragging) {
                idx = i
                r.x += dx;
                r.y += dy;
            }
        }

        // redraw the scene with the new rect positions
        draw();

        // reset the starting mouse position for the next mousemove
        startX = mx;
        startY = my;
        pos[idx].x = startX
        pos[idx].y = startY
        // console.log(mx, my)
        cal_pos_matrix()
        matrix_dist = calculate_matrix_difference()
        // console.log(matrix_dist)
        $.loadTable('data_table', ['field1', 'field2', 'field3', 'field4', 'field5'], pos_matrix);
        $.displayResult(matrix_dist)
    }
}

function cal_dist(x1, y1, x2, y2) {
    x = x1 - x2;
    y = y1 - y2;
    return Math.sqrt((x * x) + (y * y)).toFixed(2)
}

function cal_ori_matrix() {
    for (var i = 0; i < 4; i++) {
        ori_matrix[i].field2 = cal_dist(origin_xy[i].x, origin_xy[i].y,
            origin_xy[0].x, origin_xy[0].y);
        ori_matrix[i].field3 = cal_dist(origin_xy[i].x, origin_xy[i].y,
            origin_xy[1].x, origin_xy[1].y);
        ori_matrix[i].field4 = cal_dist(origin_xy[i].x, origin_xy[i].y,
            origin_xy[2].x, origin_xy[2].y);
        ori_matrix[i].field5 = cal_dist(origin_xy[i].x, origin_xy[i].y,
            origin_xy[3].x, origin_xy[3].y);
    }
}

function cal_pos_matrix() {
    for (var i = 0; i < 4; i++) {
        pos_matrix[i].field2 = cal_dist(pos[i].x, pos[i].y, pos[0].x, pos[0].y);
        pos_matrix[i].field3 = cal_dist(pos[i].x, pos[i].y, pos[1].x, pos[1].y);
        pos_matrix[i].field4 = cal_dist(pos[i].x, pos[i].y, pos[2].x, pos[2].y);
        pos_matrix[i].field5 = cal_dist(pos[i].x, pos[i].y, pos[3].x, pos[3].y);
    }
}

function calculate_matrix_difference() {
    // console.log(ori_matrix)
    // console.log(pos_matrix)
    d = 0
    for (ii = 0; ii < 4; ii++) {
        d += Math.pow(ori_matrix[ii].field2 - pos_matrix[ii].field2, 2)
        d += Math.pow(ori_matrix[ii].field3 - pos_matrix[ii].field3, 2)
        d += Math.pow(ori_matrix[ii].field4 - pos_matrix[ii].field4, 2)
        d += Math.pow(ori_matrix[ii].field5 - pos_matrix[ii].field5, 2)
    }
    return d.toFixed(2)
}

var col_vector = [
    '<td style="background-color:#444444;color:white;">',
    '<td style="background-color:#ff550d;color:white;">',
    '<td style="background-color:#800080;color:white;">',
    '<td style="background-color:#0c64e8;color:white;">'
]

$.loadTable = function (tableId, fields, data) {
    // console.log('test...');
    //$('#' + tableId).empty(); //not really necessary
    var rows = '';

    counter_r = 0
    $.each(data, function (index, item) {
        counter_r++;
        counter_c = 0
        var row = '<tr>';
        $.each(fields, function (index, field) {
            counter_c++;
            if (counter_r + 1 == counter_c) {
                row += col_vector[counter_r - 1] + item[field + ''] + '</td>';
            }
            else {
                row += '<td>' + item[field + ''] + '</td>';
            }
        });
        rows += row + '<tr>';
    });
    $('#' + tableId + ' tbody').html(rows);
};

$.displayResult = function (result) {
    var result_display = document.getElementById("result");
    result_display.innerHTML = "D = " + result; // or whatever formatting
}

$(document).ready(function (e) {
    console.log('hello')
    cal_ori_matrix()
    cal_pos_matrix()
    $.loadTable('data_table', ['field1', 'field2', 'field3', 'field4', 'field5'], ori_matrix);
    $.loadTable('data_table_m1', ['field1', 'field2', 'field3', 'field4', 'field5'], pos_matrix);
    matrix_dist = calculate_matrix_difference(ori_matrix, pos_matrix)
    $.displayResult(matrix_dist)

});

