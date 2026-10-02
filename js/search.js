document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('#menu-search');
    const menuCards = document.querySelectorAll('.menu-item-card');
    const emptyState = document.querySelector('.empty-state');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const overlayInput = document.querySelector('#search-input');

    function getActiveFilter() {
        const activeButton = document.querySelector('.filter-btn.active');
        return activeButton ? activeButton.dataset.filter : 'all';
    }

    function updateSearchResults(query = '') {
        const searchTerm = query.trim().toLowerCase();
        const activeFilter = getActiveFilter();
        let visibleCount = 0;

        menuCards.forEach((card) => {
            const name = card.dataset.name || card.querySelector('h3')?.textContent || '';
            const description = card.dataset.description || card.querySelector('p')?.textContent || '';
            const category = card.dataset.category || '';
            const matchesSearch = !searchTerm || name.toLowerCase().includes(searchTerm) || description.toLowerCase().includes(searchTerm) || category.toLowerCase().includes(searchTerm);
            const matchesFilter = activeFilter === 'all' || category === activeFilter;
            const showCard = matchesSearch && matchesFilter;

            card.classList.toggle('hidden-card', !showCard);
            if (showCard) visibleCount += 1;
        });

        if (emptyState) {
            emptyState.classList.toggle('visible', visibleCount === 0);
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            updateSearchResults(event.target.value);
        });
    }

    if (overlayInput) {
        overlayInput.addEventListener('input', (event) => {
            updateSearchResults(event.target.value);
        });
    }

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const query = searchInput ? searchInput.value : (overlayInput ? overlayInput.value : '');
            updateSearchResults(query);
        });
    });

    updateSearchResults();
});
