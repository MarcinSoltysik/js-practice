'use strict';

// test
const product1 = { price: 10 };
const produkt2 = { price: '20' };
const discount = 10;

if (typeof produkt2.price === 'string') {
  console.log('Błędny typ danych');
}

const total = Number(product1.price) + Number(produkt2.price);
const totalWithDiscount = total - discount;
console.log(total);
console.log(totalWithDiscount);

console.log(
  `cena przed znizką: ${total}, cena po znizce: ${totalWithDiscount}`
);

console.log(typeof product1.price, typeof produkt2.price);

console.log(typeof '20');
console.log(typeof Number('20'));
