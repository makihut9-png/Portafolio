const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    // toggle añade la clase si no está, y la quita si ya existe
    navLinks.classList.toggle('isActive'); 
});