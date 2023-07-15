'use strict';

const modal = document.querySelector('.modal');

const btnsOpenModal = document.querySelectorAll('.btn__show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    console.log(btnsOpenModal[i], `modal:${i}`);
    modal.classList.remove('hidden');
  });
}
