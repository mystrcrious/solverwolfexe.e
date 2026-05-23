const rainContainer = document.querySelector('.rain-container');

// Karakter acak untuk glitch
const characters = 'SILVERWOLF1234567890!@#$%^&*+';

// Kata target yang ingin ditampilkan
const targetWord = 'SILVERWOLF';

// Fungsi membuat satu kolom
function createRainColumn() {
    const column = document.createElement('div');
    column.classList.add('rain-column');

    // Jalankan huruf di kolom secara berkala
    setInterval(() => {
        const isSilverWolf = Math.random() > 0.3; // 50% kemungkinan muncul "SILVERWOLF"

        targetWord.split('').forEach((char, index) => {
            const letter = document.createElement('div');
            letter.classList.add('letter');

            // Jika kolom ini "SILVERWOLF," tampilkan kata aslinya; jika tidak, glitch
            if (isSilverWolf) {
                letter.textContent = char; // Tulis huruf asli
            } else {
                // Tulis karakter acak dengan kemungkinan glitch
                setInterval(() => {
                    letter.textContent = Math.random() > 0.5
                        ? characters[Math.floor(Math.random() * characters.length)]
                        : char;
                }, 1); // Glitch setiap 100ms
            }

            // Tambahkan jeda antar huruf
            setTimeout(() => {
                column.appendChild(letter);
            }, index * 150); // Tambahkan jeda antar huruf

            // Hapus huruf setelah animasi selesai
            setTimeout(() => {
                if (column.contains(letter)) {
                    column.removeChild(letter);
                }
            }, 50); // Hapus setelah durasi fall
        });
    }, 2000); // Kolom ulangi setiap 2 detik

    rainContainer.appendChild(column);
}

// Buat beberapa kolom untuk layar penuh
for (let i = 0; i < 30; i++) { // Total 25 kolom untuk lebih penuh
    createRainColumn();
}
