const box = document.querySelector(".box");
box.style.backgroundColor = "red";
const header = document.getElementById("color");
const btn = document.querySelector("#btn");
let x = 0;

btn.addEventListener("click", function(){
    x++;
    header.textContext = 'clicked #{x}';

});

function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <h2 class="card-header">${item.name}</h2>
        <img src="${item.img}" alt="" />
        <p>filler filler filler</p>
      </div> `,
  );
}