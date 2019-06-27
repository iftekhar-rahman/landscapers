jQuery(document).ready(function($){

    $('#menu').slicknav();
    
    $('select').niceSelect();

    // portfolio isotope gallery;
    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });

    // filter items on button click
    $('.portfolio-filters').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
        $('.portfolio-filters button').removeClass('is-checked');
        $(this).addClass('is-checked');
        
    });

    // $('select').niceSelect();
    $('#sticky-sidebar').stickySidebar({
        topSpacing: 60,
        bottomSpacing: 60
    });

    // $('select').niceSelect();

    // homepage-slides
	$(".homepage-slides").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
        dots: false,
        autoplay: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });

    // testimonials-wrap
	$(".testimonials-wrap").owlCarousel({
		items: 1,
		loop: true,
		nav: false,
        dots: false,
        autoHeight:true
    });
    // testimonials-wrap
	$(".testimonials-wrap-2").owlCarousel({
		items: 1,
		loop: true,
		nav: false,
        dots: true,
        autoHeight:true
    });
    
    $('.counter').counterUp({
        delay: 10,
        time: 400
    });
    

    $(".carousel-wrap").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        dots: false,
        autoplay: false,
        margin: 30,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1,
                margin: 0,
                nav: false,
                dots: true,
            },
            576: {
                items: 2,
                nav: false,
                dots: true,
                margin: 15,
            },
            768: {
                items: 2,
                nav: false,
                dots: true,
            },
            991: {
                items: 3,
            }

        }
    });
    



    $(".header-right i.fa").on("click", function(){
        $(".search-box").addClass("active");
    }) ;
    $(".search-box i.fa").on("click", function(){
        $(".search-box").removeClass("active");
    }) ;


    $(".scroll-next-section").on('click', function(event) {
        if (this.hash !== "") {
            
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
        
            window.location.hash = hash;
            });
        } // End if
    });

    // declare variable
  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  }); // scroll END

    //Click event to scroll to top
    $(".scrollTop").click(function() {
        $('html, body').animate({
        scrollTop: 0
        }, 1000);
        return false;

    }); // click() scroll top EMD
    

});

jQuery(window).load(function(){
    jQuery(".work-portfolio-wrapper, .reviews-wrapper").isotope();
});