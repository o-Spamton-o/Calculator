document.getElementById("calc-btn").addEventListener("click", calcAverage);

function calcAverage() {
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;
  let average = (num1 + num2 + num3) / 3;

  document.getElementById("ave-out").innerHTML = average;

  let average2 = num1 + num2 + num3;

  document.getElementById("ave-out2").innerHTML = average2;

  let average3 = num1 * num2 * num3;

  document.getElementById("ave-out3").innerHTML = average3;

  let average4 = num1 % num2;

  document.getElementById("ave-out4").innerHTML = average4;

  let average5 = num1 ** num2;

  document.getElementById("ave-out5").innerHTML = average5;

  let average6 = num1.toFixed(2);

  document.getElementById("ave-out6").innerHTML = average6;

  let average7 = Math.tan(num3);

  document.getElementById("ave-out7").innerHTML = average7;

  let average8 = Math.random() * (num2 - num1 + 1) + num1;

  average8 = Math.floor(average8);

  document.getElementById("ave-out8").innerHTML = average8;
}
