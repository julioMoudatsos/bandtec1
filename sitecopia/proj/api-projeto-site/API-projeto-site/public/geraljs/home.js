import animaquadrado from "../js/quadrados.js"
import Slide from "../js/slide.js";

const squares = new animaquadrado();
console.log(squares)


const SlideSite = new Slide(".slide", ".cont_slide", "ativo");
SlideSite.init();
SlideSite.change(1);

const SlideMentes = new Slide(".slides_mente", ".mentes", "ativo");
SlideMentes.init();
SlideMentes.change(1);



