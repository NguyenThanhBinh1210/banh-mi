document.addEventListener("DOMContentLoaded", function () {
  // Lấy danh sách sản phẩm từ localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Lấy phần tử HTML để hiển thị danh sách sản phẩm
  const cartTableBody = document.getElementById("cart-table-body");
  const tempTotal = document.querySelector(".table-temp");
  const realTotal = document.querySelector(".table-total");

  // Render sản phẩm
  renderProducts(cart, cartTableBody);

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  tempTotal.textContent = `${FormatNumber(cartTotal)}đ`;
  realTotal.textContent = `${FormatNumber(cartTotal)}đ`;
  // console.log(cartTotal);
});
const FormatNumber = (number) => {
  const newNumber = new Intl.NumberFormat("de-DE").format(number);
  return newNumber;
};
function renderProducts(cart, container) {
  // Lặp qua danh sách sản phẩm và tạo HTML cho mỗi sản phẩm
  cart.forEach(function (item, index) {
    // Tạo phần tử tr cho mỗi sản phẩm
    const productRow = document.createElement("tr");
    productRow.classList.add(
      "custom-table-row",
      index % 2 === 0 ? "odd-bg" : "even-bg"
    );

    // Tạo cột "title x quantity"
    const titleQuantityCell = document.createElement("td");
    titleQuantityCell.classList.add("custom-table-cell");
    titleQuantityCell.textContent = `${item.title} x ${item.quantity}`;

    // Tạo cột "price * quantity"
    const totalPriceCell = document.createElement("td");
    totalPriceCell.classList.add("custom-table-cell");
    totalPriceCell.textContent = `${FormatNumber(item.price * item.quantity)}đ`;

    // Thêm các cột vào hàng sản phẩm
    productRow.appendChild(titleQuantityCell);
    productRow.appendChild(totalPriceCell);

    // Thêm hàng sản phẩm vào container
    container.appendChild(productRow);
  });
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
