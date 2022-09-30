// scrollTop
let scroll = document.querySelector('.back-top');
window.addEventListener('scroll', () => {

    scroll.classList.toggle('active', window.scrollY > 350)

})
scroll.addEventListener('click', scrollTop)

function scrollTop() {
    window.scrollTo({
        top: 0,
        behaviour: 'smooth'
    })
}
// set year copyright
let date = new Date();
let year = date.getFullYear()
const yearCtn = document.querySelector('.year')
yearCtn.textContent = `${year}`