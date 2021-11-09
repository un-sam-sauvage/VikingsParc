window.onscroll = function () {
    scrollFunction()
};

var counter = 0;
var display_str = "";
var display_div = document.getElementsByClassName("surface")
var hasBeenCalled = false;
var interval = 0

function scrollFunction() {
    if (document.body.scrollTop > 1000 && !hasBeenCalled) {
        interval = setInterval("incrementCounter()", 10)
        hasBeenCalled = true;
    }
}

function incrementCounter() {
    for (var i = 0; i < 8; i++) {
        if (counter > 1499) {
            clearInterval(interval);
            break;
        }
        counter++;
        display_str = counter.toString();
        var new_span = document.getElementsByClassName("surface-text");
        new_span[0].innerText = display_str + "m²";

    }

}