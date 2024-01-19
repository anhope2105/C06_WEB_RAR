const contentRelatedList = [
  {
    name: "Thiết bị đọc thẻ CCCD gắn chíp xác thực vân tay",
    img: "/src/assets/images/test.jpg",
  },
  {
    name: "Thiết bị đọc thẻ CCCD gắn chíp xác thực vân tay",
    img: "/src/assets/images/san-pham-test.png",
  },
  {
    name: "Thiết bị đọc thẻ CCCD gắn chíp xác thực vân tay",
    img: "/src/assets/images/test.jpg",
  },
];

const elListRelated = document.getElementById("list-related");

elListRelated.innerHTML = contentRelatedList
  .map(
    (item) =>
      ` <div class="list__relation-content">
            <span class="title">
                <strong>${item.name}</strong>
            </span>

            <img srcset="${item.img} 2x" alt="" />
        </div>
                <hr />
    `
  )
  .join("");
