/*
    Name: Mirai
    Description: Modern Responsive Coming Soon Page
    Version: 1.0
    Author: ThemeImperia
    Email: info@themeimperia.com

    TABLE OF CONTENTS:
    1. Loading
    2. Common Js
    3. More Info Js
    4. Background photos and slideshow
    5. Countdown
    6. Youtube Background
    7. Photoswipe Gallery
    8. Contact Form
	9. Ajax Form
	10. Google Map
*/

var ms_ie = false;
var ua = window.navigator.userAgent;
var old_ie = ua.indexOf('MSIE ');
var new_ie = ua.indexOf('Trident/');

if ((old_ie > -1) || (new_ie > -1)) {
    ms_ie = true;
}


/* ================================== */
/* :::::::::: 1. Loading :::::::::::: */
/* ================================== */


$(".main-header, .main-paragraph").velocity({
    opacity: 0
});
$(".more, .notify-me, .countdown, .subscribe-on-main, .download-app-btn, .price").velocity({
    opacity: 0
});


$(window).on("load", function loadpage() {
    setTimeout(function () {
        $(".loading").css("opacity", "0");;
    }, 300);
    $(".main-header").velocity({
        opacity: 1
    }, {
        duration: 700,
        delay: 1000
    });
    $(".main-paragraph").velocity({
        opacity: 1
    }, {
        duration: 700,
        delay: 1200
    });
    $(".more, .notify-me, .countdown, .subscribe-on-main, .download-app-btn, .price").velocity({
        opacity: 1
    }, {
        duration: 600,
        delay: 1400
    });
});


/* ================================== */
/* :::::::::: 2. Common Js :::::::::: */
/* ================================== */


