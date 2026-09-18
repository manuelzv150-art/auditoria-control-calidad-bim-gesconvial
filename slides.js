const total = 47;
const slide = document.querySelector("#slide");
const counter = document.querySelector("#counter");
let current = Math.min(total, Math.max(1, Number(location.hash.slice(1)) || 1));

function render() {
  const label = String(current).padStart(2, "0");
  slide.src = `slide-${label}.png`;
  slide.alt = `Diapositiva ${current} de ${total}: Auditoría y Control de Calidad BIM`;
  counter.textContent = `${current} / ${total}`;
  history.replaceState(null, "", `#${current}`);
}

function move(delta) {
  current = ((current - 1 + delta + total) % total) + 1;
  render();
}

document.querySelector(".previous").addEventListener("click", () => move(-1));
document.querySelector(".next").addEventListener("click", () => move(1));
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") move(-1);
  if (event.key === "ArrowRight" || event.key === " ") { event.preventDefault(); move(1); }
  if (event.key === "Home") { current = 1; render(); }
  if (event.key === "End") { current = total; render(); }
});
render();
