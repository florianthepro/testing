👉 [web](https://florianthepro.github.io/testing/)

---

<div id="reverse-me">

Zeile 1  
Zeile 2  
Zeile 3  
Zeile 4  

</div>

<script src="reverse.js"></script>



---
---v
<div id="reverse-me">

Zeile 1
Zeile 2
Zeile 3
Zeile 4

</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reverse-me');
  if (!container) return;
  // Text auslesen, in Zeilen splitten, leere Zeilen raus, Reihenfolge umdrehen, zurückschreiben
  const lines = container.textContent
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(l => l.length > 0)
    .reverse();
  container.innerHTML = lines.join('<br>');
});
</script>
