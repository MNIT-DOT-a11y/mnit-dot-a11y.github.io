// Function to perform search and update the search results
function performSearch(query) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (query.trim() === '') { // If query is empty, hide results and return
        resultsContainer.style.display = 'none';
        return;
    }

    // Filter items based on the search query
    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    // Display the filtered items
    if (filteredItems.length > 0) {
        filteredItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            resultsContainer.appendChild(listItem);
        });
        resultsContainer.style.display = 'block'; // Show results
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'No results found';
        resultsContainer.appendChild(listItem);
        resultsContainer.style.display = 'block'; // Show "No results" message
    }
}

// Add event listener to the search box
document.getElementById('searchBox').addEventListener('input', (event) => {
    performSearch(event.target.value);
});

// Hide search results when clicking outside
document.addEventListener('click', (event) => {
    const searchContainer = document.querySelector('.search-container');
    // Check if the click was outside the search container
    if (searchContainer && !searchContainer.contains(event.target)) {
        document.getElementById('searchResults').style.display = 'none';
    }
});
