// swiper start--------------------------------------------------------

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const listFeedback = [
  {
    des: "Ứng dụng sinh trắc học, xác thực CCCD gắn chíp, kết nối với Cơ sở dữ liệu Quốc gia về dân cư giúp đảm bảo định danh, xác thực thông tin người bệnh chính xác",
    author: "Ms. Thanh Tâm",
    company: "Công ty cổ phần dịch vụ EPAY",
    img: "/src/assets/images/image-card.png",
    logo: "/src/assets/images/logo-epay.png",
    title: "Đăng ký khám chữa bệnh tự động",
  },
  {
    des: "Ứng dụng sinh trắc học, xác thực CCCD gắn chíp, kết nối với Cơ sở dữ liệu Quốc gia về dân cư giúp đảm bảo định danh, xác thực thông tin người bệnh chính xác",
    author: "Ms. Thanh Tâm",
    company: "Talent Acquisition Lead | DEK technologies Vietnam",
    img: "/src/assets/images/Review2.png",
    logo: "/src/assets/images/logo-epay.png",
    title: "Đăng ký khám chữa bệnh tự động",
  },
  {
    des: "Ứng dụng sinh trắc học, xác thực CCCD gắn chíp, kết nối với Cơ sở dữ liệu Quốc gia về dân cư giúp đảm bảo định danh, xác thực thông tin người bệnh chính xác",
    author: "Ms. Thanh Tâm",
    company: "Talent Acquisition Lead | DEK technologies Vietnam",
    img: "/src/assets/images/test.jpg",
    logo: "",
    title: "Đăng ký khám chữa bệnh tự động",
  },
  {
    des: "Ứng dụng sinh trắc học, xác thực CCCD gắn chíp, kết nối với Cơ sở dữ liệu Quốc gia về dân cư giúp đảm bảo định danh, xác thực thông tin người bệnh chính xác",
    author: "Ms. Thanh Tâm",
    company: "Talent Acquisition Lead | DEK technologies Vietnam",
    img: "/src/assets/images/image-card.png",
    logo: "/src/assets/images/logo-epay.png",
    title: "Đăng ký khám chữa bệnh tự động",
  },
  {
    des: "Ứng dụng sinh trắc học, xác thực CCCD gắn chíp, kết nối với Cơ sở dữ liệu Quốc gia về dân cư giúp đảm bảo định danh, xác thực thông tin người bệnh chính xác",
    author: "Ms. Thanh Tâm",
    company: "Talent Acquisition Lead | DEK technologies Vietnam",
    img: "/src/assets/images/image-card.png",
    logo: "/src/assets/images/logo-epay.png",
    title: "Đăng ký khám chữa bệnh tự động",
  },
  {
    des: "Ứng dụng sinh trắc học, xác thực CCCD gắn chíp, kết nối với Cơ sở dữ liệu Quốc gia về dân cư giúp đảm bảo định danh, xác thực thông tin người bệnh chính xác",
    author: "Ms. Thanh Tâm",
    company: "Công ty cổ phần dịch vụ EPAY",
    img: "/src/assets/images/image-card.png",
    logo: "/src/assets/images/logo-epay.png",
    title: "Đăng ký khám chữa bệnh tự động",
  },
  {
    des: "Ứng dụng sinh trắc học, xác thực CCCD gắn chíp, kết nối với Cơ sở dữ liệu Quốc gia về dân cư giúp đảm bảo định danh, xác thực thông tin người bệnh chính xác",
    author: "Ms. Thanh Tâm",
    company: "Công ty cổ phần dịch vụ EPAY",
    img: "/src/assets/images/image-card.png",
    logo: "/src/assets/images/logo-epay.png",
    title: "Đăng ký khám chữa bệnh tự động",
  },
  {
    des: "Ứng dụng sinh trắc học, xác thực CCCD gắn chíp, kết nối với Cơ sở dữ liệu Quốc gia về dân cư giúp đảm bảo định danh, xác thực thông tin người bệnh chính xác",
    author: "Ms. Thanh Tâm",
    company: "Công ty cổ phần dịch vụ EPAY",
    img: "/src/assets/images/image-card.png",
    logo: "/src/assets/images/logo-epay.png",
    title: "Đăng ký khám chữa bệnh tự động",
  },
  {
    des: "Ứng dụng sinh trắc học, xác thực CCCD gắn chíp, kết nối với Cơ sở dữ liệu Quốc gia về dân cư giúp đảm bảo định danh, xác thực thông tin người bệnh chính xác",
    author: "Ms. Thanh Tâm",
    company: "Công ty cổ phần dịch vụ EPAY",
    img: "/src/assets/images/image-card.png",
    logo: "/src/assets/images/logo-epay.png",
    title: "Đăng ký khám chữa bệnh tự động",
  },
  {
    des: "Ứng dụng sinh trắc học, xác thực CCCD gắn chíp, kết nối với Cơ sở dữ liệu Quốc gia về dân cư giúp đảm bảo định danh, xác thực thông tin người bệnh chính xác",
    author: "Ms. Thanh Tâm",
    company: "Công ty cổ phần dịch vụ EPAY",
    img: "/src/assets/images/image-card.png",
    logo: "/src/assets/images/logo-epay.png",
    title: "Đăng ký khám chữa bệnh tự động",
  },
  {
    des: "Ứng dụng sinh trắc học, xác thực CCCD gắn chíp, kết nối với Cơ sở dữ liệu Quốc gia về dân cư giúp đảm bảo định danh, xác thực thông tin người bệnh chính xác",
    author: "Ms. Thanh Tâm",
    company: "Công ty cổ phần dịch vụ EPAY",
    img: "/src/assets/images/image-card.png",
    logo: "/src/assets/images/logo-epay.png",
    title: "Đăng ký khám chữa bệnh tự động",
  },
  {
    des: "Ứng dụng sinh trắc học, xác thực CCCD gắn chíp, kết nối với Cơ sở dữ liệu Quốc gia về dân cư giúp đảm bảo định danh, xác thực thông tin người bệnh chính xác",
    author: "Ms. Thanh Tâm",
    company: "Công ty cổ phần dịch vụ EPAY",
    img: "/src/assets/images/image-card.png",
    logo: "/src/assets/images/logo-epay.png",
    title: "Đăng ký khám chữa bệnh tự động",
  },
  {
    des: "Ứng dụng sinh trắc học, xác thực CCCD gắn chíp, kết nối với Cơ sở dữ liệu Quốc gia về dân cư giúp đảm bảo định danh, xác thực thông tin người bệnh chính xác",
    author: "Ms. Thanh Tâm",
    company: "Công ty cổ phần dịch vụ EPAY",
    img: "/src/assets/images/image-card.png",
    logo: "/src/assets/images/logo-epay.png",
    title: "Đăng ký khám chữa bệnh tự động",
  },
];

