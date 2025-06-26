// Article templates
const articles = {
    'moonpig': {
        title: "James Wynn and $Moonpig: Old Fashioned Farming Isnt Dead. It Just Evolved.",
        content: `
            <div class="article-header">
                <h1>James Wynn and $Moonpig: Old Fashioned Farming Isnt Dead. It Just Evolved.</h1>
                <p class="article-meta">2 MIN READ</p>
            </div>
            <p>After nuking a billion-dollar BTC position, James Wynn pivoted to full-time $MOONPIG farming — shilling, dumping, and raising his memecoin like it's a prize hog at the county fair, all while still being hilariously down bad.</p>
            <img class="article-image" src="images/moonpig-full.jpg" alt="Astronaut pig with trading chart">
            <p>In the strange, muddy fields of crypto, one man has emerged as the first whale to fully commit to animal-based farming as a lifestyle.</p>
        `
    },
    'your-article-id': {
        title: "Your Article Title",
        content: `
            <div class="article-header">
                <h1>Your Article Title</h1>
                <p class="article-meta">2 MIN READ</p>
            </div>
            <p>Your article content...</p>
            <img class="article-image" src="images/your-image.jpg" alt="Description">
            <p>More content...</p>
        `
    },
    // Add more article templates here
};

// Handle article clicks
document.addEventListener('DOMContentLoaded', function() {
    // Remove loading message and show articles
    const loadingMessage = document.querySelector('.loading');
    if (loadingMessage) {
        loadingMessage.remove();
    }
    
    // Make articles clickable
    document.querySelectorAll('.article-preview').forEach(article => {
        article.addEventListener('click', function() {
            const articleId = this.dataset.articleId;
            showArticle(articleId);
        });
    });
});

// Show article
function showArticle(articleId) {
    // Hide homepage view
    document.getElementById('homepage').classList.remove('active');
    
    // Show article view
    const articleView = document.getElementById('article-view');
    articleView.classList.add('active');
    
    // Get article content
    const articleContent = articles[articleId];
    if (articleContent) {
        document.getElementById('article-content').innerHTML = articleContent.content;
    }
}

// Handle back button
document.querySelector('.go-back')?.addEventListener('click', function() {
    document.getElementById('article-view').classList.remove('active');
    document.getElementById('homepage').classList.add('active');
});

// Update current date
document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// Copy contract address
document.querySelector('.copy-btn').addEventListener('click', () => {
    const address = 'C8Z5ZnYnsmfpreHh5MrdZPMXjUQY5YzzswADP1Vrpump';
    navigator.clipboard.writeText(address);
    alert('Contract address copied!');
}); 