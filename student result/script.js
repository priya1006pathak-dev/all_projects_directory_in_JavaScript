let Class = document.querySelector(".container");
let text = document.querySelector("#StudentName");
let marks1 = document.querySelector("#marks1");
let marks2 = document.querySelector("#marks2");
let marks3 = document.querySelector("#marks3");
let Button = document.querySelector("#calculatorBtn");
let heading = document.querySelector("#result");
Button.addEventListener("click", function () {
  let name = text.value;
  let subject1 = Number(marks1.value);
  let subject2 = Number(marks2.value);
  let subject3 = Number(marks3.value);
  let total = subject1 + subject2 + subject3;
  let percentage = total / 3;
  let result;
  if (subject1 >= 33 && subject2 >= 33 && subject3 >= 33) {
    result = "Pass";
  } else {
    result = "fail";
  }

  heading.innerHTML = `
<h2>Result</h2>
<p>Name: ${name}</p>
<p>Total Marks: ${total}</p>
<p>Percentage: ${percentage}%</p>
<p>Result: ${result}</p>
`;
});
