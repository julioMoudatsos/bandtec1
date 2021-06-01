
export default class Slide {
  constructor(slide, container, classe) {
    this.slide = document.querySelector(slide);
    this.container = document.querySelector(container);
    this.distancia = { final: 0, startX: 0, movimento: 0 }
    this.ativarclass = classe;
  }

  Remodelar() {
    setTimeout(() => {
      this.SlideConfig();
      this.change(this.index.ativo);
    }, 100);
  }

  Next() {
    if (this.index.ultimo != undefined) {
      this.change(this.index.ultimo);
    }
  }

  Prev() {
    if (this.index.anterior != undefined) {
      this.change(this.index.anterior);
    }
  }

  change(index) {
    this.MoverSlide(this.Arrayslide[index].posicao);
    this.SlideIndex(index);
    this.distancia.final = this.Arrayslide[index].posicao;
    this.Ativa(index);
  }

  Ativa(index) {
    this.Arrayslide.forEach((slide) => {
      slide.elemento.classList.remove(this.ativarclass);
    });
    this.Arrayslide[index].elemento.classList.add(this.ativarclass);
  }

  SlideIndex(index) {
    let last = this.Arrayslide.length - 1;
    this.index = {
      anterior: index ? index - 1 : undefined,
      ativo: index,
      ultimo: index == last ? undefined : index + 1,
    }
  }

  SlidePosicao(slide) {
    const margem = (this.container.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margem);
  }

  SlideConfig() {
    this.Arrayslide = [...this.slide.children].map((elemento) => {
      let posicao = this.SlidePosicao(elemento);
      return {
        posicao,
        elemento
      }
    })
  }


  MoverSlide(dist) {
    this.distancia.UltimoMovimento = dist;
    this.slide.style.transform = `translate3D(${dist}px,0,0)`;
  }

  UpdatePosition(clientX) {
    this.distancia.movimento = (this.distancia.startX - clientX) * 1.6;
    return this.distancia.final - this.distancia.movimento;
  }
  Onstart(event) {

    let tipo;
    if (event.type === "mousedown") {
      event.preventDefault();
      this.distancia.startX = event.clientX;
      tipo = "mousemove";
    } else {
      this.distancia.startX = event.changedTouches[0].clientX;
      tipo = "touchmove";
    }
    this.Transition(false);
    this.container.addEventListener(tipo, this.Onmove)

  }

  Onmove(event) {
    let tipoMove = (event.type === "mousemove") ? event.clientX : event.changedTouches[0].clientX;

    const posicaoFinal = this.UpdatePosition(tipoMove);
    this.MoverSlide(posicaoFinal);
  }

  Transition(ativa) {
    this.slide.style.transition = ativa ? 'transform .3s' : '';
  }

  Onleave(event) {
    let tipoMove = (event.type === "mouseup") ? "mousemove" : "touchmove";
    this.container.removeEventListener(tipoMove, this.Onmove)
    this.distancia.final = this.distancia.UltimoMovimento;
    this.Transition(true);
    this.MovimentSlide();
  }

  MovimentSlide() {
    if (this.distancia.movimento > 120 && this.index.ultimo != undefined) {
      this.Next();
    } else if (this.distancia.movimento < 120 && this.index.anterior != undefined) {
      this.Prev();
    } else {
      this.change(this.index.ativo);
    };
  }

  eventos() {
    this.container.addEventListener("mousedown", this.Onstart);
    this.container.addEventListener("mouseup", this.Onleave);

    this.container.addEventListener("touchstart", this.Onstart);
    this.container.addEventListener("touchend", this.Onleave);

    window.addEventListener("resize", this.Remodelar);
  }

  bind() {
    this.Onmove = this.Onmove.bind(this);
    this.Onstart = this.Onstart.bind(this);
    this.Onleave = this.Onleave.bind(this);
    this.Remodelar = this.Remodelar.bind(this);
  }

  init() {

    this.bind();
    this.Transition(true);
    this.eventos();
    this.SlideConfig();
    return this;
  }
}





