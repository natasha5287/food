import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

//Menu
const navOpen = document.querySelector('.header-open');
const overlay = document.querySelector('.header_box');
const navClose = document.querySelector('.header-close');

navOpen.addEventListener('click', function () {
  overlay.classList.add('header_box-open');
})

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

//Quantity of goods
const counts = document.querySelectorAll(".basket_count");

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

counts.forEach(countFunc);

//Popup 

const popupLink = document.querySelector('.popup_link');
const popupElement = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup_close');

if (popupLink) {
  popupCloseButton.addEventListener('click', function () {
    popupElement.classList.remove('popup-opened');
  })


  popupLink.addEventListener('click', function (e) {
    if (window.innerWidth >= 1024) {
      e.preventDefault();
      popupElement.classList.toggle('popup-opened');
    }
  })

}



//tabs 
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
let titleBlock = document.getElementById('title-tab');


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
    if (titleBlock) {
      titleBlock.textContent = tab.textContent;
    }
  })
})

//Slider Promo

const swiperPromo = new Swiper('.promo_slider', {
  navigation: {
    nextEl: '.promo_button',
  },
  slidesPerView: 1,
  spaceBetween: 20,
  initialSlide: 0,
  watchOverflow: true,
  loop: true,
  speed: 800,

})

//Slider Sets

const namesSlide = document.querySelectorAll('.sets_name');
const slideMenu = [];

namesSlide.forEach(name => {
  slideMenu.push(name.textContent);
})

const swiperSets = new Swiper('.sets_slider', {
  navigation: {
    nextEl: '.sets_button',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (slideMenu[index]) + '</span>';
    },
  },
  initialSlide: 0,
  watchOverflow: true,
  loop: true,
  spaceBetween: 50,
  speed: 1000,
})

//Slider Reviews

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
  speed: 800,
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

//Slider Best

const swiperBest = new Swiper('.best_slider', {
  navigation: {
    nextEl: '.swiper-button-next',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  initialSlide: 0,
  watchOverflow: true,
  loop: true,
  speed: 800,
  spaceBetween: 30,

  breakpoints: {
    1024: {
      spaceBetween: 60,
    }
  }
})

//Change .button-heart color
const buttonsFavorite = document.querySelectorAll('.button-heart');

buttonsFavorite.forEach((e) => {
  e.addEventListener('click', () => {
    e.classList.toggle('active');
  })
})

//Validate form
const form = document.querySelector('.form');
const buttonModal = document.querySelector('.form_confirm');
const modal = document.querySelector('.modal');
const formInputs = document.querySelectorAll('input[required]');
const inputEmail = document.getElementById('email');
const inputPhone = document.getElementById('tel');


if (buttonModal) {
  form.onsubmit = function () {
    let phoneValue = inputPhone.value;
    let emailValue = inputEmail.value;
    let emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    function validateEmail(email) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    function validatePhone(phone) {
      let re = /^[0-9\s]*$/;
      return re.test(String(phone));
    }

    formInputs.forEach(input => {
      if (input.value === '') {
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    });

    if (emptyInputs.length !== 0) {
      return false;
    }

    if (!validateEmail(emailValue)) {
      inputEmail.classList.add('error');
      return false;
    }

    if (!validatePhone(phoneValue)) {
      inputPhone.classList.add('error');
      return false;
    } else {
      inputPhone.classList.remove('error');
    }

    modal.classList.add('opened');
    return false;
  }

}
