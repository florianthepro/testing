document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reverse-me');
  if (!container) return;
  const lines = container.innerText
    .split(/\n/)
    .map(l => l.trim())
    .filter(l => l.length > 0)
    .reverse();
  container.innerHTML = lines.map(l => `<p>${l}</p>`).join('');
});
