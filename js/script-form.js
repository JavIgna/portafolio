document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    fetch("https://formspree.io/f/mdorerkj", {
      method: "POST",
      mode: "no-cors", // Cambiar el modo a 'no-cors'
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
  });
