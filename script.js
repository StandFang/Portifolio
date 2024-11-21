document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const text = button.nextElementSibling;
        if (text.style.display === 'block') {
            text.style.display = 'none';
        } else {
            text.style.display = 'block';
        }
    });
});