const elWripers = document.getElementsByClassName("swiper-wrapper")[0];
console.log(elWripers);
elWripers.innerHTML = listFeedback
  .map(
    (item) => `
    <div class="swiper-slide" >
      <div class="card-app">
      <div class="card-app__img">
      <img srcset="${item.img} 2x" />
      </div>
      <div class="card-app__content">
        <div class="card-app__content__title">
        <span>
            ${item.title}
        </span>
        </div>
        <div class="card-app__content__des">
            <span>
            ${item.des}
            </span>
        </div>
        <div class="card-app__content__footer">
            <div class="content-footer__company">
            <span>
               Hợp tác phát triển với: ${item.company}
            </span>
            </div>
            <div class="footer-right">
            <div class="content-footer__company">
            <img srcset="${item.logo} 2x" />
            </div>
            <div class="content-footer__btn">
            <button>A</button>
            </div>
            </div>
        </div>
      </div>
      </div>
    </div>
    `
  )
  .join(" ");

// swiper end -------------------------------------------

// dropdown menu navbar ---------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  // make it as accordion for smaller screens
  if (window.innerWidth > 992) {
    document
      .querySelectorAll(".navbar .nav-item")
      .forEach(function (everyitem) {
        everyitem.addEventListener("mouseover", function (e) {
          let el_link = this.querySelector("a[data-bs-toggle]");

          if (el_link != null) {
            let nextEl = el_link.nextElementSibling;
            el_link.classList.add("show");
            nextEl.classList.add("show");
          }
        });
        everyitem.addEventListener("mouseleave", function (e) {
          let el_link = this.querySelector("a[data-bs-toggle]");

          if (el_link != null) {
            let nextEl = el_link.nextElementSibling;
            el_link.classList.remove("show");
            nextEl.classList.remove("show");
          }
        });
      });
  }
  // end if innerWidth
});

