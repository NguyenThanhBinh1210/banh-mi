const getCartFromLS = () => {
  const result = localStorage.getItem("cart");
  return result ? JSON.parse(result) : null;
};

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.querySelector(".custom-div-table");
const emptyCartContainer = document.querySelector(".empty-cart-container");
const totalDiv = document.querySelector(".custom-md-width");
const FormatNumber = (number) => {
  const newNumber = new Intl.NumberFormat("de-DE").format(number);
  return newNumber;
};
function renderProducts() {
  const tableBody = document.getElementById("yourTableId");
  tableBody.innerHTML = "";
  cart.forEach((product, index) => {
    const row = document.createElement("tr");
    // row.classList.add("custom-table-row", "odd-bg");
    if (index % 2 === 0) {
      // Nếu chẵn, thêm lớp "odd-bg"
      row.classList.add("custom-table-row", "odd-bg");
    } else {
      // Nếu lẻ, thêm lớp "even-bg"
      row.classList.add("custom-table-row", "even-bg");
    }
    // Add a delete button
    const deleteCell = document.createElement("td");
    deleteCell.classList.add("custom-table-cell");
    deleteCell.innerHTML = '<div class="custom-icon-close">x</div>';
    deleteCell.addEventListener("click", function () {
      // Find the index of the product in the products array
      const productIndex = cart.findIndex((p) => p._id === product._id);
      // Remove the product from the array
      if (productIndex !== -1) {
        cart.splice(productIndex, 1);
        console.log(cart);
        // Update localStorage and re-render the products
        updateLocalStorage();
        renderProducts();
        updateCartDisplay();
      }
    });
    row.appendChild(deleteCell);
    tableBody.appendChild(row);
    // Add product image
    const imageCell = document.createElement("td");
    imageCell.classList.add("custom-table-cell");
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("custom-image-container");
    const image = document.createElement("img");
    image.src = product.image[0];
    image.alt = "";
    imageDiv.appendChild(image);
    imageCell.appendChild(imageDiv);
    row.appendChild(imageCell);

    // Add product title
    const titleCell = document.createElement("td");
    titleCell.classList.add("custom-table-cell");
    titleCell.textContent = product.title;
    row.appendChild(titleCell);

    // Add product price
    const priceCell = document.createElement("td");
    priceCell.classList.add("custom-table-cell");
    priceCell.textContent = FormatNumber(product.price) + "đ";
    row.appendChild(priceCell);

    // Add input for quantity
    const quantityCell = document.createElement("td");
    quantityCell.classList.add("custom-table-cell");
    const quantityInput = document.createElement("input");
    quantityInput.classList.add("custom-input");
    quantityInput.type = "number";
    quantityInput.value = product.quantity;
    quantityInput.addEventListener("input", function () {
      // Update the product quantity in the local storage
      product.quantity = parseInt(quantityInput.value, 10);

      updateLocalStorage();
      totalCell.textContent =
        FormatNumber(product.price * product.quantity) + "đ";
    });
    quantityCell.appendChild(quantityInput);
    row.appendChild(quantityCell);

    // Add total price cell
    var totalCell = document.createElement("td");
    totalCell.classList.add("custom-table-cell");
    totalCell.textContent =
      FormatNumber(product.price * product.quantity) + "đ";
    row.appendChild(totalCell);
    // Add the row to the table body
    tableBody.appendChild(row);
  });
  updateTotalAmount();
}
function updateLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
if (cart.length === 0) {
  emptyCartContainer.style.display = "flex";
  cartContainer.style.display = "none";
  totalDiv.style.display = "none";
} else {
  emptyCartContainer.style.display = "none";
  cartContainer.style.display = "block";
  totalDiv.style.display = "block";
}
renderProducts();

function updateTotalAmount() {
  // Calculate the subtotal
  const subTotal = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  // Update the HTML elements with the calculated values
  document.getElementById("subTotal").textContent =
    FormatNumber(subTotal) + "đ";
  document.getElementById("total").textContent = FormatNumber(subTotal) + "đ";
}

function updateLocalStorage() {
  // Update the products array in localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Update the total amount
  updateTotalAmount();
}

function updateCartDisplay() {
  // Lấy số lượng sản phẩm từ localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartIcon = document.querySelector(".cart-length");
  if (cartItemCount === 0) {
    cartIcon.style.display = "none";
  } else {
    cartIcon.style.display = "flex";
  }
  cartIcon.textContent = cartItemCount;
}
updateCartDisplay();
