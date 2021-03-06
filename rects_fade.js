var rects_fade = [];

var origin_xy = [
    { x: 250, y: 250 }, // cell 1
    { x: 200, y: 50 }, // cell 2
    { x: 30, y: 180 }, // cell 3
    { x: 50, y: 20 }, // cell 3
];

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