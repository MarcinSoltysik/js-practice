'use strict';

// test
const product1 = { name: 'koszula', price: 10 };
const product2 = { name: 'marynarka', price: '20' };
const discount = 10;

if (typeof product2.price === 'string') {
  console.log('Błędny typ danych');
}
// dodawanie produktów do koszyka

const itemsTableContainer = document.querySelector('#items');
let counter = 1;

function addItem(item) {
  itemsTableContainer.innerHTML += `
<tr>
<td>${counter++}</td>
<td>${item.name}</td>
<td>1</td>
<td>${item.price}</td>
</tr>
`;
}

addItem(product1);
addItem(product2);

// cena całkowita
const total = Number(product1.price) + Number(product2.price);
const totalWithDiscount = total - discount;

document.querySelector('#total-price').innerHTML = totalWithDiscount;

// dodanie zniżki, wyświetlanie / ukrywanie

const discountContainer = document.querySelector('#discount-amount');
discountContainer.innerHTML = -discount;

// if (discount === 0) {
//   document.querySelector('#discount').style.display = 'none';
// }

if (discount > 0) {
  document.querySelector('#discount').classList.remove('hidden');
}

/////////////////////////////
/// test log
///
//  TEST console.log
///
console.log(total);
console.log(totalWithDiscount);

console.log(
  `cena przed znizką: ${total}, cena po znizce: ${totalWithDiscount}`
);

console.log(typeof product1.price, typeof product2.price);

console.log(typeof '20');
console.log(typeof Number('20'));

//  TEST console.log
console.log(document.querySelector('#total-price'));
