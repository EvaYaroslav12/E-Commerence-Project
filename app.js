const box = document.querySelector(".box");
box.style.backgroundColor = "red";
const header = document.getElementById("color");
const btn = document.querySelector("#btn");
let x = 0;

btn.addEventListener("click", function(){
    x++;
    header.textContext = 'clicked #{x}';

});