let start;

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function move() {
  const shape = document.getElementById("shape");

  const left = Math.random() * 300;
  const top = Math.random() * 300;
  const wh = Math.random() * 200 + 100;

  shape.style.left = left + "px";
  shape.style.top = top + "px";
  shape.style.width = wh + "px";
  shape.style.height = wh + "px";
  shape.style.backgroundColor = getRandomColor();
  shape.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";

  shape.style.display = "block";
  start = new Date().getTime();
}

document.getElementById("shape").onclick = function () {
  this.style.display = "none";
  const end = new Date().getTime();
  const timeTaken = (end - start) / 1000;
  alert("Your reaction time: " + timeTaken + " seconds");
  setTimeout(move, Math.random() * 2000); // random delay before next shape
};

// Start after a short delay
setTimeout(move, 1000);
