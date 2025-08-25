const textarea = document.getElementById('textarea');
const count = document.getElementById('count');
textarea.addEventListener('input', () => {
    count.textContent = textarea.value.length;
});