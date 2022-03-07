let botones = document.getElementsByTagName("button");
for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", activar);
}

function activar() {
  for (let i = 0; i < botones.length; i++) {
    if (botones[i].id != "menu" && botones[i].id != "enviar") {
      if (botones[i].id == this.id) {
        this.setAttribute("class", "nav-link border-0 link-activo");
      } else {
        botones[i].setAttribute("class", "nav-link border-0");
      }
    }
  }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();