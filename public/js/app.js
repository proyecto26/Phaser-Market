$(function(){

    var outClass = 'pt-page-rotateSlideOut',
        inClass = 'pt-page-rotateSlideIn';
    var $container = $("#container");
    $("a[href!='/']").on('click', function(){
        var newLocation = this.href;
        if(newLocation && newLocation !== "#" && newLocation !== "javascript:void(0)"){
            $container.removeClass(inClass).addClass(outClass);
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