let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Berputar ke awal jika sudah di slide terakhir
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Berputar ke akhir jika di bawah 0
    showSlide(currentSlide);
}

showSlide(currentSlide);

const marquee = document.querySelector('.marquee');
const text = document.querySelector('.marquee-text').textContent;

// Duplikasi teks hingga cukup panjang untuk menciptakan efek seamless
const repeatCount = Math.ceil(window.innerWidth / marquee.offsetWidth) * 2; // Duplikasi secukupnya
for (let i = 0; i < repeatCount; i++) {
    const span = document.createElement('span');
    span.classList.add('marquee-text');
    span.textContent = text;
    marquee.appendChild(span);
}

// Tambahkan animasi dengan JavaScript
let offset = 0;
function animateMarquee() {
    offset -= 5; // Geser ke kiri (atur kecepatannya dengan angka ini)
    marquee.style.transform = `translateX(${offset}px)`;

    // Ulangi saat sudah melewati semua teks
    if (Math.abs(offset) >= marquee.offsetWidth / 2) {
        offset = 0;
    }

    requestAnimationFrame(animateMarquee);
}

animateMarquee();

