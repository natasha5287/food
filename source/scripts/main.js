//Выбираем кнопку открытия меню
let navOpen = document.querySelector('.header-open');

// Выбираем меню, которое надо показать при нажатии на кнопку
let overlay = document.querySelector('.header_box');

//Добавляем класс для скрытого меню
navOpen.addEventListener('click', function() {
    overlay.classList.add ('header_box-open');
})

//Выбираем кнопку закрытия меню
let navClose = document.querySelector('.header-close');

//Убираем класс для открытого меню
navClose.addEventListener('click', function() {
    overlay.classList.remove ('header_box-open');
})



//Accordion
let label = document.querySelectorAll(".accordion_item")

label.forEach((e)=>{
    e.addEventListener("click", ()=>{
        removeClass()
        e.classList.toggle("opened")
    })
})

function removeClass(){
    label.forEach((e)=>{
        e.classList.remove("opened")
    })
}

// Редактирование количества товаров

function countFunc(count) {
    const btnPlus = count.querySelector(".basket_button-increase");
    const btnMinus = count.querySelector(".basket_button-decrease");
    const field = count.querySelector(".input-quantity");
    let fieldValue = field.value;
  
    btnMinus.addEventListener('click', function() {
      if (fieldValue > 1) {
        fieldValue--;
        field.value = fieldValue;
      } else {
        return 1;
      }
    });
    btnPlus.addEventListener('click', function() {
      fieldValue++;
      field.value = fieldValue;
    });
  
  }

  const counts = document.querySelectorAll(".basket_count");
  counts.forEach(countFunc);



//   сумма в зависимости от кол-ва товара
