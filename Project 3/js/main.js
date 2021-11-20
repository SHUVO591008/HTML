
$(document).ready(function () {


    // init Isotope
    var $grid = $('.grid').isotope({
        // options
    });
// filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });

    });



    $('.grid').isotope({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use element for option
            columnWidth: '.grid-item'
        }
    });


    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:2,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });



    // counter Up

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

});




