// Click on Bars to transform to 'X'

$(".toggle-icon").on('click touchstart', function() {
    $('#nav-container').toggleClass("pushed");
});

// ESC Function Tranforms Bars to 'X'
$('body').keydown(function(e) {
    // if ESC show/hide menu
    if (e.keyCode === 27 || e.keyCode === 77) {
        $('#nav-container').toggleClass("pushed");
    }
})
// shows/hides navigation’s popover if class "expanded"
$('.toggle-icon').on('click touchstart', function(event) {
    showHideNav();
    event.preventDefault();
})
// clicking anywhere inside navigation or heading won’t close navigation’s popover
$('nav').on('click touchstart', function(event) {
    event.stopPropagation();
})

// checks if navigation’s popover is shown
function showHideNav() {
    if ($('nav').hasClass('expanded')) {
        hideNav();
    } else {
        showNav();
    }
}

// shows the navigation’s popover
function showNav() {
    $('nav').removeClass('invisible').addClass('expanded');
    $('#container').addClass('blurred');
    window.setTimeout(function() { $('body').addClass('no_scroll'); }, 10); // Firefox hack. Hides scrollbar as soon as menu animation is done
    $('#navigation a').attr('tabindex', ''); // links inside navigation should be TAB selectable
}
// hides the navigation’s popover
function hideNav() {
    $('#container').removeClass('blurred');
    window.setTimeout(function() { $('body').removeClass(); }, 10); // allow animations to start before removing class (Firefox)
    $('nav').removeClass('expanded');
    $('#navigation a').attr('tabindex', '-1'); // links inside hidden navigation should not be TAB selectable
    $('.icon').blur(); // deselect icon when navigation is hidden
}
// keyboard shortcuts
$('body').keydown(function(e) {
    // menu accessible via TAB as well
    if ($("nav .icon").is(":focus")) {
        // if ENTER/SPACE show/hide menu
        if (e.keyCode === 13 || e.keyCode === 32) {
            showHideNav();
            e.preventDefault();
        }
    }

    // if ESC show/hide menu
    if (e.keyCode === 27 || e.keyCode === 77) {
        showHideNav();
        e.preventDefault();

    }
})


















// Filter Project Pages by Category on PROJECTS.HTML

// BELIEVE THIS IS REDUNDANT

var $boxs = $("#parent > .box");
var $btns = $(".btn").on("click", function() {

    var active =
        $btns.removeClass("active")
        .filter(this)
        .addClass("active")
        .data("filter");

    $boxs
        .hide()
        .filter("." + active)
        .fadeIn(450);

});







var $btns = $('.btn').click(function() {
    if (this.id == 'all') {
        $('#parent > div').fadeIn(450);
    } else {
        var $el = $('.' + this.id).fadeIn(450);
        $('#parent > div').not($el).hide();
    }
    $btns.removeClass('active');
    $(this).addClass('active');
})

















// Reduce Title Size on Scroll


$(document).ready(function() {
    //your code here

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        //console.log(scroll);
        if (scroll >= 100) {
            //console.log('a');
            $(".title-small").addClass("shrink");
        } else {
            //console.log('a');
            $(".title-small").removeClass("shrink");
        }
    });
});









// TEST DEV
