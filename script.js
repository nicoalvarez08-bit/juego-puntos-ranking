// ===== NOMBRE DEL JUGADOR =====
let playerName = localStorage.getItem("playerName") || "";

const playerNameSpan = document.getElementById("playerName");
const playerNameInput = document.getElementById("playerNameInput");
const saveNameBtn = document.getElementById("saveName");

if (playerName) {
  playerNameSpan.textContent = playerName;
  playerNameInput.style.display = "none";
  saveNameBtn.style.display = "none";
} else {
  playerNameSpan.textContent = "---";
}

saveNameBtn.addEventListener("click", () => {
  const name = playerNameInput.value.trim();
  if (name !== "") {
    localStorage.setItem("playerName", name);
    playerName = name;
    playerNameSpan.textContent = name;
    playerNameInput.style.display = "none";
    saveNameBtn.style.display = "none";
  }
});

// ===== PUNTOS =====
let points = localStorage.getItem("points")
  ? parseInt(localStorage.getItem("points"))
  : 0;

const pointsSpan = document.getElementById("points");
const btn = document.getElementById("btn");

pointsSpan.textContent = points;

btn.addEventListener("click", () => {
  points += 10;
  pointsSpan.textContent = points;
  localStorage.setItem("points", points);
});
const changeNameBtn = document.getElementById("changeName");

changeNameBtn.addEventListener("click", () => {
  localStorage.removeItem("playerName");
  location.reload();
});
 