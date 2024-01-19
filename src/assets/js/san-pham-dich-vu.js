const listProducts = [
  {
    price: "2000000",
    name: "Thiết bị đọc QR Code trên CCCD NEWLAND RARQR01",
    img: "/src/assets/images/san-pham-test.png",
  },
  {
    price: "2000000",
    name: "Thiết bị đọc QR Code trên CCCD NEWLAND RARQR01",
    img: "/src/assets/images/san-pham-test.png",
  },
  {
    price: "2000000",
    name: "Thiết bị đọc QR Code trên CCCD NEWLAND RARQR01",
    img: "/src/assets/images/san-pham-test.png",
  },
  {
    price: "2000000",
    name: "Thiết bị đọc QR Code trên CCCD NEWLAND RARQR01",
    img: "/src/assets/images/san-pham-test.png",
  },
  {
    price: "2000000",
    name: "Thiết bị đọc QR Code trên CCCD NEWLAND RARQR01",
    img: "https://nads.1cdn.vn/2023/04/05/W_25-anh-em.jpg",
  },
  {
    price: "2000000",
    name: "Thiết bị đọc QR Code trên CCCD NEWLAND RARQR01 ",
    img: "/src/assets/images/san-pham-test.png",
  },
  {
    price: "2000000",
    name: "Thiết bị đọc QR Code trên CCCD NEWLAND RARQR01",
    img: "/src/assets/images/san-pham-test.png",
  },
];

const elProductList = document.getElementsByClassName(
  "product__list-content"
)[0];

elProductList.innerHTML = listProducts
  .map(
    (product) =>
      `
  <div class="product__list-box">
  <div class="product__list-img">
  <img srcset="${product.img} 2x"  />
  </div>
  <div class="product__list-price">
    <span>Giá bán: <strong>${Number(product.price).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    })}</strong></span>
  </div>
  <div class="product__list-name">
  <span title="${product.name}">
  ${
    product.name && product.name.length > 50
      ? product.name.substring(0, 50) + "..."
      : product.name
  }
  </span>
</div>
  </div>
  `
  )
  .join("");
