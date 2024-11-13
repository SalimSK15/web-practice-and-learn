const menu_phone = document.getElementById("menu-phone");
const menu_phone_actions = document.getElementById("actions");

menu_phone.addEventListener("click",()=>{
    hundleMenu();
})

function hundleMenu(){
    menu_phone.classList.toggle("is-active");
    menu_phone_actions.classList.toggle("is-active");
}