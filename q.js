// Simple script to reverse the order of lines in the document
document.addEventListener('DOMContentLoaded', function() {
  // Get all div elements containing the lines
  const divs = document.querySelectorAll('div');
  const lines = [];
  
  // Collect all the line texts
  divs.forEach(div => {
    const text = div.textContent.trim();
    if (text.startsWith('Zeile ')) {
      lines.push({element: div, text: text});
    }
  });
  
  // Reverse the order of lines
  lines.reverse();
  
  // Update the DOM with reversed lines
  lines.forEach((lineObj, index) => {
    lineObj.element.textContent = lineObj.text;
  });
});
