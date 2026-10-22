let Class = document.querySelector(".container");
let text = document.querySelector("#studentName");
let rollnumber = document.querySelector("#rollNumber");
let Button = document.querySelector("#markAttendance");
let div = document.querySelector("#QRCode");
console.log(div);
new QRCode(div, "http://192.168.1.2:5500/QR%20Generator/index.html");
let paragraph = document.querySelector("#attendanceResult");
Button.addEventListener("click", function () {
  let name = text.value;
  let roll = rollnumber.value;

  paragraph.innerHTML = `
   <p> Name: ${name} </p>
  <p> RollNumber : ${roll} </p>
   
   <p> Present </p>
   
   `;
});
