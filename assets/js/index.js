let quantityInput = document.getElementById("quantity");
let colorSelect = document.getElementById("color");
let totalAmount = document.querySelector(".total h2:first-of-type");
let quantityDisplay = document.querySelector(".total h2:nth-of-type(3)");
let colorCircle = document.querySelector(".color");
const price = 400000;

let boton = document.querySelector("button");

boton.addEventListener("click", function () {
  let quantity = quantityInput.value;
  let color = colorSelect.value;

  totalAmount.textContent = "Total: $" + quantity * price;
  quantityDisplay.textContent = "Cantidad: " + quantity;
  colorCircle.style.backgroundColor = color;
});
