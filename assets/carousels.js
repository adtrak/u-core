// Product page image Swiper
document.addEventListener('DOMContentLoaded', function() {
    try {
        const swiper = new Swiper('.swiper', {
        // direction: 'horizontal',
        slidesPerView: 1,
        // loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
        // autoplay: {
        //     delay: 5000,
        //   },
        })
    } catch (e) {
        console.log("SwiperJS is not defined");
    }
})