// dropdown menu navbar end ------------------------------------------

// section intro -------------------------------------------------

const listLogoSectionIntro = [
  {
    img: "/src/assets/images/logo-epay.png",
  },
  {
    img: "/src/assets/images/logo-cokyvina.png",
  },
  {
    img: "/src/assets/images/logo-fpt.png",
  },
  {
    img: "/src/assets/images/logo-gmobile.png",
  },
  {
    img: "/src/assets/images/logo-gtel.png",
  },
  {
    img: "/src/assets/images/logo-cokyvina.png",
  },
  {
    img: "/src/assets/images/logo-epay.png",
  },
  {
    img: "/src/assets/images/logo-epay.png",
  },
  {
    img: "/src/assets/images/logo-epay.png",
  },
];

const introContentLogo = document.getElementsByClassName(
  "categories-intro__content--logo"
)[0];

introContentLogo.innerHTML = listLogoSectionIntro
  .map(
    (logo) =>
      `
  <div class="intro-logo">
          <img srcset="${logo.img} 2x" />
  </div>
  
  `
  )
  .join("");

// section solution --------------------

const listSolution = [
  {
    des: "ETC cùng EPAY là đơn vị đã ký kết với C06 về việc được phép sử dụng cơ sở dữ liệu quốc gia",
    logo: "/src/assets/images/logo-epay.png",
    img: "/src/assets/images/logo-vneidpng.png",
    title: "Thanh toán hóa đơn trên VNeID",
  },
  {
    des: "ETC cùng EPAY là đơn vị đã ký kết với C06 về việc được phép sử dụng cơ sở dữ liệu quốc gia về dân cư trong quá trình xác thực thông tin. EPAY đã triển khai giải pháp tích hợp thanh toán trên ứng dụng VNeID. ETC cùng EPAY là đơn vị đã ký kết với C06 về việc được phép sử dụng cơ sở dữ liệu quốc gia về dân cư trong quá trình xác thực thông tin. EPAY đã triển khai giải pháp tích hợp thanh toán trên ứng dụng VNeID.",
    logo: "/src/assets/images/logo-epay.png",
    img: "/src/assets/images/logo-vneidpng.png",
    title: "Thanh toán hóa đơn trên VNeID",
  },
  {
    des: "ETC cùng EPAY là đơn vị đã ký kết với C06 về việc được phép sử dụng cơ sở dữ liệu quốc gia về dân cư trong quá trình xác thực thông tin. EPAY đã triển khai giải pháp tích hợp thanh toán trên ứng dụng VNeID.",
    logo: "/src/assets/images/logo-epay.png",
    img: "/src/assets/images/logo-vneidpng.png",
    title: "Thanh toán hóa đơn trên VNeID",
  },
  {
    des: "ETC cùng EPAY là đơn vị đã ký kết với C06 về việc được phép sử dụng cơ sở dữ liệu quốc gia về dân cư trong quá trình xác thực thông tin. EPAY đã triển khai giải pháp tích hợp thanh toán trên ứng dụng VNeID.",
    logo: "/src/assets/images/logo-epay.png",
    img: "/src/assets/images/logo-vneidpng.png",
    title: "Thanh toán hóa đơn trên VNeID",
  },
  {
    des: "ETC cùng EPAY là đơn vị đã ký kết với C06 về việc được phép sử dụng cơ sở dữ liệu quốc gia về dân cư trong quá trình xác thực thông tin. EPAY đã triển khai giải pháp tích hợp thanh toán trên ứng dụng VNeID.",
    logo: "/src/assets/images/logo-epay.png",
    img: "/src/assets/images/logo-vneidpng.png",
    title: "Thanh toán hóa đơn trên VNeID",
  },
];

