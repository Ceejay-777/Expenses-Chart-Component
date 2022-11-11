$.getJSON("data.json", function(data) {
    let date = new Date()
    $(data).each(function(ind, val) {

        $('.bar').each(function(index, value) {
            var classList = $(this).attr('class').split(/\s+/);

            if (classList.includes(val.day)) {
                $(this).css('height', val.amount*3);
                if (index === date.getDay()) {
                    if (index !== 0) {
                        $('.bar').eq((index%6-1)).css('background', 'var(--cyan)')
                    } else {
                        $('.bar').eq(6).css('background', 'var(--cyan)')
                    }
                    // $(this).parent().prev().children('.bar').css('background', 'var(--cyan)');
                };
            };
        });
    });

})
