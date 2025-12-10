👉 [web](https://florianthepro.github.io/testing/)

---

<div id="reverse-me">

Zeile 1  
Zeile 2  
Zeile 3  
Zeile 4  

</div>

<script src="reverse.js"></script>


# testing

<div id="reverse-me">
<p>Zeile 1</p>
<p>Zeile 2</p>
<p>Zeile 3</p>
<p>Zeile 4</p>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reverse-me');
  if (!container) return;
  const lines = Array.from(container.querySelectorAll('p'))
    .map(p => p.textContent.trim())
    .reverse();
  container.innerHTML = lines.map(l => `<p>${l}</p>`).join('');
});
</script>
