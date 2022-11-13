$.getJSON("data.json", function(data) {
    let date = new Date()
    $(data).each(function(ind, val) {

        $('.bar').each(function(index, value) {
            var classList = $(this).attr('class').split(/\s+/);

            if (classList.includes(val.day)) {
                $(this).css('height', val.amount*3);
                };
            if (index === date.getDay()) {
                if (index !== 6) {
                    $('.bar').eq(index-1).css('background', 'var(--cyan)')
                } else {
                    $('.bar').eq(0).css('background', 'var(--cyan)')
                }           
            };
        });''
    });
});

$.getJSON("data.json", function(data) {
    $('.bar').mouseover(function() {
        var popup = $(this).siblings('.amount');
        var classList = popup.attr('class').split(/\s+/);
        $(data).each(function(index, value) {
            if (classList.includes(value.day)) {
                popup.text('$' + value.amount);
                popup.css('visibility', 'visible');
            };
        });
    });
    $('.bar').mouseleave(function() {
        var popup = $(this).siblings('.amount');
        popup.css('visibility', 'hidden');
    });
})
