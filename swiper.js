const swiper1 = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    centeredSlides: false,
    spaceBetween: 20,
    allowTouchMove: true,
    autoplay: {
      delay: 2500,
      reverseDirection: false,
      pauseOnMouseEnter: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      // when window width is >= 480px
      550: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 640px
      820: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    },

      // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  
  });