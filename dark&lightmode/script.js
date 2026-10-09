let Class = document.querySelector(".light-side");
let Icon = document.querySelector(".icon");
let Result = document.querySelector("#result");
let isDark = false;
let Button = document.querySelector("#toggleBtn");
let body = document.querySelector("body");
Button.addEventListener("click", function () {
  console.log("Button clicked");

  if (isDark == false) {
    console.log("Dark mode");
    body.classList.add("dark-mode");
    Result.innerText = "Light";
    isDark = true;
  } else {
    console.log("Light mode");
    body.classList.remove("dark-mode");
    Result.innerText = "Dark";
    isDark = false;
  }
});
