document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('faq-search');
    const faqItems = document.querySelectorAll('#faq-list .faq-item');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        
        faqItems.forEach(item => {
            const question = item.querySelector('h4').textContent.toLowerCase();
            const answer = item.querySelector('p').textContent.toLowerCase();
            
            if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Optional: Add functionality to toggle answers on click
    faqItems.forEach(item => {
        item.querySelector('h4').addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});
