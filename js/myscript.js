// start of script for Work experience scroll and stop
$(function () {
    var fixedElement = $("#theFixed");
    var fixedElementPosition = fixedElement.position().top - 130;
    $(window).scroll(function () {
        var currentWindowTop = $(this).scrollTop();
        if (currentWindowTop >= fixedElementPosition && fixedElement.css('position') != 'fixed') {
            fixedElement.css('position', 'fixed');
        } else if (currentWindowTop < fixedElementPosition) {
            fixedElement.css('position', 'static');
        }
        console.log(fixedElementPosition, currentWindowTop);
        if (fixedElement.css('position') == 'fixed') {
            fixedElement.css("top", Math.max(93, 440 - currentWindowTop));
        }
    });
});
// end of script for work experience scroll and stop