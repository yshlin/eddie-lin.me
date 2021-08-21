"use strict";

(function () {
    var usePopup = false;
    $('#review-video img').click(function() {
        $(this).hide();
        $(this).find('~ .play').hide();
        var $video = $(this).find('+ iframe');
        $video.attr('src', '//www.youtube.com/embed/2JC7bS5Nlrs?rel=0&autoplay=1');
        $video.show();
    });
    $('#spring-couplets .spring').click(function(e) {
        if (e.target==this) {
            if (usePopup) {
              showPopup(this.id);
            }
            else {
              window.location.href=$(this).find('.download-button').attr('href');
            }
        }
    });
    $('#spring-content .share-button').click(function(e) {
        e.preventDefault();
        var $spring = $(this).parent();
        if ($spring.attr('id')=='popup') {
            $spring = $('#'+$(this).attr('name'));
        }
        var $download = $spring.find('.download-button');
    });
    $('#popup').click(function(e) {
        if (e.target==this) {
            hidePopup();
        }
    });
    var hidePopup = function(ctx, next) {
        if (usePopup) {
          $('#popup').hide();
        }
        else {
          $(document).scrollTo(0);
        }
    };
    var showPopup = function(ctx, next) {
        if (usePopup) {
          var $download = $('#download-'+ctx);
          var file = $download.attr('download');
          var src = $download.attr('href');
          if (src) {
              var $popup = $('#popup');
              var $spring = $popup.find('#spring-full').attr('src', '');
              $spring.attr('src', src);
              var $downloadFull = $popup.find('#download-full');
              $downloadFull.attr('href', src);
              $downloadFull.attr('download', file);
              $popup.find('#share-full').attr('name', ctx);
              $popup.show();
          }
          else {
              window.location.href = '2013review.html';
          }
        }
        else {
          $(document).scrollTo('#'+ctx.params.spring);
        }
    };
    enquire.register("screen and (min-width: 999px)", {
        setup: function () {
        },
        match: function () {
            // handler must exist
            // desktop hooks are added when desktop.js is loaded (in setup above)
          usePopup=true;
        },
        unmatch: function () {
            // rather difficult to unbind all the fancy desktop js. in the interest
            // of time, just reload the page when we get to mobile size.
            // (should be a rare use case)
          usePopup=false;
        }
    }).listen();

})();
