let screen = document.querySelector("#screen");
let number1 = document.getElementById("number1");
let subtract = document.getElementById("minus");
let addition = document.getElementById("plus");
let multiplication = document.getElementById("multiply");
let division = document.getElementById("division");
let decimal = document.getElementById("decimal");
let deletes = document.getElementById("delete");
let allowed = true;

number1.addEventListener("click", () => {
  let displays = number1.innerText;
  screen.value += displays;
});

number2.addEventListener("click", () => {
  let displayMinus = number2.innerText;
  screen.value += displayMinus;
});
number0.addEventListener("click", () => {
  let displayMinus = number0.innerText;
  screen.value += displayMinus;
});
number3.addEventListener("click", () => {
  let displays = number3.innerText;
  screen.value += displays;
});
number4.addEventListener("click", () => {
  let displays = number4.innerText;
  screen.value += displays;
});
number5.addEventListener("click", () => {
  let displays = number5.innerText;
  screen.value += displays;
});
number6.addEventListener("click", () => {
  let displays = number6.innerText;
  screen.value += displays;
});
number7.addEventListener("click", () => {
  let displays = number7.innerText;
  screen.value += displays;
});
number8.addEventListener("click", () => {
  let displays = number8.innerText;
  screen.value += displays;
});
number9.addEventListener("click", () => {
  let displays = number9.innerText;
  screen.value += displays;
});
subtract.addEventListener("click", () => {
  let displays = subtract.innerText;
  screen.value += displays;
  allowed = true;
});
addition.addEventListener("click", () => {
  displays = addition.innerText;
  screen.value += displays;
  allowed = true;
});
multiplication.addEventListener("click", () => {
  displays = multiplication.innerText;
  screen.value += displays;
  allowed = true;
});
division.addEventListener("click", () => {
  displays = division.innerText;
  screen.value += displays;
  allowed = true;
});
// decimal.addEventListener("click", () => {
//   displays = decimal.innerText;
//   screen.value += displays;
// })

let equal = document.querySelector("#equal");
equal.addEventListener("click", function () {
  screen.value = eval(screen.value);
  if (screen.value.includes(".")) {
    allowed = false;
  } else allowed = true;
});
let deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click", function () {
  if (screen.value[screen.value.length - 1] == ".") {
    screen.value = screen.value.slice("0", "-1");
    allowed = true;
  } else {
    screen.value = screen.value.slice("0", "-1");
  }
})
decimal.addEventListener("click", function () {
  // screen.value = decimal.innerText;
  if (allowed) {
    screen.value += decimal.innerText;
    allowed = false;
  }

});

let clearAll = document.getElementById("clearAll");
clearAll.addEventListener("click", () => {
  screen.value = "";
  allowed = true;
});

