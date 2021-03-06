$(function () {
    var socket = io();

    $('form').submit(function (e) {
        e.preventDefault(); // prevents page reloading
        var eqRegex = /(\d*\.?\d+)(([+\-/*%]|\*\*)(\d*\.?\d+))+/;
        var input = $('#user_input').val().replace(/[\(\)\s]/g, "");        

        if (input === '' || input.search(eqRegex) < 0) {
            $('#user_input').val('');
            $('#user_input').attr('placeholder', 'INVALID ENTRY: Enter a valid entry with numbers and basic arithmetic operators');
        } else {
            socket.emit('calculation_input', $('#user_input').val());
            $('#user_input').val('');
        } 

        return false;
    });

    socket.on('calculation_output', function (calc) {
        if ($('tbody:first > tr').length >= 10) {
            $('tbody:first > tr:first').remove();
        }
        
	// $("#compositeTable").find("tr:gt(-10)").remove();	
	
        $('#calculations_output_table')
            .prepend($('<tr class="row">')
                .append($('<td class="col">').text(calc.calc))
                .append($('<td class="col-1">').text('='))
                .append($('<td class="col-2">').text(calc.answer)));
            });
});
