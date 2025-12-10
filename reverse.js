document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("reverse-me");
  if (!container) return;

  // Inhalt in einzelne Zeilen zerlegen
  let lines = container.innerHTML
    .trim()
    .split(/\n/)
    .map(line => line.trim())
    .filter(line => line.length > 0);

  // Reihenfolge umdrehen
  lines.reverse();

  // Mit <br> wieder zusammensetzen
  container.innerHTML = lines.join("<br>");
});
