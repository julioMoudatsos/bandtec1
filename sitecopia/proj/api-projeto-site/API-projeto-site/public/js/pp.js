import audios from "./pp2.js";

export default {
  cover: document.querySelector(".card-image"),
  title: document.querySelector(".card-content h5"),
  artist: document.querySelector(".artist"),
  pausar: document.querySelector(".btncontrol"),
  volume: document.querySelector(".btnvol"),
  controlVolume: document.querySelector("#volume"),
  seekbar: document.querySelector("#seekbar"),
  totalsong: document.querySelector(".totalsong"),
  iniciosong: document.querySelector(".iniciosong"),
  tralala: document.querySelector("#tralala"),

  createAudioElement(som) {
    this.audio = new Audio(som)
  },
  action() {
    this.pausar.onclick = () => this.playing();
    this.volume.onclick = () => this.volumando();

    this.tralala.onclick = (event) => {
      event.preventDefault();
      this.audio.pause();
      this.currentPlay++;
      if (this.currentPlay == this.audioData.length) this.restart();
      this.update();
      this.playing();
    };

    this.controlVolume.oninput = () => this.setVolume(this.controlVolume.value);
    this.controlVolume.onchange = () => this.setVolume(this.controlVolume.value);

    this.seekbar.oninput = () => this.setSeek(this.seekbar.value);
    this.seekbar.onchange = () => this.setSeek(this.seekbar.value);
    this.seekbar.max = this.audio.duration;
    this.totalsong.innerText = this.converter(this.audio.duration);

    this.audio.ontimeupdate = () => this.upTempo();
  },

  converter(tempo) {
    const minutos = Math.floor(tempo / 60);
    const segundos = Math.floor(tempo % 60);
    return `${("0" + minutos).slice(-2)}:${("0" + segundos).slice(-2)}`;
  },

  play() {
    this.modeon = true;
    this.audio.play();
  },
  pause() {
    this.modeon = false;
    this.audio.pause();
  },
  playing() {
    let ondaCast = document.querySelectorAll(".pod_onda");
    let contCast = document.querySelector(".cont_onda3");
    if (this.modeon) {
      this.pausar.innerHTML = `<img src="./img/pausacerta.svg" alt="#">`;
      this.pause();
      ondaCast.forEach((onda) => {
        onda.classList.remove("onda");
        contCast.classList.remove("ativada");
      })
    } else {
      this.pausar.innerHTML = `<img src="./img/ply.svg" alt="#">`;
      this.play();
      ondaCast.forEach((onda) => {
        onda.classList.add("onda");
        contCast.classList.add("ativada");

      })
    }
  },
  upTempo() {
    this.iniciosong.innerText = this.converter(this.audio.currentTime);
    this.seekbar.value = this.audio.currentTime;
  },
  setVolume(valor) {
    this.audio.volume = valor / 100;
  },
  setSeek(valor) {
    this.audio.currentTime = valor;
  },
  volumando() {
    this.audio.muted = !this.audio.muted;
    this.volume.innerHTML = this.audio.muted ? `<img src="./img/mute.svg" alt="#">` : `<img src="./img/som.svg" alt="#">`;
  },
  audioData: audios,
  currentPlay: 0,
  currentAudio: {},
  modeon: false,
  start() {
    this.update();
    this.action();
    this.audio.onended = () => this.next();
  },
  next() {

    this.currentPlay++;
    if (this.currentPlay == this.audioData.length) this.restart();
    this.update();
    this.audio.play();

  },
  update() {
    this.currentAudio = this.audioData[this.currentPlay];
    this.cover.style.background = `url('${this.currentAudio.cover}') no-repeat center center / cover`;
    this.title.innerText = this.currentAudio.title;
    this.artist.innerText = this.currentAudio.artist;
    this.createAudioElement(this.currentAudio.file);
    this.audio.onloadeddata = () => {
      this.action();
    }

  },
  restart() {
    this.currentPlay = 0;
    this.update();
  }
};




