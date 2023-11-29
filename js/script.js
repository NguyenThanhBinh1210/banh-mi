let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut;
const products = [
  {
    id: 1,
    name: " LD01 BERGER GÀ VÀ THỊT HEO XÔNG KHÓI",
    price: 78000,
    image: "images/dish-1.png",
  },
  {
    id: 2,
    name: " LD02 BÁNH MÌ LẠP XƯỞNG",
    price: 21000,
    image: "images/dish-2.png",
  },
  {
    id: 3,
    name: " LD03 BÁNH MÌ THỊT NƯỚNG",
    price: 16000,
    image: "images/dish-3.png",
  },
  {
    id: 4,
    name: " LD04 SANDWICH CÁ HỒI",
    price: 84000,
    image: "images/dish-4.png",
  },
  {
    id: 5,
    name: " LD05 SANDWICH THỊT HUN KHÓI",
    price: 33000,
    image: "images/dish-5.png",
  },
  {
    id: 6,
    name: " LD06 BURGER BÒ HOÀNG GIA ĐẶC BIỆT",
    price: 88000,
    image: "images/dish-6.png",
  },
  {
    id: 7,
    name: " LD07 BÁNH MÌ TÔM HÙM",
    price: 250000,
    image: "images/menu-1.jpg",
  },
  {
    id: 8,
    name: " LD08 BURGER BÒ WGYUA",
    price: 179000,
    image: "images/menu-2.jpg",
  },
  {
    id: 9,
    name: " LD09 BÁNH MÌ BÒ VIÊN ",
    price: 37000,
    image: "images/menu-3.jpg",
  },
  {
    id: 10,
    name: " LD010 SANDWICH CÁ HỒI XÔNG KHÓI & TRỨNG CÁ TẦM",
    price: 229000,
    image: "images/menu-4.jpg",
  },
  {
    id: 11,
    name: " LD011 SANDWICH CÁ NGỪ",
    price: 88000,
    image: "images/menu-5.jpg",
  },
  {
    id: 8,
    name: " LD08 COMBO BÁNH MÌ BÓNG ĐÊM VÀ TRÀ SỮA",
    price: 49000,
    image: "images/menu-6.jpg",
  },
  {
    id: 12,
    name: " LD08 COMBO BURGER BÒ ĐẶC BIỆT VÀ NƯỚC NGỌT",
    price: 59000,
    image: "images/menu-7.jpg",
  },
  {
    id: 13,
    name: " LD08 COMBO SANDWICH VÀ SỮA",
    price: 47000,
    image: "images/menu-8.jpg",
  },
  {
    id: 14,
    name: " LD08 COMBO BÁNH MÌ CHẢO VÀ TRÀ SỮA",
    price: 52000,
    image: "images/menu-9.jpg",
  },
];
document.addEventListener("DOMContentLoaded", function () {
  // Mảng sản phẩm từ file JSON

  // Lấy phần tử HTML để hiển thị danh sách sản phẩm
  const productListElement = document.getElementById("product-list");
  const productListElement2 = document.getElementById("product-list2");

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-to-cart")) {
      event.preventDefault(); // Ngăn chặn chuyển hướng khi click vào nút
      // Lấy thông tin sản phẩm từ sản phẩm được click
      const productId = event.target.dataset.productId;
      const selectedProduct = products.find(
        (product) => product.id === parseInt(productId)
      );

      // Thêm sản phẩm vào localStorage
      addToCart(selectedProduct);
    }
  });
  // Render sản phẩm
  renderProducts(products, productListElement);
  renderProducts2(products, productListElement2);
});
const FormatNumber = (number) => {
  const newNumber = new Intl.NumberFormat("de-DE").format(number);
  return newNumber;
};
function renderProducts(products, container) {
  // Lặp qua mảng sản phẩm và tạo HTML cho mỗi sản phẩm
  products.forEach(function (product) {
    // Tạo phần tử div cho mỗi sản phẩm
    const productElement = document.createElement("div");
    productElement.classList.add("box");

    // Tạo các phần tử con của sản phẩm
    const heartIcon = document.createElement("a");
    heartIcon.href = "#";
    heartIcon.classList.add("fas", "fa-heart");

    const eyeIcon = document.createElement("a");
    eyeIcon.href = "#";
    eyeIcon.classList.add("fas", "fa-eye");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image");

    const productImage = document.createElement("img");
    productImage.style.width = "100%";
    productImage.style.height = "220px";
    productImage.style.objectFit = "cover";
    productImage.style.borderRadius = "10px";
    productImage.src = product.image;
    productImage.alt = product.name;

    const productName = document.createElement("h3");
    productName.textContent = product.name;

    const starsContainer = document.createElement("div");
    starsContainer.classList.add("stars");

    for (let i = 0; i < 4; i++) {
      const starIcon = document.createElement("i");
      starIcon.classList.add("fas", "fa-star");
      starsContainer.appendChild(starIcon);
    }

    const halfStarIcon = document.createElement("i");
    halfStarIcon.classList.add("fas", "fa-star-half-alt");
    starsContainer.appendChild(halfStarIcon);

    const productPrice = document.createElement("span");
    productPrice.textContent = FormatNumber(product.price) + "VND";

    const addToCartButton = document.createElement("a");
    addToCartButton.href = "#";
    addToCartButton.classList.add("btn", "add-to-cart");
    addToCartButton.dataset.productId = product.id;
    addToCartButton.textContent = "Thêm vào giỏ hàng";

    // Thêm các phần tử con vào phần tử sản phẩm
    productElement.appendChild(heartIcon);
    productElement.appendChild(eyeIcon);
    productElement.appendChild(imageContainer);
    imageContainer.appendChild(productImage);
    productElement.appendChild(productName);
    productElement.appendChild(starsContainer);
    productElement.appendChild(productPrice);
    productElement.appendChild(addToCartButton);

    // Thêm sản phẩm vào container
    container.appendChild(productElement);
  });
}
function renderProducts2(products, container) {
  // Lặp qua mảng sản phẩm và tạo HTML cho mỗi sản phẩm
  products.forEach(function (product) {
    // Tạo phần tử div cho mỗi sản phẩm
    const productElement = document.createElement("div");
    productElement.classList.add("box");

    // Tạo phần tử div cho hình ảnh và icon heart
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image");

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;

    const heartIcon = document.createElement("a");
    heartIcon.href = "#";
    heartIcon.classList.add("fas", "fa-heart");

    // Thêm hình ảnh và icon heart vào div imageContainer
    imageContainer.appendChild(productImage);
    imageContainer.appendChild(heartIcon);

    // Tạo phần tử div cho nội dung sản phẩm
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("content");

    // Tạo các phần tử nội dung
    const starsContainer = document.createElement("div");
    starsContainer.classList.add("stars");

    for (let i = 0; i < 5; i++) {
      const starIcon = document.createElement("i");
      starIcon.classList.add("fas", "fa-star");
      starsContainer.appendChild(starIcon);
    }

    const productName = document.createElement("h3");
    productName.textContent = product.name;

    const productDescription = document.createElement("p");
    productDescription.textContent =
      "1 món ăn đẳng cấp mang phong cách đường phố";

    const addToCartButton = document.createElement("a");
    addToCartButton.href = "#";
    addToCartButton.classList.add("btn", "add-to-cart");
    addToCartButton.dataset.productId = product.id;
    addToCartButton.textContent = "Thêm vào giỏ hàng";

    const productPrice = document.createElement("span");
    productPrice.classList.add("price");
    productPrice.textContent = FormatNumber(product.price) + " VND";

    // Thêm các phần tử nội dung vào div contentContainer
    contentContainer.appendChild(starsContainer);
    contentContainer.appendChild(productName);
    contentContainer.appendChild(productDescription);
    contentContainer.appendChild(addToCartButton);
    contentContainer.appendChild(productPrice);

    // Thêm div imageContainer và div contentContainer vào div sản phẩm
    productElement.appendChild(imageContainer);
    productElement.appendChild(contentContainer);

    // Thêm sản phẩm vào container
    container.appendChild(productElement);
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
function addToCart(product) {
  // Lấy danh sách sản phẩm từ localStorage (nếu có)
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    // Nếu sản phẩm đã tồn tại, tăng số lượng
    existingProduct.quantity++;
  } else {
    // Nếu sản phẩm chưa tồn tại, thêm vào giỏ hàng
    cart.push({
      image: [product.image],
      id: product.id,
      title: product.name,
      price: product.price,
      quantity: 1,
    });
  }

  // Lưu giỏ hàng mới vào localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Gọi hàm cập nhật hiển thị giỏ hàng (nếu cần)
  updateCartDisplay();
}
