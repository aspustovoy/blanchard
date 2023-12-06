let search = document.querySelector('.header-form__btn');
let form = document.querySelector('.search-menu');
let searchExit = form.querySelector('.search-output');


search.addEventListener('click',
  function () {
    if (window.innerWidth < 1680) {
      form.classList.toggle('search-menu--active');
      document.body.classList.toggle('stop-scroll');
    }
  });


searchExit.addEventListener('click',
  function () {
    form.classList.remove('search-menu--active');
    document.body.classList.remove('stop-scroll');
  });


let burger = document.querySelector('.burger');
let menu = document.querySelector('.header-top__menu');
let menuLinks = menu.querySelectorAll('.nav__link');
burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header-top__menu--active');
    document.body.classList.toggle('stop-scroll');
  })
menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header-top__menu--active');
    document.body.classList.remove('stop-scroll');
  })
});


const swiper = new Swiper('.hero__swiper', {
  loop: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  }
});


const btnscroll = document.querySelectorAll(".hero__btn");
btnscroll.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const scroll = document.querySelector('#map')
    scroll.scrollIntoView({
      behavior: "smooth"
    })
  });
});


const btnscroll2 = document.querySelectorAll(".tabs-btn");
btnscroll2.forEach(function (element) {
  const scroll = document.querySelector('#catalog-tabs')
  element.addEventListener('click', function (e) {
    if (window.innerWidth < 992) {
      scroll.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


Array.prototype.forEach.call(
  document.querySelectorAll('.dropdown-content'),
  (el) => new SimpleBar(el)
);


const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  placeholder: false,
});


const swiper1 = new Swiper('.gallery__swiper', {
  loop: true,
  spaceBetween: 15,
  slidesPerView: 1,
  pagination: {
    el: '.gallery__swiper-pagination',
    type: 'fraction',
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    nextSlideMessage: 'Следующий слайд',
    prevSlideMessage: 'Предыдущий слайд',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    577: {
      loop: true,
      spaceBetween: 38,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    993: {
      loop: true,
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1025: {
      loop: true,
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  }
});


const btns = document.querySelectorAll('.gallery-btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const exitBtns = document.querySelectorAll('.modal__btn');
btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
    document.body.classList.toggle('stop-scroll');
  });
});
modalOverlay.addEventListener('click', (e) => {
  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
      document.body.classList.remove('stop-scroll');
    });
  }
});
exitBtns.forEach((el) => {
  el.addEventListener('click', () => {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
      document.body.classList.remove('stop-scroll')
    });
  });
});


new Accordion('.catalog__list', {
  elementClass: 'catalog__item',
  triggerClass: 'accordion-top__btn',
  panelClass: 'catalog__accordion',
  activeClass: 'accordion--active'
});


let tabsBtn = document.querySelectorAll('.tabs-btn');
let tabsItem = document.querySelectorAll('.catalog-tabs__item');
tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-btn--active') });
    e.currentTarget.classList.add('tabs-btn--active');
    tabsItem.forEach(function (element) { element.classList.remove('catalog-tabs__item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog-tabs__item--active');
  });
});


const swiper2 = new Swiper('.events__swiper', {
  spaceBetween: 34,
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    nextSlideMessage: 'Следующий слайд',
    prevSlideMessage: 'Предыдущий слайд',
  },
  navigation: {
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
  },
  breakpoints: {
    577: {
      spaceBetween: 34,
      loop: true,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    993: {
      spaceBetween: 27,
      loop: true,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1025: {
      spaceBetween: 48,
      loop: false,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  }
});


const popup1 = document.getElementById('popup1');
tippy('#marker1', {
  // trigger: 'click',
  maxWidth: 264,
  content: popup1.innerHTML,
  allowHTML: true,
  animation: 'scale-extreme',
});

const popup2 = document.getElementById('popup2');
tippy('#marker2', {
  maxWidth: 264,
  content: popup2.innerHTML,
  allowHTML: true,
  animation: 'scale-extreme',
});

const popup3 = document.getElementById('popup3');
tippy('#marker3', {
  maxWidth: 242,
  content: popup3.innerHTML,
  allowHTML: true,
  animation: 'scale-extreme',
});


const swiper3 = new Swiper('.projects__swiper', {
  spaceBetween: 34,
  loop: false,
  slidesPerView: 1,
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    nextSlideMessage: 'Следующий слайд',
    prevSlideMessage: 'Предыдущий слайд',
  },
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },
  breakpoints: {
    577: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    993: {
      spaceBetween: 48,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1025: {
      spaceBetween: 48,
      loop: false,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  }
});


var selector = document.getElementById("tel");
let im = new Inputmask('+7 (999) 999-99-99', { showMaskOnHover: false });
im.mask(selector);


const validation = new JustValidate('#form', {
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {},
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {},
  focusInvalidField: false,
});
validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон',
    },
    {
      validator: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      },
      errorMessage: 'Недопустимый формат',
    },
  ])
  .onSuccess((event) => {
    let formData = new FormData(event.target);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);
    event.target.reset();
  });


ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.761800, 37.622000],
    zoom: 14,
    controls: []
  });
  myMap.controls.add('geolocationControl', {
    float: 'right',
    position: {
      top: '355px',
      right: '10px'
    }
  });
  myMap.controls.add('zoomControl', {
    size: 'small',
    float: 'none',
    position: {
      top: '265px',
      right: '10px'
    }
  });
  myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {
    hintContent: 'Леонтьевский переулок, дом 5/1',
    balloonContent: 'Шоурум №4',
  }, {
    iconLayout: 'default#image',
    iconImageHref: './img/map.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [233, -80]
  }),
    myMap.geoObjects.add(myPlacemark)
};
