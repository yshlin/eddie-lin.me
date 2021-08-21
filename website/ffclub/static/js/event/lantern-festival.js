"use strict";

(function () {
    var page_id = "229264713799595";
    var pageLiked = false;
    var subscriber = '';
    var randomPost = $('.myfx-post').eq(Math.floor((Math.random()*1000)%3));
    randomPost.css('display', 'block');
    var nextStage = function (next) {
        $('#steps').attr('class', 'step' + next);
        $.scrollTo('#fox-lantern');
        $('#sparkle').bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function () {
            var $steps = $('#steps');
            $steps.removeAttr('class');
            $('#fox-lantern').css('background', 'url(static/img/event/lantern-festival/fox-' + next + '.png)');
            $steps.scrollTo('#step' + next, 1000, {axis: 'x'});
            $('#sparkle').unbind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd');
        });
    };
    $('#login-fb').click(function () {
        nextStage(2);
    });
    $('#subscribe-news').click(function () {
        nextStage(3);
    });
    /*
    var firstLoad = true;
    $('#subscription').load(function () {
        if (!firstLoad) {
            nextStage(3);
        }
        firstLoad = false;
    });
    */
    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

    $('#share-myfx').click(function () {
        nextStage(4);
    });
    $('#print-claim').click(function() {
        window.print();
    });

    $('#fox-lantern').click(function(e) {
        if (e.target == this) {
            showPopup();
            // page('/portfolio/ffclub/lantern-festival.html#/firefox-lantern/');
        }
    });
    $('#popup').click(function(e) {
        if (e.target == this) {
            hidePopup();
            // page('/portfolio/ffclub/lantern-festival.html');
        }
    });

    $('.share-button').click(function() {

    });
    var hidePopup = function() {
        $('#popup').hide();
    };

    var showPopup = function() {
        $('#popup').show();
    };

    // page('/portfolio/ffclub/lantern-festival.html#/firefox-lantern/', showPopup);
    // page('/portfolio/ffclub/lantern-festival.html', hidePopup);
    // page();
})();