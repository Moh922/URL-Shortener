// const toggleButton = document.getElementsByClassName('bi bi-list')[0]
// const navbarLinks = document.getElementsByClassName('btns-mobile')[0]


// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active')
// })


const hamburger = document.querySelector(".bi");
const navMenu = document.querySelector(".btns-mobile");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})


let popup = document.getElementById("popup");

function openPopup(){
  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("open-popup")
}