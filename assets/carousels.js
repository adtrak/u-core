// Product page image Swiper
document.addEventListener('DOMContentLoaded', function() {
    try {
        const swiper = new Swiper('.swiper-featured-products', {
        // direction: 'horizontal',
        slidesPerView: 2,
        // loop: true,
        scrollbar: {
            el: ".swiper-featured-products-scrollbar",
            hide: true,
          },
        })
    } catch (e) {
        console.log("SwiperJS is not defined");
    }
})