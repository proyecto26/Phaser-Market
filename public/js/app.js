var $container = $("#container");
var outClassRight = 'pt-page-rotateSlideRightOut',
    inClassRight = 'pt-page-rotateSlideRightIn',
    outClassLeft = 'pt-page-rotateSlideOut',
    inClassLeft = 'pt-page-rotateSlideIn',
    newsPaperIn = 'pt-page-rotateInNewspaper',
    newsPaperOut = 'pt-page-rotateOutNewspaper';

var getDirection = function(prevUrl, currentUrl){
    var direction;
    var locations = ['/', '/plugins', '/extensions', '/templates'];

    prevUrl = prevUrl || "";
    currentUrl = currentUrl || "";
    prevUrl = prevUrl.replace(window.location.origin, '');
    currentUrl = currentUrl.replace(window.location.origin, '');

    var prev = locations.indexOf(prevUrl);
    var current = locations.indexOf(currentUrl);

    if(prev > -1 && current > -1){
        if (current >= prev) {
            direction = 'right';
        }
        else{
            direction = 'left';
        }
    }

    return direction;
};


var inClass = newsPaperIn;
if(window.sessionStorage.prevUrl !== window.location.pathname){
    var direction = getDirection(window.sessionStorage.prevUrl, window.location.pathname);
    if(direction){
        inClass = inClassRight;
        if(direction !== "left"){
            inClass = inClassLeft;
        }
    }
}
$container.addClass(inClass).show();
window.sessionStorage.prevUrl = window.location.pathname;

$(function(){

    $("a[href!='/']").on('click', function(){
        var newLocation = (this.href || '').replace(window.location.origin, '');
        if(newLocation && newLocation !== "#" && newLocation !== 'javascript:void(0)'){
            if(newLocation === window.location.pathname)
            {
                window.location.reload();
            }
            else{
                var direction = getDirection(window.location.pathname, newLocation);
                var outClass = newsPaperOut;
                if(direction){
                    outClass = outClassRight;
                    if(direction !== "left"){
                        outClass = outClassLeft;
                    }
                }
                $container.removeClass(inClass).addClass(outClass);
                setTimeout(function(){
                    window.location = newLocation;
                }, 500);
            }
        }
        return false;
    });

    $('.button-collapse').sideNav({
        //menuWidth: 300, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
});