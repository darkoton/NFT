let swiper

function initSlider() {
  swiper = new Swiper('.swiper', {
    spaceBetween: 20,
    slidesPerView: "auto"
  });
}

if (window.innerWidth <= 800) {
  initSlider()
}

window.addEventListener('resize', () => {
  if (window.innerWidth <= 800) {
    initSlider()
  } else if (swiper) {
    swiper.disable()
    swiper.destroy()

  }
})