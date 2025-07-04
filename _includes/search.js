
// search.js

// 
const items = [
    "Introduction to HTML",
    "Getting Started with CSS",
    "JavaScript Basics",
    "Understanding the DOM",
    "Advanced JavaScript Techniques",
    "Responsive Web Design",
    "CSS Flexbox and Grid",
    "JavaScript Promises and Async/Await"
];

// Function to perform search and update the search results
function performSearch(query) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    // Filter items based on the search query
    if (query) {
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
        } else {
            resultsContainer.innerHTML = '<li>No results found</li>';
        }
    }
}

// Add event listener to the search box
document.getElementById('searchBox').addEventListener('input', (event) => {
    performSearch(event.target.value);
});
