

export default function coracao() {

  const cor = document.querySelectorAll(".heart");
  let like = 0;

  cor.forEach((c, index) => {

    c.addEventListener("click", () => {

      if (cor[index].classList.contains("democlass")) {
        cor[index].src = "./img/coracao.svg";
        cor[index].classList.remove("democlass");
        console.log(cor[index].src)
      } else {
        cor[index].src = "./img/coracaored.svg";
        cor[index].setAttribute("class", "democlass");
      }

    })
  })

}
