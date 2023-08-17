document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Validar los campos antes de enviar el formulario
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");
    let formIsValid = true;

    if (nameInput.value.trim() === "") {
      nameInput.classList.add("is-invalid");
      formIsValid = false;
    } else {
      nameInput.classList.remove("is-invalid");
    }

    if (emailInput.value.trim() === "") {
      emailInput.classList.add("is-invalid");
      formIsValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      emailInput.classList.add("is-invalid");
      emailInput.nextElementSibling.textContent =
        "Correo electrónico invalido.";
      formIsValid = false;
    } else {
      emailInput.classList.remove("is-invalid");
      emailInput.nextElementSibling.textContent = "";
    }

    if (phoneInput.value.trim() === "") {
      phoneInput.classList.add("is-invalid");
      formIsValid = false;
    } else {
      phoneInput.classList.remove("is-invalid");
    }

    if (messageInput.value.trim() === "") {
      messageInput.classList.add("is-invalid");
      formIsValid = false;
    } else {
      messageInput.classList.remove("is-invalid");
    }

    if (!formIsValid) {
      return;
    }

    fetch("https://formspree.io/f/mdorerkj", {
      method: "POST",
      mode: "no-cors",
      body: new FormData(document.getElementById("contactForm")),
    })
      .then(() => {
        document
          .getElementById("submitSuccessMessage")
          .classList.remove("d-none");
      })
      .catch(() => {
        document
          .getElementById("submitErrorMessage")
          .classList.remove("d-none");
      });

    const submitButton = document.getElementById("submitButton");
    submitButton.disabled = true;
  });

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
