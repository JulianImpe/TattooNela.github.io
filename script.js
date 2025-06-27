
const darkToggleBtn = document.getElementById('dark-toggle-btn');
darkToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Swiper para "Mis diseños" (siempre visible)
const swiperDesigns = new Swiper('.my-desings .swiper', {
    slidesPerView: 1, // Por defecto, 1 slide en mobile
    spaceBetween: 20,
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.my-desings .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.my-desings .swiper-button-next',
        prevEl: '.my-desings .swiper-button-prev',
    },
    breakpoints: {
        768: { // A partir de 768px de ancho
            slidesPerView: 3 // 3 slides en desktop
        }
    }
});
// Swiper para reseñas SOLO en mobile
const swiperReseñas = new Swiper('.reseñas-swiper .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.reseñas-swiper .swiper-pagination',
        clickable: true,
    },
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 3 // 3 reseñas visibles en desktop
        }
    },
    breakpoints: {
        500: {
            slidesPerView: 2 //
        }
    }
});

// Swiper para estilos SOLO en mobile
const swiperEstilos = new Swiper('.mis-estilos .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.mis-estilos .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    breakpoints: {
    },
    breakpoints: {
        500: {
            slidesPerView: 2
        },
        768:{
            slidesPerView: 3
        },
        1024:{
            slidesPerView: 4
        }

    }
});


const hamburgerBtn = document.getElementById('hamburger-btn');

const mainNavMobile = document.getElementById('main-nav-mobile');
// Menú hamburguesa (mobile y colapsado)
hamburgerBtn.addEventListener('click', () => {
    mainNavMobile.classList.toggle('show');
});






// Mostrar hamburguesa al hacer scroll en escritorio
window.addEventListener('scroll', () => {
    if (window.scrollY > 80 && window.innerWidth > 768) {
        header.classList.add('collapsed');
    } else {
        header.classList.remove('collapsed');
        mainNav.classList.remove('show'); // Oculta el menú si estaba abierto
    }
});



// Animación fade-in al hacer scroll
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.2 // Ajusta el porcentaje visible para disparar la animación
});

fadeEls.forEach(el => observer.observe(el));

document.getElementById('reservarTurno').addEventListener('click', function (e) {
    e.preventDefault();
    const numeroWpp = '5491144278014';
    const mensaje = `¡Hola! Quiero tatuarme ¿Me darías más información?`;
    window.open(`https://wa.me/${numeroWpp}?text=${encodeURIComponent(mensaje)}`, '_blank');
})

document.getElementById('reservarTurnoHeader').addEventListener('click', function (e) {
    e.preventDefault();
    const numeroWpp2 = '5491144278014';
    const mensaje2 = `¡Hola! Quiero tatuarme ¿Me darías más información?`;
    window.open(`https://wa.me/${numeroWpp2}?text=${encodeURIComponent(mensaje2)}`, '_blank');
})

document.getElementById('cupon-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{2,40}$/.test(nombre)) {
        alert('Por favor, ingresa un nombre válido (solo letras y espacios, mínimo 2 caracteres).');
        return;
    }


    const numeroWpp = '5491144278014';
    const mensaje = `¡Hola! Soy ${nombre} y te envío la captura de que te sigo en Instagram para reclamar mi cupón de descuento.`;

    Swal.fire({
        title: '¡Perfecto!',
        text: 'Ahora se abrirá WhatsApp. Adjuntá la captura en el chat para recibir tu cupón.',
        icon: 'success',
        confirmButtonText: 'Entendido',
        background: '#fff',
        color: '#000',
        customClass: {
            popup: 'swal2-cupon-popup',
            title: 'swal2-cupon-title',
            confirmButton: 'swal2-cupon-btn'
        }
    });
    window.open(`https://wa.me/${numeroWpp}?text=${encodeURIComponent(mensaje)}`, '_blank');

    // Deshabilita el botón de enviar y muestra el de reclamar código
    document.getElementById('btn-enviar-foto').disabled = true;
    document.getElementById('btn-enviar-foto').style.opacity = 0.5;
    document.getElementById('btn-reclamar-codigo').style.display = 'inline-block';
});

// Cuando el usuario hace click en "Reclamar código"
document.getElementById('btn-reclamar-codigo').addEventListener('click', function () {
    // Aquí tu hermana puede dar el código manualmente, o mostrarlo en pantalla:
    document.getElementById('codigo-cupon').style.display = 'block';
    this.disabled = true;
    this.style.opacity = 0.5;
});
