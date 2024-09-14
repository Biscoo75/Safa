(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });



    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    $(document).ready(function () {
        // Initialize the Owl Carousel
        var owl = $('.vendor-carousel').owlCarousel({
            loop: true,
            margin: 10,
            rtl: true,
            nav: false, // Disable default nav
            autoplay: true,
            responsive: {
                0: { items: 2 },
                600: { items: 5 },
                1000: { items: 5 }
            }
        });

        // Custom Next Arrow
        $('#customNextBtn').click(function () {
            owl.trigger('next.owl.carousel');
        });

        // Custom Previous Arrow
        $('#customPrevBtn').click(function () {
            owl.trigger('prev.owl.carousel');
        });
    });

})(jQuery);

// ^==============our team section




//! inputs placeholders



//& Function to move the li elements into the sidebar for small screens start



document.addEventListener('DOMContentLoaded', function () {
    flatpickr("#datepicker", {
        // your options here
    });

    flatpickr("#another-datepicker", {
        // your options here
    });

    flatpickr("#another-datepicker-two", {
        // your options here
    });
    flatpickr("#datepicker-in-cat", {
        // your options here
    });
});
function handleDateInput(event) {
    const inputId = event.target.id;

    if (inputId === 'datepicker') {
        // Handle datepicker input
    } else if (inputId === 'another-datepicker') {
        // Handle another datepicker input
    }
    else if (inputId === 'another-datepicker-two') {
        // Handle another datepicker input
    }
    else if (inputId === 'datepicker-in-cat') {
        // Handle another datepicker input
    }
}
// Initialize Flatpickr
flatpickr("#datepicker-in-cat", {
    // Options for Flatpickr
    dateFormat: "Y-m-d",
    onChange: function (selectedDates, dateStr, instance) {
        handleDateInput(selectedDates, dateStr, instance);
    }
});

// Handle date input changes
function handleDateInput(selectedDates, dateStr, instance) {
    console.log("Selected Date:", dateStr);
    // Add custom logic to handle the date input
}

$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true,
    rtl: true, // Enable RTL mode
    dots: true
});

$(document).ready(function () {
    $(".custom-carousel .item").click(function () {
        $(".custom-carousel .item").not($(this)).removeClass("active");
        $(this).toggleClass("active");
    });
});


document.querySelectorAll('.custom-popUpOpen').forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        const link = button.getAttribute('data-link');
        document.getElementById('myInput').value = link;

        // Set up share links
        document.querySelector('.share-icon-ct .bi-facebook').parentNode.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
        document.querySelector('.share-icon-ct .bi-whatsapp').parentNode.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
        document.querySelector('.share-icon-ct .bi-instagram').parentNode.href = `https://www.instagram.com/?url=${encodeURIComponent(link)}`;
        document.querySelector('.share-icon-ct .twit').parentNode.href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}`;
        document.querySelector('.share-icon-ct .bi-messenger').parentNode.href = `https://www.messenger.com/t/?link=${encodeURIComponent(link)}`;

        document.getElementById('custom-popup').style.display = 'block'; // Show popup
    });
});

function closeCustomPopup() {
    document.getElementById('custom-popup').style.display = 'none'; // Hide popup
}

function copy() {
    const copyText = document.getElementById('myInput');
    copyText.select();
    document.execCommand('copy');
    alert('Link copied to clipboard!');
}



function copy() {
    // Get the text field
    var copyText = document.getElementById("myInput");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    // alert("Copied the text: " + copyText.value);
}


let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        },
    },
});



// Params
let mainSliderSelector = '.main-slider',
    navSliderSelector = '.nav-slider',
    interleaveOffset = 0.5;

// Main Slider
let mainSliderOptions = {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000
    },
    loopAdditionalSlides: 10,
    grabCursor: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        init: function () {
            this.autoplay.stop();
        },
        imagesReady: function () {
            this.el.classList.remove('loading');
            this.autoplay.start();
        },
        slideChangeTransitionEnd: function () {
            let swiper = this,
                captions = swiper.el.querySelectorAll('.caption');
            for (let i = 0; i < captions.length; ++i) {
                captions[i].classList.remove('show');
            }
            swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
        },
        progress: function () {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                let slideProgress = swiper.slides[i].progress,
                    innerOffset = swiper.width * interleaveOffset,
                    innerTranslate = slideProgress * innerOffset;

                swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                    "translateX(" + innerTranslate + "px)";
            }
        },
        touchStart: function () {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
            }
        },
        setTransition: function (speed) {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                    speed + "ms";
            }
        }
    }
};
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

// Navigation Slider
let navSliderOptions = {
    loop: true,
    loopAdditionalSlides: 10,
    speed: 1000,
    spaceBetween: 5,
    slidesPerView: 5,
    centeredSlides: true,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    direction: 'vertical',
    on: {
        imagesReady: function () {
            this.el.classList.remove('loading');
        },
        click: function () {
            mainSlider.autoplay.stop();
        }
    }
};
let navSlider = new Swiper(navSliderSelector, navSliderOptions);

// Matching sliders
mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;




// Initialize the intlTelInput instances
var input1 = document.querySelector("#mobile");
var iti1 = window.intlTelInput(input1, {
    initialCountry: "auto",
    geoIpLookup: callback => {
        fetch("https://ipapi.co/json")
            .then(res => res.json())
            .then(data => callback(data.country_code))
            .catch(() => callback("us"));
    },
});

var input2 = document.querySelector("#mobile2");
var iti2 = window.intlTelInput(input2, {
    initialCountry: "auto",
    geoIpLookup: callback => {
        fetch("https://ipapi.co/json")
            .then(res => res.json())
            .then(data => callback(data.country_code))
            .catch(() => callback("us"));
    },
});

// Handle form submission
document.getElementById("phoneForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the full phone number with country code
    var phoneNumber1 = iti1.getNumber();
    var phoneNumber2 = iti2.getNumber();

    // Log the phone numbers
    console.log("Primary Phone Number:", phoneNumber1);
    console.log("Secondary Phone Number:", phoneNumber2);

    // You can now send this data to your server or perform other actions
});
$(document).ready(function () {
    $('#mySelect').select2({
        width: '100%', // Adjust the width as needed
        placeholder: "Select an option", // Placeholder text
        allowClear: true // Allows clearing of selection
    });
});