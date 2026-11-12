document.addEventListener("DOMContentLoaded", () => {
  console.log("JARVIS iniciado!");

  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Botão clicado:", button.textContent);
    });
  });
});
