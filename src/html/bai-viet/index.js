const forms = document.querySelectorAll(".needs-validation");

const formContent = {
  tieuDe: "",
  moTa: "",
  noiDungBaiViet: "",
};

// Loop over them and prevent submission
Array.from(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
});

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

const goToBack = (id) => {
  $("#home").removeClass("hidden");
  $(id).addClass("hidden");
};

const handleSave = () => {
  // console.log($("#validationCustom01"));
  const formContent = {
    tieuDe: $("#tieuDe").val(),
    moTa: $("#moTa").val(),
    noiDungBaiViet: quill.getContents(),
  };
  console.log("formContent: ", formContent);
};
