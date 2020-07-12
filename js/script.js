/*------------ for preloader -------------*/

$(window).on('load', function () { // makes sure that whole site is loaded

    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');

});

/*------------ Show and hide sticky navbar -------------*/

$(document).ready(function () {

    // Show/hide nav on page load
    showHideNave();

    $(window).scroll(function () {

        // Show/hide nav on window's scroll
        showHideNave();

    });

    function showHideNave() {

        if ($(window).scrollTop() > 150) {

            // show sticky navbar
            $('nav').addClass('sticky-navbar');
            
            // show back to top btn
            $('#back-to-top').fadeIn();

        } else {

            // hide sticky navbar
            $('nav').removeClass('sticky-navbar');
            
            // hide back to top btn
            $('#back-to-top').fadeOut();

        }

    };

});

/*------------ Mobile menu (Toggler btn) -------------*/

$(document).ready(function () {

    $('.nav-button').click(function () {

        $('.nav-button').toggleClass('change');
        /*$('nav').css('background', 'rgba(33, 34, 38, 0.8)');*/
        
    });

});

// cloge mobile navbar to click navlink  
/*$(document).ready(function () {

    $('#myNavbar a').click(function () {

        $('.nav-button').click();
        
    });

});*/

/*------------ Team member slideshow -------------*/

$(document).ready(function () {

    $('a.smooth-scroll').click(function (event) {

        event.preventDefault();

        // get section id 
        var section_id = $(this).attr('href');

        $('html, body').animate({

            scrollTop: $(section_id).offset().top - 70

        }, 1250, 'easeInOutExpo');

    });

});


/*------------ Team member slideshow -------------*/

$(document).ready(function () {

    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left">', '<i class="fas fa-angle-right">']
    });

});

/*------------ Progress bar -------------*/

$(function () {

    $('#progress-elements').waypoint(function () {

        $('.progress-bar').each(function () {

            $(this).animate({

                width: $(this).attr('aria-valuenow') + '%'

            }, 2000);

        });

        this.destroy();

    }, {
        offset: 'bottom-in-view'
    });

});

/*------------ Responsive Tabs -------------*/

$(document).ready(function () {

    $('#services-tabs').responsiveTabs({

        animation: 'slide' // The panels will slide up and down

    });

});

/*------------ Portfolio -------------*/

$(window).on('load', function () {

    // Initialize Isotope
    $('#isotope-container').isotope({});

    // Filter items on button click
    $('#isotope-filters').on('click', 'button', function () {

        // Get filter value
        var filterValue = $(this).attr('data-filter');

        // Filter portfolio
        $('#isotope-container').isotope({
            filter: filterValue
        });

        // active button
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');

    });

});

/* magnefic popup */
$(document).ready(function () {

    $('#portfolio-wrapper').magnificPopup({

        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }

    });

});

/*------------ Testimonials slideshow -------------*/

$(document).ready(function () {

    $("#testimoinal-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left">', '<i class="fas fa-angle-right">']
    });

});

/*------------ Stats Counter up -------------*/

$(document).ready(function () {

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

});

/*------------ Clients slideshow -------------*/

$(document).ready(function () {

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left">', '<i class="fas fa-angle-right">'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 767 up
            480: {
                items: 3  
            },
            // breakpoint from 767 up
            768: {
                items: 6
            }
        }
    });

});

/*------------ Google map with snazzy slyles -------------*/

$(window).on('load', function () { // makes sure that whole site is loaded

    // Map variable
    var addressString = '102, Kurgoan, Ashulia, Savar 1345 Dhaka, Bangladesh.';
    var myLatlng = {
        lat: 23.912317,
        lng: 90.260038
    };

    // 1. Render-map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: myLatlng,
        // Snazzy map styles
        styles: [
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#34c6d3"
            },
                    {
                        "visibility": "on"
            },
                    {
                        "weight": "0.01"
            }
        ]
    },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
            }
        ]
    },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
            }
        ]
    },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
            },
                    {
                        "lightness": 45
            }
        ]
    },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
            }
        ]
    },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
            },
                    {
                        "visibility": "on"
            }
        ]
    }
]
    });

    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click To See Address"
    });

    // 3. Add infowindow
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    // show info window when users clicks marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
    
    // 4. Resize function
    google.maps.event.addDomListener(window, 'resize', function() {
        
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
        
    });

});

/*------------ Wow init -------------*/

$(window).ready(function () {
   new WOW().init(); 
});

