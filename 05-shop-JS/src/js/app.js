'use strict';

// test
const product1 = { name: 'koszula', price: 10 };
const product2 = { name: 'marynarka', price: 20 };
const discount = 10;
let discountEnable = false;

// dodawanie produktów do koszyka

const itemsTableContainer = document.querySelector('#items');
let counter = 1;

function addItem(item) {
  itemsTableContainer.innerHTML += `<tr>

<td>${counter++}</td>
<td>${item.name}</td>
<td> 
<input type="number" value='1' class='quantity'>
</td>
<td>${item.price}</td>
<td> <button class='btn-delete'>X</button> </td>
</tr>
`;
}

addItem(product1);
addItem(product2);

// zmiana tła

function markBg(e) {
  if (e.target.tagName === 'TD') {
    e.target.closest('tr').classList.toggle('marked');
  }
}

// cena całkowita

function calculatePrice() {
  const total = Number(product1.price) + Number(product2.price);

  let totalWithDiscount = total;
  if (discountEnable) {
    totalWithDiscount = total - discount;
  }

  document.querySelector('#total-price').innerHTML = totalWithDiscount;
}

// dodawnia znizki przy checkobx,

function addDiscount(e) {
  discountEnable = e.target.checked;

  if (discount > 0) {
    document.querySelector('#discount-amount').innerHTML = -discount;
    document.querySelector('#discount').classList.toggle('hidden');
  }
  calculatePrice();
}

// usuwanie produktu z koszyka

function removeRow(e) {
  const row = e.target.closest('tr');
  row.remove();
}

function removeRowQuantity(e) {
  if (Number(e.target.value) === 0) {
    const row = e.target.closest('tr');
    row.remove();
  }
}

const deleteButtons = document.querySelectorAll('.btn-delete');

for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener('click', removeRow);
}

const quantityInputs = document.querySelectorAll('.quantity');

for (let i = 0; i < quantityInputs.length; i++) {
  quantityInputs[i].addEventListener('change', removeRowQuantity);
}

// addEventListener

document.querySelector('#add-discount').addEventListener('click', addDiscount);
itemsTableContainer.addEventListener('click', markBg);
calculatePrice();
