const forms = document.querySelectorAll(".needs-validation");

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

// $(document).ready(function () {
//   $("table th").css("background", "#FAFAFA");

//   $(document).on("click", ".btn-group", function (event) {
//     var target = $(event.target);
//     console.log(target);
//     if (target.is("button")) {
//       // Toggle the 'border-black' class on the button
//       $(".ti-dots-vertical")
//         .addClass("border-black")
//         .removeClass("border-default");
//     } else {
//       // Remove 'border-black' class and restore 'border-default'
//       $(".ti-dots-vertical")
//         .removeClass("border-black")
//         .addClass("border-default");
//     }
//   });
// });
