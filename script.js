const panels = document.querySelectorAll('.panel');

// Add touch support
panels.forEach(panel => {
    panel.addEventListener('click', activatePanel);
    panel.addEventListener('touchstart', activatePanel);
});

function activatePanel() {
    removeActiveClasses();
    this.classList.add('active');
}

function removeActiveClasses() {
    panels.forEach(panel => panel.classList.remove('active'));
}