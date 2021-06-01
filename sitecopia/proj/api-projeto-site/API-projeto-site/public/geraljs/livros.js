
const cor = document.querySelectorAll(".checkbook");

cor.forEach((c, index) => {

  c.addEventListener("click", () => {

    if (cor[index].classList.contains("democlass")) {
      cor[index].src = "./img/book.svg";
      cor[index].classList.remove("democlass");
      console.log(cor[index].src)
    } else {
      cor[index].src = "./img/coracaored.svg";
      cor[index].setAttribute("class", "democlass");
    }

  })
})


