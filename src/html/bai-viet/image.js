// $(document).ready(function () {
//   $(".btn-img").on("click", handleImage);

//   const uploadedFile = {
//     raw: null,
//     name: "",
//     size: 0,
//     type: "",
//     fileExtention: "",
//     url: "",
//     isUploaded: false,
//   };

//   function handleImage() {
//     document.getElementById("phwqt_15_img").click();
//   }

//   // Đặt lắng nghe sự kiện change cho phần tử phwqt_15_img
//   $("#phwqt_15_img").on("change", handleFileChange);

//   function handleFileChange(e) {
//     const filesList = e.target.files;
//     console.log("filesList: ", filesList);
//     if (filesList && filesList[0]) {
//       const raw = filesList[0];

//       const fileSize = Math.round((raw.size / 1024 / 1024) * 100) / 100;

//       const fileExtention = raw.name.split(".").pop();

//       const rawFileName = raw.name;
//       console.log("base64", e.target?.result);
//       console.log("rawFileName", rawFileName);
//       const reader = new FileReader();
//       reader.addEventListener(
//         "load",
//         (e) => {
//           const base64 = e.target?.result;
//           // Set file data
//           uploadedFile = {
//             raw,
//             name: rawFileName,
//             size: fileSize,
//             type: raw.type,
//             fileExtention: fileExtention,
//             url: e.target?.result,
//             isUploaded: true,
//           };
//           //   syncValue.value = base64.split(",").pop();
//           //   syncFileName.value = rawFileName;
//           sendDataToParent();
//         },
//         false
//       );
//     }
//   }
// });
$(document).ready(function () {
  $(".btn-img").on("click", handleImage);

  let uploadedFile = {
    raw: null,
    name: "",
    size: 0,
    type: "",
    fileExtension: "",
    url: "",
    isUploaded: false,
  };

  function handleImage() {
    document.getElementById("phwqt_15_img").click();
  }

  // Đặt lắng nghe sự kiện change cho phần tử phwqt_15_img
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
        const base64 = event.target.result;
        // Set file data
        uploadedFile = {
          raw,
          name: rawFileName,
          size: fileSize,
          type: raw.type,
          fileExtension,
          url: base64,
          isUploaded: true,
        };
        // Hiển thị ảnh
        $("#uploadedImage").attr("src", base64).show();

        // Hiển thị tên ảnh
        $("#imageName")
          .text(rawFileName)
          .show();
      });

      // Bắt đầu đọc tệp như là URL dữ liệu
      reader.readAsDataURL(raw);
    }
  }
});
