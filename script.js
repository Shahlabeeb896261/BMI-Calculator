const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  const result = document.querySelector(".result");

  if (height <= 0 || height === "" || isNaN(height)) {
    result.innerHTML = "Please Enter Valid Height";
  } else if (weight <= 0 || weight === "" || isNaN(weight)) {
    result.innerHTML = "Please Enter Valid Weight";
  } else {
    let ans = ((weight / height / height) * 10000).toFixed(2);
    if (ans < 18.5) {
      result.innerHTML = `Underweight ${ans}`;
    } else if (ans >= 18.5 && ans <= 24.9) {
      result.innerHTML = `Normal ${ans}`;
    } else if (ans >= 25 && ans <= 29.9) {
      result.innerHTML = `Overweight ${ans}`;
    } else if (ans > 29.9) {
      result.innerHTML = `Obese ${ans}`;
    }
  }
});