const darkToggleBtn = document.getElementById('dark-toggle-btn');
darkToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});


// Swiper para "Mis obras" (nueva sección)
const swiperObras = new Swiper('.my-obras .swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.my-obras .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.my-obras .swiper-button-next',
        prevEl: '.my-obras .swiper-button-prev',
    },
    on: {
        slideChange: function () {
            // Remover clase active-slide de todos los slides
            this.slides.forEach(slide => {
                slide.classList.remove('active-slide');
            });
            // Agregar clase active-slide al slide activo
            this.slides[this.activeIndex].classList.add('active-slide');
        }
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            centeredSlides: true
        },
        400: {
            slidesPerView: 1,
            centeredSlides: true
        },
        500: {
            slidesPerView: 2,
            centeredSlides: true
        },
        768: {
            slidesPerView: 3,
            centeredSlides: true
        },
        1024: {
            slidesPerView: 3,
            centeredSlides: true
        }
    }
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
    768: {
        slidesPerView: 3
    },
    500: {
        slidesPerView: 2
    },
    400: {
        slidesPerView: 1
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
        768: {
            slidesPerView: 3
        },
        1024: {
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



document.getElementById('cupon-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{2,40}$/.test(nombre)) {
        const alertMsg = currentLanguage === 'es' ?
            'Por favor, ingresa un nombre válido (solo letras y espacios, mínimo 2 caracteres).' :
            'Please enter a valid name (letters and spaces only, minimum 2 characters).';
        alert(alertMsg);
        return;
    }


    const numeroWpp = '5491144278014';
    const mensaje = currentLanguage === 'es' ?
        `¡Hola! Soy ${nombre} y te envío la captura de que te sigo en Instagram para reclamar mi cupón de descuento.` :
        `Hello! I'm ${nombre} and I'm sending you the screenshot showing I follow you on Instagram to claim my discount coupon.`;

    Swal.fire({
        title: currentLanguage === 'es' ? '¡Perfecto!' : 'Perfect!',
        text: currentLanguage === 'es' ?
            'Ahora se abrirá WhatsApp. Adjuntá la captura en el chat para recibir tu cupón.' :
            'WhatsApp will now open. Attach the screenshot in the chat to receive your coupon.',
        icon: 'success',
        confirmButtonText: currentLanguage === 'es' ? 'Entendido' : 'Understood',
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

// Sistema de traducción
let currentLanguage = 'es';

// Función para cambiar idioma
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Actualizar elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Actualizar placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Actualizar botones de idioma
    updateLanguageButtons(lang);
    
    // Guardar preferencia
    localStorage.setItem('preferred-language', lang);
    
    // Actualizar mensajes de WhatsApp
    updateWhatsAppMessages(lang);
}

// Función para actualizar botones de idioma
function updateLanguageButtons(lang) {
    const buttons = document.querySelectorAll('.language-btn');
    buttons.forEach(button => {
        const flag = button.querySelector('.lang-flag');
        const text = button.querySelector('.lang-text');
        
        if (lang === 'es') {
            flag.textContent = '🇪🇸';
            text.textContent = 'ES';
        } else {
            flag.textContent = '🇺🇸';
            text.textContent = 'EN';
        }
    });
}

// Función para actualizar mensajes de WhatsApp
function updateWhatsAppMessages(lang) {
    const reservarTurno = document.getElementById('reservarTurno');
    const reservarTurnoHeader = document.getElementById('reservarTurnoHeader');
    
    if (reservarTurno) {
        reservarTurno.onclick = function(e) {
            e.preventDefault();
            const numeroWpp = '5491144278014';
            const mensaje = lang === 'es' ? 
                `¡Hola! Quiero tatuarme ¿Me darías más información?` :
                `Hello! I want to get a tattoo. Could you give me more information?`;
            window.open(`https://wa.me/${numeroWpp}?text=${encodeURIComponent(mensaje)}`, '_blank');
        };
    }
    
    if (reservarTurnoHeader) {
        reservarTurnoHeader.onclick = function(e) {
            e.preventDefault();
            const numeroWpp = '5491144278014';
            const mensaje = lang === 'es' ? 
                `¡Hola! Quiero tatuarme ¿Me darías más información?` :
                `Hello! I want to get a tattoo. Could you give me more information?`;
            window.open(`https://wa.me/${numeroWpp}?text=${encodeURIComponent(mensaje)}`, '_blank');
        };
    }
}

// Event listeners para botones de idioma
document.addEventListener('DOMContentLoaded', function() {
    // Cargar idioma guardado
    const savedLanguage = localStorage.getItem('preferred-language') || 'es';
    if (savedLanguage !== 'es') {
        changeLanguage(savedLanguage);
    }
    
    // Botón de idioma desktop
    const languageBtn = document.getElementById('language-toggle');
    if (languageBtn) {
        languageBtn.addEventListener('click', function() {
            const newLang = currentLanguage === 'es' ? 'en' : 'es';
            changeLanguage(newLang);
        });
    }
    
    // Botón de idioma mobile
    const languageBtnMobile = document.getElementById('language-toggle-mobile');
    if (languageBtnMobile) {
        languageBtnMobile.addEventListener('click', function() {
            const newLang = currentLanguage === 'es' ? 'en' : 'es';
            changeLanguage(newLang);
        });
    }
});

const translations = {
    es: {
        // Header
        sobreMi: "Sobre mí",
        obras: "Obras",
        diseños: "Diseños",
        reseñas: "Reseñas",
        ubicacion: "Ubicación",
        reservarTurno: "Reservar turno",
        nuevo: "NUEVO",

        // Secciones principales
        misEstilos: "Mis estilos",
        misObras: "Mis obras",
        nuevaSeccion: "Nueva sección",
        misDiseños: "Mis diseños",
        miCanal: "Mi canal de Youtube",
        visitarYoutube: "Visitar Youtube",
        verEnInstagram: "Ver en instagram",

        // Estilos de tatuajes
        realismo: "Realismo",
        realismoDesc: "Diseños que retraten a tus seres queridos en la piel.",
        cover: "Cover",
        coverDesc: "Tatuajes que transforman u ocultan trabajos antiguos con nuevo arte.",
        personalizado: "Personalizado",
        personalizadoDesc: "Un tatuaje diseñado exclusivamente para tu cuerpo.",
        puntillismo: "Puntillismo De Arrastre",
        puntillismoDesc: "Sombras creadas con puntos que simulan movimiento y profundidad.",

        // Obras de arte
        experiencia: "Experiencia",
        granPecho: "Gran pecho naranja",
        losCuervos: "Los 4 cuervos",
        laCoronacion: "La coronación",
        fuegoInterno: "Fuego interno",
        latex: "Látex sobre lienzo",
        mural: "Mural",
        año: "Año",
        vendido: "VENDIDO",
        agotado: "AGOTADO",
        disponible: "DISPONIBLE",

        // Sobre mí
        sobreMiTitulo: "Un poco sobre mí",
        hola: "Hola, soy Marianela, artista de tatuajes y me encanta ayudar a las personas a",
        expresar: "expresar su individualidad",
        atraves: "a través de mis diseños.",
        miPasion: "Mi",
        pasion: "pasión",
        porElArte: "por el arte me llevó a convertirme en tatuadora, y cada día me esfuerzo por mejorar mis habilidades y ofrecer lo",
        mejor: "mejor",
        aClientes: "a mis clientes.",
        meGusta: "Me gusta trabajar con diferentes estilos, desde el puntillismo hasta el realismo, y siempre estoy abierta a",
        nuevasIdeas: "nuevas ideas",
        yDesafios: "y",
        desafios: "desafíos",
        siEstas: ". Si estás buscando un tatuaje único y personalizado, no dudes en contactarme.",

        // Contacto
        miLocal: "Mi local",
        tatuateConmigo: "Tatuate conmigo ✨",
        contactame: "Contactame hacé tu reserva 🙌🏻",
        instagram: "Instagram",
        whatsapp: "Whatsapp",
        mail: "Mail",

        // Cupón
        felicidades: "Felicidades",
        llegaste: ", llegaste al final de la web. Por eso te",
        regalamos: "regalamos",
        cuponDesc: "un cupón de descuento.",
        obtene: "Obtené",
        descuento: "de descuento en tu próximo tatuaje.",
        soloTenes: "Solo tenes seguirme en instagram, enviar una screen del follow y reclamar el cupón!",
        irInstagram: "Ir a Instagram",
        tuNombre: "Tu nombre",
        irWhatsapp: "Ir a Whatsapp y Enviar foto",
        reclamarCodigo: "Reclamar código",

        // Footer
        derechosReservados: "© 2025 Tattoonela. Todos los derechos reservados.",
        diseñadoPor: "Web Diseñada por Imperiale Julián",
        iconosAnimados: "Comprar iconos animados creados por Freepik - Flaticon",

        // Frase
        frase: '"Una cicatriz controlada, un proceso natural de sanación" 🌿'
    },
    en: {
        // Header
        sobreMi: "About me",
        obras: "Paintings",
        diseños: "Designs",
        reseñas: "Reviews",
        ubicacion: "Location",
        reservarTurno: "Book appointment",
        nuevo: "NEW",

        // Secciones principales
        misEstilos: "My styles",
        misObras: "My paintings",
        nuevaSeccion: "New section",
        misDiseños: "My designs",
        miCanal: "My Youtube channel",
        visitarYoutube: "Visit Youtube",
        verEnInstagram: "View on instagram",

        // Estilos de tatuajes
        realismo: "Realism",
        realismoDesc: "Designs that portray your loved ones on the skin.",
        cover: "Cover-up",
        coverDesc: "Tattoos that transform or hide old work with new art.",
        personalizado: "Custom",
        personalizadoDesc: "A tattoo designed exclusively for your body.",
        puntillismo: "Drag Pointillism",
        puntillismoDesc: "Shadows created with dots that simulate movement and depth.",

        // Obras de arte
        experiencia: "Experience",
        granPecho: "Big Orange Chest",
        losCuervos: "The 7 crows",
        laCoronacion: "Pawn Coronation",
        fuegoInterno: "Internal fire",
        latex: "Latex on canvas",
        mural: "Mural",
        año: "Year",
        vendido: "SOLD",
        agotado: "SOLD OUT",
        disponible: "AVAILABLE",

        // Sobre mí
        sobreMiTitulo: "A little about me",
        hola: "Hello, I'm Marianela, tattoo artist and I love helping people",
        expresar: "express their individuality",
        atraves: "through my designs.",
        miPasion: "My",
        pasion: "passion",
        porElArte: "for art led me to become a tattoo artist, and every day I strive to improve my skills and offer the",
        mejor: "best",
        aClientes: "to my clients.",
        meGusta: "I like working with different styles, from pointillism to realism, and I'm always open to",
        nuevasIdeas: "new ideas",
        yDesafios: "and",
        desafios: "challenges",
        siEstas: ". If you're looking for a unique and personalized tattoo, don't hesitate to contact me.",

        // Contacto
        miLocal: "My studio",
        tatuateConmigo: "Get tattooed with me ✨",
        contactame: "Contact me and make your reservation 🙌🏻",
        instagram: "Instagram",
        whatsapp: "Whatsapp",
        mail: "Mail",

        // Cupón
        felicidades: "Congratulations",
        llegaste: ", you reached the end of the website. That's why we",
        regalamos: "give you",
        cuponDesc: "a discount coupon.",
        obtene: "Get",
        descuento: "discount on your next tattoo.",
        soloTenes: "Just follow me on instagram, send a screenshot of the follow and claim the coupon!",
        irInstagram: "Go to Instagram",
        tuNombre: "Your name",
        irWhatsapp: "Go to Whatsapp and Send photo",
        reclamarCodigo: "Claim code",

        // Footer
        derechosReservados: "© 2025 Tattoonela. All rights reserved.",
        diseñadoPor: "Website Designed by Imperiale Julián",
        iconosAnimados: "Animated icons created by Freepik - Flaticon",

        // Frase
        frase: '"A controlled scar, a natural healing process" 🌿'
    }
};