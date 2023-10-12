// galeria de fotos acionamentos
export default function photoGalleryClick() {
    const galeria = document.querySelectorAll('.acionamentos-imgs img');
    const galeriaContainer = document.querySelector('.acionamentos-imgs');

    function trocarImagem(event) {
        const img = event.currentTarget;
        const media = matchMedia('(min-width:100px)').matches; //vê se o min-width é menor que 1000px
        if (media) { // se é menor de 1000px fazer, senão não
            galeriaContainer.prepend(img);
        };
    };

    function eventosGaleria(img) {
        img.addEventListener('click', trocarImagem);
    };

    galeria.forEach(eventosGaleria);

    // Animação menu abrir/fechar mobile
    let nav_ul = document.querySelector('.header-menu');
    function openMenu() {
        nav_ul.classList.add('open');
    };
    function closeMenu() {
        nav_ul.classList.remove('open');
    };
};

