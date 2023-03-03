let secondArrow = document.querySelector(".second");
let minuteArrow = document.querySelector(".minute");
let hourArrow = document.querySelector(".hour");

const time = () => {
  let sec = new Date().getSeconds();
  let min = new Date().getMinutes();
  let hour = new Date().getHours();

  secondArrow.style.transform = `rotate(${sec * 6}deg)`;
  minuteArrow.style.transform = `rotate(${min * 6}deg)`;
  hourArrow.style.transform = `rotate(${hour * 30 + min * 0.5}deg)`;
};

setInterval(time, 1000);

