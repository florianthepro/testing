// Simple script to reverse the order of lines in the document
document.addEventListener('DOMContentLoaded', function() {
  // Get all div elements
  const divs = Array.from(document.querySelectorAll('body > div'));
  
  // Extract text content and reverse the order
  const texts = divs.map(div => div.textContent).reverse();
  
  // Update the divs with reversed content
  divs.forEach((div, index) => {
    div.textContent = texts[index];
  });
});
