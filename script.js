const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");

const dayOtp = document.getElementById("DD");
const monthOtp = document.getElementById("MM");
const yearOtp = document.getElementById("YY");

const form = document.querySelector("form");

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function validate(i) {
  const inputs = document.querySelectorAll("input");
  let valid = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "Must be a valid day";
      valid = false;
    } else if (monthInp.value > 12) {
        monthInp.style.borderColor = "red";
        monthInp.parentElement.querySelector("small").innerText = "must be valid month.";
        valid = false;
    } else if (dayInp.value > 31) {
        dayInp.style.borderColor = "red";
        dayInp.parentElement.querySelector("small").innerText =
          "must be valid day.";
        valid = false;
    } else {
    
      parent.querySelector("small").innerText = "";
      valid = true;
    }
  });
  return valid;
}
function calcuteage(e) {
  e.preventDefault();
  if (validate()) {
    if (dayInp.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthInp.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - dayInp.value;
    const m = month - monthInp.value;
    const y = year - yearInp.value;

    dayOtp.innerHTML = d;
    monthOtp.innerHTML = m;
    yearOtp.innerHTML = y;
  }
}

form.addEventListener("submit", calcuteage);

    
