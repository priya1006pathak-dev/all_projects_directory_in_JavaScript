let temperature = document.getElementById("temperature");
let fromUnit = document.getElementById("fromUnit");
let toUnit = document.getElementById("toUnit");
let convertBtn = document.getElementById("convertBtn");
let result = document.getElementById("result");

convertBtn.addEventListener("click", function () {
  let temp = Number(temperature.value);
  if (temperature.value === "") {
    result.textContent = "Please enter a temperature";
    return;
  }
  let from = fromUnit.value;
  let to = toUnit.value;

  let answer;

  if (from === "celsius" && to === "fahrenheit") {
    answer = (temp * 9) / 5 + 32;
    result.textContent = answer.toFixed(2) + " °F";
  } else if (from === "fahrenheit" && to === "celsius") {
    answer = ((temp - 32) * 5) / 9;
    result.textContent = answer.toFixed(2) + " °C";
  } else if (from === "celsius" && to === "kelvin") {
    answer = temp + 273.15;
    result.textContent = answer.toFixed(2) + " K";
  } else if (from === "kelvin" && to === "celsius") {
    answer = temp - 273.15;
    result.textContent = answer.toFixed(2) + " °C";
  } else if (from === "fahrenheit" && to === "kelvin") {
    answer = ((temp - 32) * 5) / 9 + 273.15;
    result.textContent = answer.toFixed(2) + " K";
  } else if (from === "kelvin" && to === "fahrenheit") {
    answer = ((temp - 273.15) * 9) / 5 + 32;
    result.textContent = answer.toFixed(2) + " °F";
  } else {
    result.textContent = temp.toFixed(2);
  }
});
