var swiper = new Swiper('.banner-swiper', {
    loop: true,
    speed: 2000,
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    autoplay: {
        delay: 3000, // Slide will change every 3 seconds
        disableOnInteraction: false, // Keeps autoplay running even after user interaction
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Allows users to click pagination dots
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
