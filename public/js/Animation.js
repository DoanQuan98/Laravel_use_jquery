$(document).ready(function () {
    $('button').click(function () {
        var div = $('div');
        div.animate({left: '100px'}, "slow");
        div.animate({fontSize: '100px'}, "slow");
    });
});