$(function () {

    var $checkMoreInfo = $(".more-info");

    if ($checkMoreInfo.length) {
        (function ($) {
            $(window).on("load", function () {
                $(".more-info").mCustomScrollbar({
                    axis: "y",
                    theme: "minimal-dark",
                    scrollInertia: 700,
                    mouseWheel: {
                        scrollAmount: 400
                    }
                });
            });
        })(jQuery);
    }

    $(document).on("ready", function () {
        $(this).scrollTop(0);
    });


    /* ================================== */
    /* :::::: 3. More Info Js ::::::::::: */
    /* ================================== */


    var $reviewMore = $(".more-normal"); // class if you don't want to use hover effect on more button

    const $moreButton = $("#more-button");
    const $hoverBackground = $("#hover-background");
    const $moreInfo = $("#more-info");
    const $close = $("#close-button");
    
    if (!$reviewMore.length) {
        $moreButton.on({
            mouseenter: function () {
                $hoverBackground.addClass("opacity-yes");
                $moreInfo.addClass("move-top");
            },
            mouseleave: function () {
                $hoverBackground.removeClass("opacity-yes");
                $moreInfo.removeClass("move-top");
            }
        });
    }

    $($moreButton).on("click", function () {
        if (ms_ie) {
            $moreButton.hide();
        }
        $(this).fadeOut(0);
        $moreInfo.addClass("open-more-info");
        $hoverBackground.css("opacity", "1").addClass("pointer-events-yes");
        $close.addClass("open-close-button");
    });

    $close.add($hoverBackground).on("click", function () {
        if (ms_ie) {
            $moreButton.show();
        }
        $moreButton.show();
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        $moreInfo.removeClass("open-more-info");
        $hoverBackground.css("opacity", "0").removeClass("pointer-events-yes");
        $close.removeClass("open-close-button");
    });


    /* ===================================================== */
    /* :::::::: 4. Background photos and slideshow ::::::::: */
    /* ===================================================== */

    /* ↓ Remove comments if you want to use the SLIDESHOW or STATIC IMAGE. You can choose your own duration and fade by changing "duration" and "fade" (in ms)  ↓  */

    function initSlideshow(container) {
        var $reviewSlideshow = $(container);
        if (!$reviewSlideshow.length) return;
        $reviewSlideshow.backstretch([
                        "img/3.jpg",
                        "img/4.jpg"
                    ], {
            duration: 1000,
            fade: 2000
        });
    }

    initSlideshow(".slideshow-background"); // here you define container for slideshow or static image


    var $initYoutubeBackgroung = $(".youtube-background"); // variable with your container for youtube background

    if ($initYoutubeBackgroung.length) {
        $($initYoutubeBackgroung).backstretch("img/youtube.png"); // put the image for youtube background
    }

    /* ================================= */
    /* :::::::::: 5. Countdown ::::::::: */
    /* ================================= */

    // To change date, simply edit: var endDate = "Dec 30, 2015 20:39:00";

    var $countdownContainer = $(".countdown");

    if ($countdownContainer.length) {
        $(function countdown() {
            var endDate = "September 20, 2017 20:39:00";
            $countdownContainer.countdown({
                date: endDate,
                render: function (data) {
                    $(this.el).html("<div class='col-xs-6 col-sm-3 col-md-3'>" + this.leadingZeros(data.days, 3) + " <span>days</span></div><div class='col-xs-6 col-sm-3 col-md-3'>" + this.leadingZeros(data.hours, 2) + " <span>hours</span></div><div class='col-xs-6 col-sm-3 col-md-3'>" + this.leadingZeros(data.min, 2) + " <span>minutes</span></div><div class='col-xs-6 col-sm-3 col-md-3'>" + this.leadingZeros(data.sec, 2) + " <span>seconds</span></div>");
                },
            });
        });
    }



    /* ================================== */
    /* :::::: 6. Youtube background ::::: */
    /* ================================== */

    var $initYoutubeBackgroung = $(".youtube-background");

    if ($initYoutubeBackgroung.length) {
        $(function playerYoutube() {
            $(".player").mb_YTPlayer();
        });
        $('#play').on("click", function clickplay() {
            $('.player').playYTP(),
                $("#play").addClass("display-none"),
                $("#pause").removeClass("display-none")
        });
        $('#pause').on("click", function clickpause() {
            $('.player').pauseYTP();
            $("#pause").addClass("display-none"),
                $("#play").removeClass("display-none")
        });
        $("#mute").on("click", function clickmute() {
                $('.player').YTPMute(),
                    $("#mute").addClass("display-none"),
                    $("#unmute").removeClass("display-none")
            }),
            $("#unmute").on("click", function clickunmute() {
                $('.player').YTPUnmute(),
                    $("#unmute").addClass("display-none"),
                    $("#mute").removeClass("display-none")
            });
        $("#full-screen").on("click", function clickunmute() {
            $('.player').YTPFullscreen();
        });
    }






    /* ================================== */
    /* :::::: 7. Photoswipe Gallery ::::: */
    /* ================================== */

    var initPhotoSwipeFromDOM = function (gallerySelector) {
        // parse slide data (url, title, size ...) from DOM elements 
        // (children of gallerySelector)
        var parseThumbnailElements = function (el) {
            var thumbElements = el.childNodes,
                numNodes = thumbElements.length,
                items = [],
                figureEl,
                linkEl,
                size,
                item;

            for (var i = 0; i < numNodes; i++) {

                figureEl = thumbElements[i]; // <figure> element

                // include only element nodes 
                if (figureEl.nodeType !== 1) {
                    continue;
                }

                linkEl = figureEl.children[0]; // <a> element

                size = linkEl.getAttribute('data-size').split('x');

                // create slide object
                item = {
                    src: linkEl.getAttribute('href'),
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };



                if (figureEl.children.length > 1) {
                    // <figcaption> content
                    item.title = figureEl.children[1].innerHTML;
                }

                if (linkEl.children.length > 0) {
                    // <img> thumbnail element, retrieving thumbnail url
                    item.msrc = linkEl.children[0].getAttribute('src');
                }

                item.el = figureEl; // save link to element for getThumbBoundsFn
                items.push(item);

            }

            return items;
        };

        // find nearest parent element
        var closest = function closest(el, fn) {
            return el && (fn(el) ? el : closest(el.parentNode, fn));
        };

        // triggers when user clicks on thumbnail
        var onThumbnailsClick = function (e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;

            var eTarget = e.target || e.srcElement;

            // find root element of slide
            var clickedListItem = closest(eTarget, function (el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });

            if (!clickedListItem) {
                return;
            }

            // find index of clicked item by looping through all child nodes
            // alternatively, you may define index via data- attribute
            var clickedGallery = clickedListItem.parentNode,
                childNodes = clickedListItem.parentNode.childNodes,
                numChildNodes = childNodes.length,
                nodeIndex = 0,
                index;

            for (var i = 0; i < numChildNodes; i++) {
                if (childNodes[i].nodeType !== 1) {
                    continue;
                }

                if (childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }



            if (index >= 0) {
                // open PhotoSwipe if valid index found
                openPhotoSwipe(index, clickedGallery);
            }
            return false;
        };

        // parse picture index and gallery index from URL (#&pid=1&gid=2)
        var photoswipeParseHash = function () {
            var hash = window.location.hash.substring(1),
                params = {};

            if (hash.length < 5) {
                return params;
            }

            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if (!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');
                if (pair.length < 2) {
                    continue;
                }
                params[pair[0]] = pair[1];
            }

            if (params.gid) {
                params.gid = parseInt(params.gid, 10);
            }

            return params;
        };

        var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll('.pswp')[0],
                gallery,
                options,
                items;

            items = parseThumbnailElements(galleryElement);

            // define options (if needed)
            options = {

                // define gallery index (for URL)
                galleryUID: galleryElement.getAttribute('data-pswp-uid'),

                getThumbBoundsFn: function (index) {
                    // See Options -> getThumbBoundsFn section of documentation for more info
                    var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                        rect = thumbnail.getBoundingClientRect();

                    return {
                        x: rect.left,
                        y: rect.top + pageYScroll,
                        w: rect.width
                    };
                }

            };

            // PhotoSwipe opened from URL
            if (fromURL) {
                if (options.galleryPIDs) {
                    // parse real index when custom PIDs are used 
                    // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                    for (var j = 0; j < items.length; j++) {
                        if (items[j].pid == index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    // in URL indexes start from 1
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }

            // exit if index not found
            if (isNaN(options.index)) {
                return;
            }

            if (disableAnimation) {
                options.showAnimationDuration = 0;
            }

            // Pass data to PhotoSwipe and initialize it
            gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };

        // loop through all gallery elements and bind events
        var galleryElements = document.querySelectorAll(gallerySelector);

        for (var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i + 1);
            galleryElements[i].onclick = onThumbnailsClick;
        }

        // Parse URL and open gallery if it contains #&pid=3&gid=1
        var hashData = photoswipeParseHash();
        if (hashData.pid && hashData.gid) {
            openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
        }
    };

    // execute above function
    initPhotoSwipeFromDOM('.my-gallery');



    /* ==================================== */
    /* :::::::::: 8. Contact Form ::::::::: */
    /* ==================================== */

    $(function contactform() {
        $('#valid-form').on("click", function clickbutton() {
            // validate and process form here 
            $("#ajax-contact-form").validate({
                rules: {
                    name: {
                        required: true,
                    },
                    email: {
                        required: true,
                        email: true,
                    },
                    msg: {
                        required: true,
                    },
                },

                messages: {
                    name: {
                        required: "<i class='ion-ios-close-outline name'></i>",
                    },
                    email: {
                        required: "<i class='ion-ios-close-outline email'></i>",
                        email: "<i class='ion-ios-close-outline email'></i>",
                    },
                    msg: {
                        required: "<i class='ion-ios-close-outline message'></i>",
                    },

                },

                // JQuery's awesome submit handler.         
                submitHandler: function (form) {

                    // Create variables from the form
                    var name = $('input#name').val();
                    var email = $('input#email').val();
                    var msg = $('textarea#msg').val();

                    // Create variables that will be sent in a URL string to contact.php
                    var dataString = '&name=' + name + '&email=' + email + '&msg=' + msg;

                    $.ajax({
                        type: "POST",
                        url: "php/contact.php",
                        data: dataString,
                        success: function (data) {
                            if (data === 'OK') {
                                $("#ajax-contact-form").find('input[type=text], input[type=email], textarea').val("");
                            };
                            if (data == 'OK') {
                                result = '<div class="notification_ok"><i class="ion-ios-checkmark-outline"></i> Your email was sent. Thanks!</div>';

                            } else {
                                result = data;
                            };
                            $('#note').html(result);
                        },
                    });
                    return false;
                },
            });
        });
    });


    /* ================================= */
    /* :::::::: 9. Ajax mailchimp :::::: */
    /* ================================= */

    var $initMailChimp = $("#subscribe");

    if ($initMailChimp.length) {

        //     Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
        $('#subscribe').ajaxChimp({
            language: 'eng',
            url: 'http://us13.list-manage.com/subscribe/post?u=af4dd36a756aafe932bd33433&id=12ef31ead9'
        });

        // Mailchimp translation
        //
        // Defaults:
        //'submit': 'Submitting...',
        //  0: 'We have sent you a confirmation email',
        //  1: 'Please enter a value',
        //  2: 'An email address must contain a single @',
        //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
        //  4: 'The username portion of the email address is invalid (the portion before the @: )',
        //  5: 'This email address looks fake or invalid. Please enter a real email address'

        $.ajaxChimp.translations.eng = {
            'submit': '<i class="ion-ios-paperplane-outline submitting"></i> Sending...',
            0: '<i class="ion-ios-star"></i> Great! You will receive notification from us soon :)',
            1: '<i class="ion-ios-close-outline"></i> You must enter a valid e-mail address.',
            2: '<i class="fa fa-warning"></i> Sorry, but your E-mail address is not valid.',
            3: '<i class="fa fa-warning"></i> Sorry, but your E-mail address is not valid.',
            4: '<i class="fa fa-warning"></i> Sorry, but your E-mail address is not valid.',
            5: '<i class="fa fa-warning"></i> Sorry, but your E-mail address is not valid.',
        };
    };


    var $initModalForm = $(".dialog");

    if ($initModalForm.length) {
        (function () {
            var container = document.getElementById('main-container'),
                dlgtrigger = document.querySelector('[data-dialog]'),
                somedialog = document.getElementById(dlgtrigger.getAttribute('data-dialog')),
                dlg = new DialogFx(somedialog, {
                    onOpenDialog: function (instance) {
                        classie.add(container, 'main-container-move');
                    },
                    onCloseDialog: function (instance) {
                        classie.remove(container, 'main-container-move');
                    }
                });
            dlgtrigger.addEventListener('click', dlg.toggle.bind(dlg));
        })();
    }



    /* ================================= */
    /* :::::::: 10. Google Map :::::::::: */
    /* ================================= */


    var $initGoogleMap = $("#google-container");

    if ($initGoogleMap.length) {
        //set your google maps parameters
        var latitude = 40.705311,
            longitude = -74.2581879,
            map_zoom = 10;

        //google map custom marker icon - .png fallback for IE11
        var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
        var marker_url = (is_internetExplorer11) ? 'img/location.png' : 'img/location.png';

        //define the basic color of your map, plus a value for saturation and brightness
        var main_color = '#2d313f',
            saturation_value = -20,
            brightness_value = 5;

        //we define here the style of the map
        var style = [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{ "color": "#e9e9e9"}, 
                        { "lightness": 17 }]
        }, 
        {   "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{ "color": "#f5f5f5"}, 
                        { "lightness": 20 }]
        }, 
        {   "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#ffffff"}, 
                        { "lightness": 17}]
        }, 
        {   "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{ "color": "#ffffff"}, 
                        { "lightness": 29}, 
                        { "weight": 0.2 }]}, 
        {   "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{ "color": "#ffffff"}, 
                        { "lightness": 18 }]
        }, 
        {   "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{ "color": "#ffffff"}, 
                        { "lightness": 16 }]
        }, 
        {   "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{ "color": "#f5f5f5"}, 
                        { "lightness": 21 }]
        }, 
        {   "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{ "color": "#dedede"}, 
                        { "lightness": 21 }]
        }, 
        {   "elementType": "labels.text.stroke",
            "stylers": [{ "visibility": "on" }, 
                        {"color": "#ffffff"}, 
                        { "lightness": 16 }]
        }, 
        {   "elementType": "labels.text.fill",
            "stylers": [{ "saturation": 36}, 
                        { "color": "#333333"}, 
                        { "lightness": 40}]
        }, 
        {   "elementType": "labels.icon",
            "stylers": [{ "visibility": "off"}]
        }, 
        {   "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{ "color": "#f2f2f2"}, 
                        { "lightness": 19}]
        }, 
        {   "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#fefefe"}, 
                        { "lightness": 20}]
        }, 
        {   "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{ "color": "#fefefe"}, 
                        { "lightness": 17 }, 
                        {"weight": 1.2 }]
        }];

        //set google map options
        var map_options = {
                center: new google.maps.LatLng(latitude, longitude),
                zoom: map_zoom,
                panControl: false,
                zoomControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                styles: style,
            }
            //inizialize the map
        var map = new google.maps.Map(document.getElementById('google-container'), map_options);
        //add a custom marker to the map        


        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude),
            map: map,
            title: 'Melbourne, Australia',
            visible: true,
            icon: marker_url,
        });

        google.maps.event.addDomListener(window, "resize", function () {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });

        //add custom buttons for the zoom-in/zoom-out on the map
        function CustomZoomControl(controlDiv, map) {
            //grap the zoom elements from the DOM and insert them in the map 
            var controlUIzoomIn = document.getElementById('zoom-in'),
                controlUIzoomOut = document.getElementById('zoom-out');
            controlDiv.appendChild(controlUIzoomIn);
            controlDiv.appendChild(controlUIzoomOut);

            // Setup the click event listeners and zoom-in or out according to the clicked element
            google.maps.event.addDomListener(controlUIzoomIn, 'click', function () {
                map.setZoom(map.getZoom() + 1)
            });
            google.maps.event.addDomListener(controlUIzoomOut, 'click', function () {
                map.setZoom(map.getZoom() - 1)
            });
        }

        var zoomControlDiv = document.createElement('div');
        var zoomControl = new CustomZoomControl(zoomControlDiv, map);

        //insert the zoom div on the top left of the map
        map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
    }

});