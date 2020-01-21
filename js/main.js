var btn_close=document.getElementsByClassName("btn__close")[0];
var menu=document.getElementById("nav__menu");
var bars=document.getElementById("btn_bars");

btn_close.addEventListener("click",function(){
    menu.classList.remove("translate__menuToShow");
})
bars.addEventListener("click",function(){
    menu.classList.add("translate__menuToShow");
})