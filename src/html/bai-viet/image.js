$(document).ready(function () {
  $(".btn-img").on("click", handleImage);

  let uploadedFile = {
    raw: null,
    name: "",
    size: 0,
    type: "",
    fileExtension: "",
    url: "",
  };

  let dataBase64 = "";
  let isUploaded = false;

  const updateUI = () => {
    if (!isUploaded) {
      $(".btn-img").show();
      $(".btn-delete").hide();
      $("#uploadedImage").attr("src", "/src/assets/images/no-image.png").show();
    }
  };

  updateUI();

  function handleImage() {
    document.getElementById("phwqt_15_img").click();
  }

  $("#phwqt_15_img").on("change", handleFileChange);

  function handleFileChange(e) {
    const filesList = e.target.files;
    if (filesList && filesList[0]) {
      const raw = filesList[0];

      const fileSize = Math.round((raw.size / 1024 / 1024) * 100) / 100;
      const fileExtension = raw.name.split(".").pop();
      const rawFileName = raw.name;

      const reader = new FileReader();

      reader.addEventListener("load", (event) => {
        dataBase64 = event.target.result;
        uploadedFile = {
          raw,
          name: rawFileName,
          size: fileSize,
          type: raw.type,
          fileExtension,
          url: dataBase64,
        };
        // Hiển thị ảnh
        if (dataBase64.length) {
          isUploaded = true;
          $(".btn-img").hide();
          $(".btn-delete").show();
          $("#uploadedImage").attr("src", dataBase64).show();
          $("#imageName").text(rawFileName).show();
        }
      });
      reader.readAsDataURL(raw);
    }
  }

  $.fn.deleteImage = function () {
    dataBase64 = "";
    console.log("dataBase64: ", dataBase64);
    isUploaded = false;
    updateUI();
  };

  $(".btn-delete").on("click", function () {
    dataBase64 = "";
    console.log("dataBase64: ", dataBase64);
    isUploaded = false;
    updateUI();
  });
});
