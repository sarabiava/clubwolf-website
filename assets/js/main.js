document.addEventListener('DOMContentLoaded', () => {
    console.log("Script collegato!"); // Se vedi questo nella console del browser, il file è ok

    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const spans = menuBtn.querySelectorAll('span');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            console.log("Menu cliccato");

            // Toggle del menu (lo fa scivolare dentro/fuori)
            mobileMenu.classList.toggle('translate-x-full');

            // Animazione delle tre linee in una X
            spans[0].classList.toggle('rotate-45');
            spans[0].classList.toggle('translate-y-2.5');
            spans[1].classList.toggle('opacity-0');
            spans[2].classList.toggle('-rotate-45');
            spans[2].classList.toggle('-translate-y-2.5');
        });
    } else {
        console.error("Errore: Elementi del menu non trovati nel DOM");
    }
});