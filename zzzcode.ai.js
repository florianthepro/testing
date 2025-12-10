// Fetching the content from the provided URL
fetch('https://raw.githubusercontent.com/florianthepro/testing/refs/heads/main/ziel.md')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        // Process the markdown data as needed
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
