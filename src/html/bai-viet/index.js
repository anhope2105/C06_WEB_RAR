const goToBack = (id) => {
  $(id).addClass("hidden");
  $(id).removeClass("unHidden");
  $("#home").removeClass("hidden");
};

const listChuyenMuc = [
  {
    value: 1,
    lable: "ABC",
  },
  {
    value: 2,
    lable: "QWE",
  },
];

document.getElementById("chuyenMuc").innerHTML = `
 <option value="" disabled selected>Chọn</option>
 ${listChuyenMuc.map(
   (item) => `<option value="${item.value}">${item.lable}</option>`
 )}
 
`;

document.getElementById("thuocCM").innerHTML = `
 <option value="" disabled selected>Chọn</option>
 ${listChuyenMuc.map(
   (item) => `<option value="${item.value}">${item.lable}</option>`
 )}
 
`;

const handlerSearch = () => {
  console.log("handlerSearch: ");
  const params = {
    chuyenMuc: $("#chuyenMuc").val(),
    tenBaiViet: $("#tenBaiViet").val(),
  };

  console.log(params);
};
