const horas = document.getElementById("horas");
const minutes = document.getElementById("minutos");
const seconds = document.getElementById("segundos");
const day = document.getElementById("day");
const month = document.getElementById("Month");
const year = document.getElementById("year");

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hora = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();
  let d = dateToday.getDate();
  let mes = dateToday.getMonth();
  let yr = dateToday.getFullYear();

  if (hora < 10) {
    hora = "0" + hora;
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (sec < 10) {
    sec = "0" + sec;
  }

  horas.textContent = hora;
  minutes.textContent = min;
  seconds.textContent = sec;
  day.textContent = d;
  month.textContent = mes + 1;
  year.textContent = yr;
});
