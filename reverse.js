document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reverse-me');
  if (!container) return;
  const lines = Array.from(container.querySelectorAll('p'))
    .map(p => p.textContent.trim())
    .reverse();
  container.innerHTML = lines.map(l => `<p>${l}</p>`).join('');
});
