let botones = document.getElementsByTagName("button");
for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", activar);
}

function activar() {
  for (let i = 0; i < botones.length; i++) {
    if (botones[i].id != "menu") {
      if (botones[i].id == this.id) {
        botones[i].ariaSelected = true;
        
      } else {
        botones[i].ariaSelected = false;
      }
    }
  }
}
