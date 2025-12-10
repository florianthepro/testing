// reverse.js
document.addEventListener("DOMContentLoaded", () => {
  // Hole den reinen Textinhalt des Body (ohne Skripte/Tags)
  const originalText = document.body.textContent || "";
  // Zerlege in Zeilen, trimme, filtere leere Zeilen
  const lines = originalText
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(l => l.length > 0);

  // Drehe die Reihenfolge um
  const reversed = lines.reverse();

  // Schreibe die Zeilen als reinen Text zurück (eine Zeile pro Zeile)
  // textContent vermeidet, dass HTML-Tags oder das Script selbst angezeigt werden
  document.body.textContent = reversed.join("\n");
});
