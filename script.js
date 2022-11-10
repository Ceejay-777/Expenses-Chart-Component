$.getJSON("data.json", function(data) {
    $(data).each(function(ind, val) {
        $('.bar').each(function(index, value) {
            var classList = $(this).attr('class').split(/\s+/);
            if (classList.includes(val.day)) {
                $(this).css('height', val.amount*3)
            }
        });
    });

})