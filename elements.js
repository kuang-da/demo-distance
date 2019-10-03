// get canvas related references
var canvas = document.getElementById("canvas");
var data_table = document.getElementById("data_table");
var matrix_dist = 0;
// listen for mouse events
canvas.onmousedown = myDown;
canvas.onmouseup = myUp;
canvas.onmousemove = myMove;

$(document).ready(function (e) {
    console.log('hello')
    cal_ori_matrix()
    cal_pos_matrix()
    $.loadTable('data_table', ['field1', 'field2', 'field3', 'field4', 'field5'], ori_matrix);
    $.loadTable('data_table_m1', ['field1', 'field2', 'field3', 'field4', 'field5'], pos_matrix);
    matrix_dist = calculate_matrix_difference(ori_matrix, pos_matrix)
    $.displayResult(matrix_dist)
});

// call to draw the scene
draw();
