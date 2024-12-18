// Trending products carousel
document.addEventListener('DOMContentLoaded', function() {
    try {
        const swiper = new Swiper('.swiper-trending-products', {
        direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination-featured-products',
            clickable: true
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
        autoplay: false,
        breakpoints: {
            320: {
            slidesPerView: 1,
            spaceBetween: 20
            },
            767: {
            slidesPerView: 1,
            spaceBetween: 30
            },
            1200: {
            slidesPerView: 1,
            spaceBetween: 40
            },
            1600: {
            slidesPerView: 4.2,
            spaceBetween: 60
            }
        }
        })
    } catch (e) {
        console.log("SwiperJS is not defined");
    }
})