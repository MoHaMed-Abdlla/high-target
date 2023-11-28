
$(document).ready(function() {
    function handleScroll() {
        var currentScroll = $(this).scrollTop();
        var screenWidth = window.innerWidth;
        var navbar = $('#navbar-example2');

        // Check if the screen width is medium or larger
        if (screenWidth >= 768) { 
            // Check if user is scrolling down and the window is at a certain position
            if (currentScroll > previousScroll && currentScroll > 100) { 
                navbar.addClass('scrollUp');
            } else {
                navbar.removeClass('scrollUp');
            }
        } else {
            navbar.removeClass('scrollUp');
        }

        previousScroll = currentScroll;
    }

    var previousScroll = 0;

    // Check the screen width initially and on window resize
    $(window).on('resize', function() {
        handleScroll();
    });

    // Attach scroll event listener only for medium screens or larger
    var screenWidth = window.innerWidth;
    if (screenWidth >= 768) {
        $(window).on('scroll', handleScroll);
    }
});

AOS.init({
    duration: 600, // Animation duration in milliseconds
    offset: 200, // Offset (in pixels) from the original trigger point
    easing: 'ease-in-out', // Easing function for the animation
    delay: 100, // Delay (in milliseconds) before the animation starts
    // More settings...
  });

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true,
    'disableScrolling': true
  })