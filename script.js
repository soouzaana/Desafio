const listaDeBotoes = document.querySelectorAll(".botao");

listaDeBotoes.forEach((element) => {
  element.addEventListener("click", () => {
    listaDeBotoes.forEach((item) => item.classList.remove("active"));
    element.classList.add("active");
  });
});
