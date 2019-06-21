jQuery(document).ready(function($){


    $('select').niceSelect();

    // portfolio isotope gallery;

    // init Isotope
    var $grid = $('.grid').isotope({
        // options
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
        // event.target.className = "is-checked";

        // var portfolioFilter = document.querySelectorAll(".portfolio-filters button");
        // for(let i=0; i<portfolioFilter.length; i++) {
          
        //     portfolioFilter[i].removeClass( "is-checked" );

        // }       
        // event.target.className = "is-checked";
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
		nav: false,
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
    // $('.counter-2').counterUp({
    //     delay: 100,
    //     time: 1000
    // });

    // homepage-slides
	// $(".homepage-slides").owlCarousel({
	// 	items: 1,
	// 	loop: true,
	// 	nav: true,
	// 	dots: false,
    //     autoplay: false,
    //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	// });

    

    // $("#range_49").ionRangeSlider({
    //     type: "single",
    //     min: 150,
    //     max: 250,
    //     from: 200,
    //     to: 250,
    //     prefix: "£",
    //     step: 1,
    //     onFinish: function(data) {
    //         maxValue = data.from;
    //         alert("Your Value: " + maxValue);
    //     }
    // });


    $(".carousel-wrap").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        dots: false,
        autoplay: false,
        margin: 30,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        // responsive: {
        //     0: {
        //         items: 2,
        //         margin: 15,
        //         nav: false
        //     },
        //     580: {
        //         items: 3,
        //         margin: 3,
        //         nav: false
        //     },
        //     720: {
        //         items: 4,
        //         margin: 3,
        //         nav: false
        //     },
        //     960: {
        //         items: 5
        //     },
        //     1140: {
        //         items: 6
        //     }

        // }
    });

    // $(".feature-carousel-wrap").owlCarousel({
    //     items: 4,
    //     loop: true,
    //     nav: true,
    //     dots: true,
    //     autoplay: false,
    //     margin: 15,
    //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //     responsive: {
    //         0: {
    //             items: 1,
    //             margin: 0,
    //             nav: false
    //         },
    //         481: {
    //             items: 2,
    //             margin: 15,
    //             nav: false
    //         },
    //         720: {
    //             items: 3,
    //             margin: 15,
    //             nav: false
    //         },
    //         960: {
    //             items: 3,
    //             margin: 25,
    //         },
    //         1140: {
    //             items: 4
    //         }

    //     }
    // });




	// $(".bodytype-carousel-wrap").magnificPopup({
	// 	type: 'image',
    //     gallery: {
    //         enabled: true
    //     }
	// });




    

    

});