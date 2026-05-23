const hackContainer = document.querySelector('.hack-container');

// Kata yang akan ditampilkan
const targetText = 'YOU WILL BE HACKED';

// Fungsi untuk membuat baris teks
function createHackRow() {
    const row = document.createElement('div');
    row.classList.add('hack-row');

    // Isi baris dengan teks berulang
    for (let i = 0; i < 10; i++) { // Ulangi teks 10x untuk memanjang
        const text = document.createElement('div');
        text.classList.add('hack-text');
        text.textContent = targetText;

        // Durasi acak untuk setiap teks di baris ini
        const randomDuration = Math.random() * 4 + 3; // Durasi antara 3-7 detik
        text.style.setProperty('--duration', `${randomDuration}s`);

        row.appendChild(text);
    }

    hackContainer.appendChild(row);
}

// Buat beberapa baris untuk layar penuh secara vertikal
for (let i = 0; i < 10; i++) { // Misalnya 10 baris
    createHackRow();
}
