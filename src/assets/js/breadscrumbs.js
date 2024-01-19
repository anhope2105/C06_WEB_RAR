document.addEventListener("DOMContentLoaded", function () {
  function renderBreadcrumbs() {
    var pathArray = window.location.pathname
      .split("/")
      .filter(function (element) {
        return element !== "";
      });

    var breadcrumbs = '<nav aria-label="breadcrumb"><ol class="breadcrumb">';
    for (var i = 0; i < pathArray.length; i++) {
      var breadcrumbLink = "/" + pathArray.slice(0, i + 1).join("/");

      var breadcrumbText =
        pathArray[i].charAt(0).toUpperCase() +
        pathArray[i].slice(1).replace(/-/g, " ");

      breadcrumbs +=
        '<li class="breadcrumb-item"><a href="' +
        breadcrumbLink +
        '">' +
        breadcrumbText +
        "</a></li>";
    }
    breadcrumbs += "</ol></nav>";
    // Chèn breadcrumbs vào div có id là "breadcrumbs"
    document.getElementById("breadcrumbs").innerHTML = breadcrumbs;
  }
  // Gọi hàm để tự động render breadcrumbs khi trang được tải
  renderBreadcrumbs();
});
