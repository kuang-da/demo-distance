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