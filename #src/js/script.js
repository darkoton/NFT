//< " ПОДКЛЮЧЕНИЕ JS КОМПОНЕНТОВ " >=============================================================================================================>//
@@include("./chunks/my-dynamic_adap.js"); // ДИНАМИЧЕСКИЙ АДАПТИВ

/* @@include("./chunks/my-scroll_header.js"); // ДОБАВЛЕНИЕ ХЕДЕРУ КЛАСС ПРИ СКРОЛЛЕ */

@@include("./chunks/my-swiper.js"); // НАСТРОЙКИ СЛАЙДЕРА

/* @@include("./chunks/my-quantity.js"); // СЧЁТЧИКИ */

@@include("./chunks/my-spoiler.js"); // СПОЙЛЕРЫ

/* @@include("./chunks/my-popup.js"); // ПОПАПЫ */

@@include("./chunks/my-parallax.js"); // ПАРАЛАКС 

@@include("./chunks/my-animate_scroll.js"); // АНИМАЦИЯ ПРИ СКРОДЕ 

@@include("./chunks/my-tabs.js"); // ТАБЫ

//< " СКРИПТЫ " >=============================================================================================================>//

let isMobile = {
  Android: function () { return navigator.userAgent.match(/Android/i); },
  BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
  iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
  Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
  Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
  any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

if (isMobile.any()) {
  document.body.classList.add("_touch");
} else {
  document.body.classList.add("_pc");
}

//< " СКРИПТЫ " >=============================================================================================================>//
let header = document.querySelector('.header')

document.addEventListener('scroll', e => {
  if (window.scrollY > 100) {
    header.classList.add('fixed')
  } else {
    header.classList.remove('fixed')
  }
})

function overflow() {
  document.body.classList.toggle('_lock-scroll')
}


//_explore.html

function tabMenu() {
  document.querySelector('.explore__navigation-mob').classList.toggle('_active');
  document.querySelector('.explore__navigation-backdrop').classList.toggle('_active');
  overflow()
}

// Получаем ссылку на элемент, с которого начинается свайп
var swipeElement = document.querySelector('.explore__navigation-line');

// Устанавливаем обработчики событий для касания/указателя
swipeElement.addEventListener('touchstart', handleSwipeStart);

// Функция, которая вызывается при начале свайпа
function handleSwipeStart(event) {
  // Сохраняем начальные координаты касания/указателя
  var startX = event.clientX || event.touches[0].clientX;
  var startY = event.clientY || event.touches[0].clientY;

  swipeElement.addEventListener('touchmove', handleSwipeMove);
  swipeElement.addEventListener('pointermove', handleSwipeMove);

  // Устанавливаем обработчики событий для окончания свайпа
  swipeElement.addEventListener('touchend', handleSwipeEnd);
  swipeElement.addEventListener('pointerup', handleSwipeEnd);

  // Функция, которая вызывается при перемещении касания/указателя
  function handleSwipeMove(event) {
    // Получаем текущие координаты касания/указателя
    var currentY = event.clientY || event.touches[0].clientY;
    var currentX = event.clientX || event.touches[0].clientX;

    // Выполняем нужные вам действия при перемещении
    // ...

    // Вычисляем разницу по вертикали
    var deltaX = currentX - startX;
    var deltaY = currentY - startY;

    // Проверяем условие, что свайп начался с определенного элемента и является вертикальным
    if (deltaY > 10 > 0 && Math.abs(deltaY) > Math.abs(deltaX)) {
      console.log('Свайп начался с элемента:', swipeElement);
      console.log('Дельта по вертикали:', deltaY);
      document.querySelector('.explore__navigation-mob').classList.remove('_active');
      document.querySelector('.explore__navigation-backdrop').classList.remove('_active');
      document.body.classList.remove('_lock-scroll')
    }
  }

  // Функция, которая вызывается при окончании свайпа
  function handleSwipeEnd(event) {
    document.querySelector('.explore__navigation-mob').classList.remove('_active');
    document.querySelector('.explore__navigation-backdrop').classList.remove('_active');
    document.body.classList.remove('_lock-scroll')

    // Удаляем обработчики событий перемещения и окончания свайпа
    swipeElement.removeEventListener('touchmove', handleSwipeMove);
    swipeElement.removeEventListener('pointermove', handleSwipeMove);
    swipeElement.removeEventListener('touchend', handleSwipeEnd);
    swipeElement.removeEventListener('pointerup', handleSwipeEnd);
  }
}

Array.from(document.querySelectorAll('.explore__navigation-mob .explore__nav')).forEach(element => {
  element.addEventListener('click', () => {
    document.querySelector('.explore__navigation-mob').classList.remove('_active');
    document.querySelector('.explore__navigation-backdrop').classList.remove('_active');
    document.body.classList.remove('_lock-scroll')

  })
})

new WOW({
  mobile: false,
  offset: 300,
}).init();
