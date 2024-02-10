const swiper = new Swiper(".swiper", {
  // slidesPerView: 1,
  // speed: 400,
  // // Optional parameters
  // direction: "horizontal",
  // loop: true,
  // // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
  // // Navigation arrows
  navigation: {
    nextEl: ".carousel__btn.next",
    prevEl: ".carousel__btn.prev",
  },
  spaceBetween: 24,
  slidesPerView: 2,
  centeredSlides: true,
  loop: true,
});
