var swiper = new Swiper('.mySwiper-elenco', {
  slidesPerView: 1,  // Mostra uma imagem por vez
  spaceBetween: 10,  // Espaço entre os slides
  loop: true,        // Permite que o carrossel seja contínuo
  pagination: {
      el: '.swiper-pagination-elenco',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      // Configurações específicas para diferentes larguras de tela
      0: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 30,
      },
  }
});