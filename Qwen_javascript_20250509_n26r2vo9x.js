// Ajouter un effet de scroll fluide vers les ancres
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Afficher une alerte lors du clic sur "Commencez ici"
document.querySelector('footer a').addEventListener('click', () => {
    alert("Redirection vers TryHackMe !");
});