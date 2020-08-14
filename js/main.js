var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 7000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiperContainer = document.querySelector(".swiper-container");

swiperContainer.addEventListener("mouseenter", () => {
  mySwiper.autoplay.stop();
});

swiperContainer.addEventListener("mouseleave", () => {
  mySwiper.autoplay.start();
});
