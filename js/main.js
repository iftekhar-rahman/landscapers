jQuery(document).ready(function($){


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
                nav: false
            },
            480: {
                items: 2,
                margin: 30,
                nav: false
            },
            768: {
                items: 3,
            }

        }
    });

    




    

    

});