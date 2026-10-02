document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuCards = document.querySelectorAll('.menu-item-card');
    const emptyState = document.querySelector('.empty-state');

    function applyMenuFilter(selectedFilter = 'all') {
        let visibleCount = 0;

        menuCards.forEach((card) => {
            const category = card.dataset.category;
            const matches = selectedFilter === 'all' || category === selectedFilter;

            card.classList.toggle('hidden-card', !matches);
            if (matches) visibleCount += 1;
        });

        if (emptyState) {
            emptyState.classList.toggle('visible', visibleCount === 0);
        }
    }

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const selectedFilter = button.dataset.filter;
            filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
            applyMenuFilter(selectedFilter);
        });
    });

    applyMenuFilter();
});
