// form.js
export default function form() {
  const contato = document.getElementById("contato");

  function handleKeyUp(event) {
    const target = event.target;

    if (!target.checkValidity()) {
      target.classList.add("invalido");
      target.nextElementSibling.innerText = target.validationMessage;
    } else if (target.checkValidity()) {
      target.classList.remove("invalido");
      target.nextElementSibling.innerText = "";
    }
  }
  contato.addEventListener("keyup", handleKeyUp);
}
