const footer = document.createElement("footer");

const redirectMenu = () => {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", `/src/html/trang-chu/footer.html`, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Thêm nội dung của header vào placeholder
      footer.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
};
redirectMenu();
document.body.appendChild(footer);
