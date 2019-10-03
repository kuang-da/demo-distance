// an array of objects that define different rectangles
var rects = [];
var r = 20;
var alpha = 0.5;

var origin_xy = [
    { x: 250, y: 250 }, // cell 1
    { x: 200, y: 50 }, // cell 2
    { x: 30, y: 180 }, // cell 3
    { x: 50, y: 20 }, // cell 3
];

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