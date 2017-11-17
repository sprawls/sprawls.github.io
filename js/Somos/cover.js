(function() {

    var circle;
    var circlePath;
    var paths;
    
    function animatePath(){
        $('.cover-section-content').toggleClass('left');
        circlePath.animate({ d: paths.anim }, 300, mina.easein, resetPath);
    }
    
    function resetPath(){
        circlePath.animate({ d: paths.base }, 350, mina.bounce, null);
    }

    function toggleContent() {

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

