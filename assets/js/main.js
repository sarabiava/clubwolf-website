// Inizializzazione animazioni AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        disable: 'mobile' // Opzionale: disabilita su mobile se vuoi massime prestazioni
    });

    console.log("The Pop Show - Sito caricato correttamente!");
});

// Esempio: Gestione semplice di un menu mobile (se deciderai di aggiungerlo)
const subscribeBtn = document.querySelector('button');
subscribeBtn.addEventListener('click', () => {
    // Logica futura per iscrizione
});


const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const spans = menuBtn.querySelectorAll('span');

menuBtn.addEventListener('click', () => {
    // Apri/Chiudi il menu
    mobileMenu.classList.toggle('translate-x-full');

    // Animazione icone (trasforma le 3 linee in una X)
    spans[0].classList.toggle('rotate-45');
    spans[0].classList.toggle('translate-y-2.5');
    spans[1].classList.toggle('opacity-0');
    spans[2].classList.toggle('-rotate-45');
    spans[2].classList.toggle('-translate-y-2.5');
});

// Chiudi il menu se clicchi su un link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        // Reset icone
    });
});