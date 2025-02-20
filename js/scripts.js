const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

const navElement = document.querySelector('#theNav');
const btnElement = document.querySelector('#theButton');

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
})


