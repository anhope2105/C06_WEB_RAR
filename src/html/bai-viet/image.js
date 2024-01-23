$(document).ready(function () {
  $(".btn-img").on("click", handleImage);
  const forms = document.querySelectorAll(".needs-validation");
  let uploadedFile = {
    raw: null,
    name: "",
    size: 0,
    type: "",
    fileExtension: "",
    url: "",
  };

  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  var quill = new Quill("#noiDungBaiViet", {
    modules: {
      toolbar: toolbarOptions,
    },
    theme: "snow",
  });

  let dataBase64 = "";
  let isUploaded = false;

  const handleSave = () => {
    // console.log($("#validationCustom01"));
    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            const formContent = {
              tieuDe: $("#tieuDe").val(),
              moTa: $("#moTa").val(),
              noiDungBaiViet: quill.root.innerHTML,
              base64: dataBase64,
              thuocCM: $("#thuocCM").val(),
              hienThiTrangChu: $("#hienThiTrangChu").prop("checked"),
            };
            console.log("formContent: ", formContent);
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  };

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

  $(".btn-delete").on("click", function () {
    dataBase64 = "";
    console.log("dataBase64: ", dataBase64);
    isUploaded = false;
    updateUI();
  });

  $("#handleSave").on("click", handleSave);

  $("#goBack").on("click", function () {
    Array.from(forms).forEach((form) => {
      form.classList.remove("was-validated");
    });
  });
});
