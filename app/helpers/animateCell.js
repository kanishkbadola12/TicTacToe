export default function animateCell(id) {
    const cell = document.getElementById(id);

    cell.classList.add('beat');
    cell.classList.add('disable');

    cell.addEventListener('animationend', () => {
        cell.classList.remove('beat');
    });
}