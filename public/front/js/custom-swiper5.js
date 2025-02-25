var interleaveOffset = 0.5;
    var swiperOptions = {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 0,
        loop: true,
        speed: 2000,
        grabCursor: true,
        watchSlidesProgress: true,
        mousewheelControl: true,
        keyboardControl: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 0,
        }
      }
    };

    var swiper = new Swiper(".swiper-container", swiperOptions);