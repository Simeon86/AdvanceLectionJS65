import { sumNumbers, substractNumber, divisionNumber, multiplicationNumber } from "./function.js";

console.log(sumNumbers(1,2));
console.log(substractNumber(5,3));
console.log(divisionNumber(9,3));
console.log(multiplicationNumber(2,4));

console.log('///////////////////////////////////////////////////////////////////////////////////')

const modalButton = document.querySelector('#openModal');
const modalContainer = document.querySelector('#myModal');

const closeButton = modalContainer.querySelector('span.close')
const cancelButton = modalContainer.querySelector('button.btn-cancel')

modalButton.addEventListener('click', function(event) {
    modalContainer.style.display = 'block';
})

closeButton.addEventListener('click', function(event) {
    modalContainer.style.display = 'none';
})

cancelButton.addEventListener('click', function(event) {
    modalContainer.style.display = 'none';
})

