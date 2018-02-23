(function() {

    var circle;
    var circlePath;
    var paths;
    var counter = 1;
    var contentCount = 4;
    
    function animatePath(){
        $('.cover-section-content').toggleClass('left');
        circlePath.animate({ d: paths.anim }, 300, mina.easein, resetPath);
    }
    
    function resetPath(){
        circlePath.animate({ d: paths.base }, 350, mina.bounce, null);
    }

    function toggleContent() {
        counter = parseInt(counter) + 1 > contentCount ?  1 : parseInt(counter) + 1;
        $('.cover-content.in-view').css('position', 'absolute');
        $('.cover-content.in-view').removeClass('in-view');
        
        $('.cover-content[data-order = ' + counter + ']').addClass('in-view');
        setTimeout(function() {
            $('.cover-content[data-order = ' + counter + ']').css('position', 'relative');
        });
    }
    
    var init = function() {
        circle = Snap('#player');
        circlePath = circle.select('path');
        paths = {
            base: $('#player').attr('data-base-path'),
            anim: $('#player').attr('data-anim-path')
        };

        $('.icon-ctn svg').on('click', function() {
            animatePath();
            toggleContent();
        });
    };
    

    $(window).ready(function() {
        init();
    });  

})();

