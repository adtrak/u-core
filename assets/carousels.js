// Product page image Swiper
document.addEventListener('DOMContentLoaded', function() {
    try {
        const swiper = new Swiper('.swiper-featured-products', {
        // direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 65,
        // loop: true,
        scrollbar: {
            el: ".swiper-featured-products-scrollbar",
            hide: true,
        },
        breakpoints: {
            940: {
              slidesPerView: 2,
              spaceBetween: 20,
            }
        },
        })
    } catch (e) {
        console.log("SwiperJS is not defined");
    }
})

// Product page image Swiper
document.addEventListener('DOMContentLoaded', function() {
    try {
        const swiper = new Swiper('.pdp-image-swiper', {
        direction: 'horizontal',
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.pdp-image-swiper-pagination',
            clickable: true,
            type: 'bullets'
        },
        navigation: {
            nextEl: '.pdp-image-swiper-button-next',
            prevEl: '.pdp-image-swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
        },
        })
    } catch (e) {
        console.log("SwiperJS is not defined");
    }
})