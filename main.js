// let age = prompt('Necha yoshsiz?')
// if(age <18){
//     alert('Yoshga qarshi cheklov urnatilgan! ')
// }else{
//     alert('Xush kelibsiz')
// }
function navBack(){
    var nav = document.getElementById('nav').classList.toggle("change");
}
const navAnim = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.navbar-nav ')
   const navbar = document.querySelectorAll('.navbar-nav a')
    burger.addEvetListener("click", () => {
        nav.classList.toggle("nav-active");
    })
};
navAnim();