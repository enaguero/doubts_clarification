/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let profile = {
  name: "ERwin",
  age: 35,
  city: "Santiago",
  nationality: "Colombian",
  dateOfBirth: "01/01/2025",
  profession: "teacher"
};

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let profileDiv = document.getElementById("profile");
  let htmlFinal = "";

  htmlFinal += "<ul>";
  for (const property in profile) {
    htmlFinal += `<li> ${property} : ${profile[property]}  </li>`;
  }
  htmlFinal += "</ul>";

  profileDiv.innerHTML = htmlFinal;

  let color = "green";
  if (profile.nationality === "Colombian") {
    color = "yellow";
  }
  profileDiv.style.color = color;
};
