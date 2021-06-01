import coracao from "../js/heart.js";
import Slide from "../js/slide.js";

const votar = new coracao;


const SlideSeries = new Slide(".slideseries", ".contseries", "ativo");
SlideSeries.init();
SlideSeries.change(1);


const SlideSeries1 = new Slide(".slid1", ".cont1", "ativo");
SlideSeries1.init();
SlideSeries1.change(1);


const SlideSeries2 = new Slide(".slid2", ".cont2", "ativo");
SlideSeries2.init();
SlideSeries2.change(1);



