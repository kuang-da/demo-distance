
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
