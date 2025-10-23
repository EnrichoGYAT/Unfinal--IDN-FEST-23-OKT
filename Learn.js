// contact.js

document.addEventListener('DOMContentLoaded', function () {
    // Ambil semua tombol toggle FAQ
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            // Dapatkan elemen induk (faq-item) dari tombol yang diklik
            const faqItem = toggle.closest('.faq-item');
            
            // Periksa apakah item saat ini sudah terbuka
            const isCurrentlyOpen = faqItem.classList.contains('open');

            // 1. Tutup semua item FAQ lainnya
            document.querySelectorAll('.faq-item').forEach(item => {
                // Hapus kelas 'open' dari semua item
                item.classList.remove('open');
            });

            // 2. Jika item yang diklik belum terbuka, buka item tersebut
            if (!isCurrentlyOpen) {
                faqItem.classList.add('open');
            }
            
            // Catatan: Kelas 'open' di CSS (section: .faq-item.open .faq-answer) 
            // akan mengontrol transisi max-height untuk efek buka/tutup.
        });
    });
});