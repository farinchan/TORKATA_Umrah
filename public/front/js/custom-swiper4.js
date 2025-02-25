
     var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 0,
      slidesPerView: 4,
      loop: true,
      direction: 'vertical',
      freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 0,
      loop: true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
      speed: 3000,
      thumbs: {
        swiper: galleryThumbs,
      },
      autoplay: {
            delay: 3000,
        },
        fadeEffect: {
            crossFade: true
        },
        effect:'fade',
    });