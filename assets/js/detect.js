$(function () {
    var f = $('body'); //document.getElementById("body");
    var contentHeight = f.scrollHeight;
    var declaredHeight = $(f).height();

    var contentWidth = f.scrollWidth;
    var declaredWidth = $(f).width();
    if (contentHeight > declaredHeight) {
        console.log("invalid height");
    }
    if (contentWidth > declaredWidth) {
        console.log("invalid width");
    }
});