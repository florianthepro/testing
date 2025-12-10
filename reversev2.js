document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("reverse-me");
  if (!container) return;

  // Split nach <br>
  let lines = container.innerHTML.split(/<br\s*\/?>/i).map(l => l.trim()).filter(l => l);
  lines.reverse();

  container.innerHTML = lines.join("<br>");
});
