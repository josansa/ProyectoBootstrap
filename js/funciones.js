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
