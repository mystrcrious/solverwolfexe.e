const glitchContainer = document.querySelector('.glitch-container');

// Karakter acak untuk glitch
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

// Fungsi untuk membuat teks glitch
function createGlitchText(baseText, amount) {
    for (let i = 0; i < amount; i++) {
        const glitchText = document.createElement('div');
        glitchText.classList.add('glitch-text');

        // Set teks awal
        glitchText.textContent = baseText;

        // Tambahkan efek glitch pada huruf-huruf
        setInterval(() => {
            let output = '';
            for (let char of baseText) {
                const randomChar = characters[Math.floor(Math.random() * characters.length)];
                output += Math.random() > 0.5 ? randomChar : char;
            }
            glitchText.textContent = output;
        }, 200);

        // Posisi acak untuk setiap elemen
        const randomX = Math.random() * 100 + 'vw';
        const randomY = Math.random() * 100 + 'vh';
        const randomRotation = Math.random() * 10 - 5 + 'deg';

        glitchText.style.position = 'absolute';
        glitchText.style.left = randomX;
        glitchText.style.top = randomY;
        glitchText.style.transform = `rotate(${randomRotation})`;

        glitchContainer.appendChild(glitchText);
    }
}

// Panggil fungsi untuk menghasilkan glitch spam
createGlitchText('KANA', 300);
