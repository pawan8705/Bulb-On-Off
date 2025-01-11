let BulbImage = document.getElementById("img");
let Offbtn = document.getElementById("off");
let Onbtn = document.getElementById("on");
let Headingtext = document.getElementById("text");


BulbImage.src = "./Assets/of.png";
Headingtext.innerHTML = "Off";
Headingtext.style.color = "#ff0000"

function on() {
  BulbImage.src = "./Assets/on.png";
  Headingtext.innerHTML = "On";
  Headingtext.style.color = "#06a901"
  Onbtn.style.color = "white";
  Onbtn.style.backgroundColor = "#06a901";
  Offbtn.style.color = "black";
  Offbtn.style.backgroundColor = "white";
  Offbtn.style.border = "2px solid black"
}

function off() {
  BulbImage.src = "./Assets/of.png";
  Headingtext.innerHTML = "Off";
  Headingtext.style.color = "#ff0000"
  Offbtn.style.color = "white";
  Offbtn.style.backgroundColor = "#ff0000";
  Onbtn.style.color = "black";
  Onbtn.style.backgroundColor = "white";
  Onbtn.style.border = "2px solid black"
}