const button = document.querySelector('.button');
const userboxes = document.querySelectorAll('.user-box');
const number = document.querySelector('.number');
const reddots = document.querySelectorAll('.fa-solid');


console.log(reddots)
button.addEventListener('click', () => {
    number.innerHTML = "0";

userboxes.forEach(element => {
    if(element.classList.contains('new')) {
        element.classList.remove('new');
        reddots.forEach(element => {
            element.remove()
        });
    }
});
})