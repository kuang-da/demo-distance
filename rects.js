// an array of objects that define different rectangles
var rects = [];
var r = 50;
var alpha = 0.5;

var pos = [
    { x: 50, y: 400 }, // cell 1
    { x: 75, y: 300 }, // cell 2
    { x: 50, y: 120 }, // cell 3
    { x: 300, y: 200 }, // cell 3
];

rects.push({
    x: pos[0].x,
    y: pos[0].y,
    width: r,
    height: r,
    fill: "#444444",
    isDragging: false
});
rects.push({
    x: pos[1].x,
    y: pos[1].y,
    width: r,
    height: r,
    fill: "#ff550d",
    isDragging: false
});
rects.push({
    x: pos[2].x,
    y: pos[2].y,
    width: r,
    height: r,
    fill: "#800080",
    isDragging: false
});
rects.push({
    x: pos[3].x,
    y: pos[3].y,
    width: r,
    height: r,
    fill: "#0c64e8",
    isDragging: false
});