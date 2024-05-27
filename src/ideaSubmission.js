document.getElementById('category').addEventListener('change', function() {
    const subCategoryGroup = document.getElementById('subCategoryGroup');
    if (this.value === 'Other') {
        subCategoryGroup.style.display = 'block';
    } else {
        subCategoryGroup.style.display = 'none';
    }
});

document.getElementById('ideaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const idea = document.getElementById('idea').value;
    const category = document.getElementById('category').value;
    let subCategory = '';

    if (category === 'Other') {
        subCategory = document.getElementById('subCategory').value;
    }

    const data = { idea, category };
    if (subCategory) {
        data.subCategory = subCategory;
    }

    fetch('http://china-extra.gl.at.ply.gg:55053/add-idea', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        }
        throw new Error('Network response was not ok');
    })
    .then(data => {
        alert('Idea submitted successfully');
        document.getElementById('ideaForm').reset();
        document.getElementById('subCategoryGroup').style.display = 'none';
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to submit idea');
    });
});

document.getElementById('getIdeaBtn').addEventListener('click', function() {
    const category = document.getElementById('category').value;

    fetch('http://china-extra.gl.at.ply.gg:55053/get-idea', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category }),
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        }
        throw new Error('Network response was not ok');
    })
    .then(idea => {
        document.getElementById('ideaDisplay').innerText = idea;
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to fetch idea');
    });
});