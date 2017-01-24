// Setting up clock functions

// set up a constant / variable for each clock hand

const secondHand = document.querySelector("#second-hand");
const minsHand = document.querySelector("#minute-hand");
const hourHand = document.querySelector("#hour-hand");

function setDate () {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  // set up the hour hand so it moves each minute, to enable it to move between the full hour marks
  const hour = now.getHours();
  const currHour = hour + (mins / 60);
  const hourDegrees = ((currHour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  console.log("seconds =" + seconds);
  console.log("degrees =" + secondsDegrees);

}

setInterval(setDate, 1000);

setDate();

// setting up styling functions

var inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
}

// when 'hear' changed value of each input type >> run the handleUpdate function
inputs.forEach(input => input.addEventListener("change", handleUpdate));
