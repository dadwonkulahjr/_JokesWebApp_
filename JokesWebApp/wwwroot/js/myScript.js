'Use Strict'

$(document).ready(function () {





















    $('div[class="text-center"]')
        .css({
            'fontFamily': 'verdana',
        })
        .slideUp(1000)
        .slideDown(1000)
        .fadeOut(1000)
        .fadeIn(1000)
        .attr('title', 'My Jokes Web App')
        .css('borderBottom', '5px solid red');

});