
/* Bottone di ricerca */
const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
        searchInput.focus();
    } else {
        searchInput.value = '';
    }
});

// Rimuove lo spostamento degli elementi al clic
document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', e => {
        e.stopPropagation(); // Evita che i menu impattino sugli altri
    });
});

