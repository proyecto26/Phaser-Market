var $container = $("#container");
var outClassRight = 'pt-page-rotateSlideRightOut',
    inClassRight = 'pt-page-rotateSlideRightIn',
    outClassLeft = 'pt-page-rotateSlideOut',
    inClassLeft = 'pt-page-rotateSlideIn';

var getDirection = function(prevUrl, currentUrl){
    var direction;
    var locations = ['/', '/plugins', '/extensions', '/templates'];

    prevUrl = prevUrl || "";
    currentUrl = currentUrl || "";
    prevUrl = '/' + prevUrl.split("/").slice(-1)[0];
    currentUrl = '/' + currentUrl.split("/").slice(-1)[0];

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

var direction = getDirection(window.sessionStorage.prevUrl, window.location.pathname);
var inClass = inClassRight;
if(direction !== "left"){
    inClass = inClassLeft;
}
$container.addClass(inClass).show();

$(function(){

    $("a[href!='/']").on('click', function(){
        var newLocation = this.href;
        if(newLocation && newLocation !== "#" && newLocation !== "javascript:void(0)"){

            var direction = getDirection(window.location.pathname, newLocation);
            outClass = outClassRight;
            if(direction !== "left"){
                outClass = outClassLeft;
            }
            $container.removeClass(inClass).addClass(outClass);
            window.sessionStorage.prevUrl = window.location.pathname;
            setTimeout(function(){
                window.location = newLocation;
            }, 500);
        }
        return false;
    });

    $('.button-collapse').sideNav({
        //menuWidth: 300, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
});