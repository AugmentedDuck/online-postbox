document.getElementById('ideaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const idea = document.getElementById('idea').value;
    const category = document.getElementById('category').value;

    fetch('http://china-extra.gl.at.ply.gg:55053/add-idea', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idea, category, authKey }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Idea submitted successfully');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});