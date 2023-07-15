'use strict';

const modal = document.querySelector('.modal');

const btnsOpenModal = document.querySelectorAll('.btn__show-modal');
const btnCloseModal = document.querySelector('.btn__close-modal');

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
  });
}

btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
});
