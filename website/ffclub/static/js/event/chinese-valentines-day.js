"use strict";

function gaTrack(eventArray, callback) {
    // submit eventArray to GA and call callback only after tracking has
    // been sent, or if sending fails.
    //
    // callback is optional.
    //
    // Example usage:
    //
    // $(function() {
    //      var handler = function(e) {
    //           var _this = this;
    //           e.preventDefault();
    //           $(_this).off('submit', handler);
    //           gaTrack(
    //              ['_trackEvent', 'Newsletter Registration', 'submit', newsletter],
    //              function() {$(_this).submit();}
    //           );
    //      };
    //      $(thing).on('submit', handler);
    // });
    var timer = null;
    var hasCallback = typeof(callback) === 'function';
    var gaCallback;

    // Only build new function if callback exists.
    if (hasCallback) {
        gaCallback = function() {
            clearTimeout(timer);
            callback();
        };
    }
    // console.info(eventArray);
    if (typeof(window._gaq) === 'object') {
        // send event to GA
        window._gaq.push(eventArray);
        // Only set up timer and hitCallback if a callback exists.
        if (hasCallback) {
            // Failsafe - be sure we do the callback in a half-second
            // even if GA isn't able to send in our trackEvent.
            timer = setTimeout(gaCallback, 500);

            // But ordinarily, we get GA to call us back immediately after
            // it finishes sending our things.
            // https://developers.google.com/analytics/devguides/collection/gajs/#PushingFunctions
            // This is called after GA has sent the current pending data:
            window._gaq.push(gaCallback);
        }
    } else {
        // GA disabled or blocked or something, make sure we still
        // call the caller's callback:
        if (hasCallback) {
            callback();
        }
    }
}

(function () {
    var page_id = "229264713799595";
    var pageLiked = false;
    var subscriber = '';
    var randomPost = $('.myfx-post').eq(Math.floor((Math.random()*1000)%3));
    randomPost.css('display', 'block');
    var randomVideo = $('.myfx-video').eq(Math.floor((Math.random()*1000)%3));
    randomVideo.css('display', 'block');

    var showFireworks = function() {
        var fwElement = '<div class="pyro"><div class="before"></div><div class="after"></div></div>';
        $(fwElement).insertAfter('#heading');
    };

    $('#weaver').bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function () {
        $('#hearts').attr('class', 'popping');
    });
    var nextStage = function (next) {
        $.scrollTo(0, 100);
        if (4 == next) {
            showFireworks();
        }
        else {
            $('#earth').attr('class', 'step' + next);
        }
        $('#steps').scrollTo('#step' + next, 1000, {axis: 'x'});
            gaTrack(['_trackEvent', 'Magpie Bridge', 'nextStage', next.toString()]);

    };
    $('#login-fb').click(function () {
        nextStage(1);

    });

    $('#share-post').click(function () {
        nextStage(2);
    });
    $('#share-video').click(function () {
        nextStage(3);
    });
    $('#subscribe-news').click(function () {
        nextStage(4);
    });

    $('.share-button').click(function() {
    });

    $('#enlarge-notebook').click(function() {
        $('#popup').show();
    });
    $('#popup').click(function(e) {
        if (e.target == this) {
            $('#popup').hide();
        }
    });
})();