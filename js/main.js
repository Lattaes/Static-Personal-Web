$(document).ready(function(){
    $(window).scroll(function(){
        var navbar = $(".nav")

        if($(this).scrollTop() > 50){
            navbar.addClass("nav-scrolled")
        } else {
            navbar.removeClass("nav-scrolled")
        }
    })
})

$(document).ready(function() {
    $(window).on('scroll', function() {
        var scrollPos = $(document).scrollTop();
        
        $('.nav-link').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav-link').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    });
});

// Animate Index.html
// $(document).ready(function() {
//     // Check if element is in view
//     function isElementInViewport(el) {
//         var rect = el.getBoundingClientRect();
//         return (
//             rect.top >= 0 &&
//             rect.left >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//         );
//     }

//     // Add animation class when element is in view
//     function animateOnScroll() {
//         $('.animate-on-scroll').each(function() {
//             if (isElementInViewport(this)) {
//                 $(this).addClass('animate__animated animate__fadeIn'); // Add your desired animation class
//             }
//         });
//     }

//     // Trigger animation on scroll
//     $(window).on('scroll', animateOnScroll);

//     // Trigger animation on page load
//     animateOnScroll();
// });