//Выбираем кнопку открытия меню
let navOpen = document.querySelector('.header-open');

// Выбираем меню, которое надо показать при нажатии на кнопку
let overlay = document.querySelector('.header_box');

//Добавляем класс для скрытого меню
navOpen.addEventListener('click', function () {
  overlay.classList.add('header_box-open');
})

//Выбираем кнопку закрытия меню
let navClose = document.querySelector('.header-close');

//Убираем класс для открытого меню
navClose.addEventListener('click', function () {
  overlay.classList.remove('header_box-open');
})



//Accordion
const label = document.querySelectorAll(".accordion_item")

label.forEach((e) => {
  e.addEventListener("click", () => {
    removeClass()
    e.classList.toggle("opened")
  })
})

function removeClass() {
  label.forEach((e) => {
    e.classList.remove("opened")
  })
}

// Редактирование количества единиц товара

function countFunc(count) {
  const btnPlus = count.querySelector(".basket_button-increase");
  const btnMinus = count.querySelector(".basket_button-decrease");
  const field = count.querySelector(".input-quantity");
  let fieldValue = field.value;

  btnMinus.addEventListener('click', function () {
    if (fieldValue > 1) {
      fieldValue--;
      field.value = fieldValue;
    } else {
      return 1;
    }
  });
  btnPlus.addEventListener('click', function () {
    fieldValue++;
    field.value = fieldValue;
  });

}

const counts = document.querySelectorAll(".basket_count");
counts.forEach(countFunc);

//Popup корзины

const popupLink = document.querySelector('.popup_link');
const popupElement = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup_close');

popupCloseButton.addEventListener('click', function () {
  popupElement.classList.remove('popup-opened');
})

popupLink.addEventListener('click', function (e) {
  if (window.innerWidth >= 1024) {
    e.preventDefault();
    popupElement.classList.add('popup-opened');
  }
})


//tabs 
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const tabsBtn = document.querySelectorAll('[data-tab-btn]');

function clearTabs() {
  tabContents.forEach(tabContent => {
    tabContent.classList.remove('active');
  });
  tabs.forEach(tab => {
    tab.classList.remove('button-tab-active')
  });
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    clearTabs();
    tab.classList.add('button-tab-active');
    target.classList.add('active');
  })
})


// кнопки на табах в корзине
tabsBtn.forEach(tab => {
  tab.addEventListener('click', () => {
    clearTabs();

    if (tab.dataset.tabBtn === '#checkout') {
      document.getElementById('checkout').classList.add('active');
      tabs.forEach(tab => {
        if (tab.dataset.tabTarget === "#checkout") {
          tab.classList.add('button-tab-active');
        }
      })
    }

    if (tab.dataset.tabBtn === '#basket') {
      document.getElementById('basket').classList.add('active');
      tabs.forEach(tab => {
        if (tab.dataset.tabTarget === "#basket") {
          tab.classList.add('button-tab-active');
        }
      })
    }

  })
})

// Слайдер

const swiperReview = new Swiper('.reviews_slider', {
  navigation: {
    nextEl: '.reviews_button',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  initialSlide: 0,
  watchOverflow: true,
  loop: true,
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    }
  }
});