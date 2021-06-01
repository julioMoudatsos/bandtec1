

export default function animaquadrado() {

  const cores = ["tomato", "#FEC63E", "#ffffff"];
  const section = document.querySelector(".intro");
  const quadrados = document.createElement("span");
  quadrados.classList.add("squares");

  var tamanho = window.innerWidth > 830 ? 50 : 5;
  var size = Math.random() * tamanho;

  quadrados.style.width = 20 + size + "px";
  quadrados.style.height = 20 + size + "px";
  var type = window.innerWidth > 830 ? 500 : 50;

  quadrados.style.top = Math.random() * innerHeight + "px";
  quadrados.style.left = Math.random() * innerHeight + type + "px";

  const bg = cores[Math.floor(Math.random() * cores.length)];

  quadrados.style.backgroundColor = bg;
  quadrados.style.opacity = .8;


  section.appendChild(quadrados);

  const test = setTimeout(() => {
    quadrados.remove();
    if (window.location.href != "http://localhost:3000/index.html") {

    }
  }, 3000)
}




setInterval(animaquadrado, 150);