var swiperSolution = new Swiper(".swiper-solution", {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 2,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const elSwiperSolution = document.getElementsByClassName("solution-wraper")[0];

elSwiperSolution.innerHTML = listSolution
  .map(
    (solution) =>
      `
  <div class="swiper-slide" >
          <div class="solution-box">
          <div class="solution-box__img">
            <div class="box-img">
            <img  srcset="${solution.img} 2x" />
            <img srcset="${solution.logo} 2x" />
            </div>
          </div>
        <div class="solution-box__content">
          <span class="solution-box__content--title" >${solution.title}</span>
          <span title="${solution.des}">
          ${
            solution.des && solution.des.length > 200
              ? solution.des.substring(0, 200) + "..."
              : solution.des
          }
          </span>
        </div>
      
      </div>
    </div>
  `
  )
  .join("");

// swiper section schema ----------------------------------------------------

const listContentSchemas = [
  {
    content:
      "Phục vụ giải quyết thủ tục hành chính và cung cấp dịch vụ công trực tuyến",
  },
  {
    content:
      "Phục vụ giải quyết thủ tục hành chính và cung cấp dịch vụ công trực tuyến",
  },
  {
    content:
      "Phục vụ giải quyết thủ tục hành chính và cung cấp dịch vụ công trực tuyến",
  },
  {
    content:
      "Phục vụ giải quyết thủ tục hành chính và cung cấp dịch vụ công trực tuyến",
  },
  {
    content:
      "Phục vụ giải quyết thủ tục hành chính và cung cấp dịch vụ công trực tuyến",
  },
];

var swiperSolution = new Swiper(".swiper-scheme", {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 1,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const elSwiperSchemas = document.getElementsByClassName("scheme-wraper")[0];

elSwiperSchemas.innerHTML = listContentSchemas
  .map(
    (schema) =>
      `
  <div class="swiper-slide" >
  <div class="schema-box">
  <span class="schema-box__title">${schema.content}</span>
  </div>
  </div>
  `
  )
  .join("");

// swiper section product ----------------------------------------

const listProduct = [
  {
    id: 1,
    img: "/src/assets/images/san-pham-test.png",
    price: "2.000.000",
    des: "Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01 Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01 Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01 Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01",
  },
  {
    img: "/src/assets/images/san-pham-test.png",
    price: "2.000.000",
    des: "Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01",
  },
  {
    img: "/src/assets/images/san-pham-test.png",
    price: "2.000.000",
    des: "Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01",
  },
  {
    img: "/src/assets/images/san-pham-test.png",
    price: "2.000.000",
    des: "Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01",
  },
  {
    img: "/src/assets/images/san-pham-test.png",
    price: "2.000.000",
    des: "Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01",
  },
  {
    img: "/src/assets/images/san-pham-test.png",
    price: "2.000.000",
    des: "Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01",
  },
  {
    img: "/src/assets/images/san-pham-test.png",
    price: "2.000.000",
    des: "Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01",
  },
  {
    img: "/src/assets/images/san-pham-test.png",
    price: "2.000.000",
    des: "Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01",
  },
  {
    img: "/src/assets/images/san-pham-test.png",
    price: "2.000.000",
    des: "Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01",
  },
  {
    img: "/src/assets/images/san-pham-test.png",
    price: "2.000.000",
    des: "Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01 Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01",
  },
  {
    img: "/src/assets/images/san-pham-test.png",
    price: "2.000.000",
    des: "Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01 Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01",
  },
  {
    img: "/src/assets/images/san-pham-test.png",
    price: "2.000.000",
    des: "Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01 Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01",
  },
  {
    img: "/src/assets/images/san-pham-test.png",
    price: "2.000.000",
    des: "Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01 Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01",
  },
  {
    img: "/src/assets/images/san-pham-test.png",
    price: "2.000.000",
    des: "Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01 Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01",
  },
  {
    img: "/src/assets/images/san-pham-test.png",
    price: "2.000.000",
    des: "Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01 Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01",
  },
  {
    img: "/src/assets/images/san-pham-test.png",
    price: "2.000.000",
    des: "Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01 Thiết bị đọc QR code trên CCCD NEWLAND RẢQR01",
  },
];

const elSwiperProduct = document.getElementsByClassName("product-wraper")[0];

var swiperSolution = new Swiper(".swiper-product", {
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 2,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

elSwiperProduct.innerHTML = listProduct
  .map(
    (product) =>
      `
  <div class="swiper-slide" >
  <a class="product-box" href="product.html?id=${product.id}">
  <div class="produc-box__img">
  <img srcset="${product.img} 2x"  />
  </div>
  <div class="product-box__price">
    <span>Giá bán: <strong>${product.price}</strong></span>
  </div>
  <div class="produc-box__des">
  <span title="${product.des}">
  ${
    product.des && product.des.length > 50
      ? product.des.substring(0, 50) + "..."
      : product.des
  }
  </span>
</div>
  </a>
  </div>
  `
  )
  .join("");

// swiper section unit ----------------------------------------

const listUnits = [
  {
    logo: "/src/assets/images/logo-epay.png",
  },
  {
    logo: "/src/assets/images/logo-cokyvina.png",
  },
  {
    logo: "/src/assets/images/logo-fpt.png",
  },
  {
    logo: "/src/assets/images/logo-gmobile.png",
  },
  {
    logo: "/src/assets/images/logo-epay.png",
  },
  {
    logo: "/src/assets/images/logo-epay.png",
  },
  {
    logo: "/src/assets/images/logo-epay.png",
  },
  {
    logo: "/src/assets/images/logo-epay.png",
  },
  {
    logo: "/src/assets/images/logo-epay.png",
  },
];

const elSwiperUnit = document.getElementsByClassName("unit-wraper")[0];

var swiperUnit = new Swiper(".swiper-unit", {
  slidesPerView: 7,
  spaceBetween: 0,
  slidesPerGroup: 3,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

elSwiperUnit.innerHTML = listUnits
  .map(
    (unit) =>
      `
  <div class="swiper-slide" >
  <div class="unit-box">
    <img srcset="${unit.logo} 2x" />
  </div>
  </div>
  `
  )
  .join("");

const listLogoWebsite = [
  {
    logo: "/src/assets/images/logo-BCA.png",
  },
  {
    logo: "/src/assets/images/logo-chinh-phu.png",
  },
  {
    logo: "/src/assets/images/logo-BCA.png",
  },
  {
    logo: "/src/assets/images/logo-chinh-phu.png",
  },
  {
    logo: "/src/assets/images/logo-BCA.png",
  },
  {
    logo: "/src/assets/images/logo-chinh-phu.png",
  },
  {
    logo: "/src/assets/images/logo-BCA.png",
  },
  {
    logo: "/src/assets/images/logo-chinh-phu.png",
  },
  {
    logo: "/src/assets/images/logo-BCA.png",
  },
  {
    logo: "/src/assets/images/logo-chinh-phu.png",
  },
  {
    logo: "/src/assets/images/logo-BCA.png",
  },
  {
    logo: "/src/assets/images/logo-chinh-phu.png",
  },
];

var swiperUnitWebsite = new Swiper(".swiper-unit__website", {
  slidesPerView: 5,
  spaceBetween: 20,
  slidesPerGroup: 1,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const elSwiperUnitWebsite = document.getElementsByClassName(
  "unit-wraper__website"
)[0];

elSwiperUnitWebsite.innerHTML = listLogoWebsite
  .map(
    (item) =>
      `
  <div class="swiper-slide" >
  <div class="unit-box__website">
    <img srcset="${item.logo} 2x" />
  </div>
  </div>
  `
  )
  .join("");

/* ------ watch ----------------------- */

function createWatcher(obj, prop, callback) {
  let value = obj[prop];

  Object.defineProperty(obj, prop, {
    get: function () {
      return value;
    },
    set: function (newValue) {
      if (newValue !== value) {
        value = newValue;
        callback(newValue);
      }
    },
  });
}
