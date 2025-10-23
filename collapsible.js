// collapsible.js

document.addEventListener('DOMContentLoaded', function () {
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach(toggle => {
        const faqItem = toggle.closest('.faq-item');
        const answer = faqItem.querySelector('.faq-answer');
        const chevron = toggle.querySelector('.chevron');
        
        // --- INISIALISASI PENTING: PASTIKAN TERTUTUP DAN PADDING HILANG SAAT DIMUAT ---
        answer.style.maxHeight = '0';
        answer.style.paddingTop = '0'; // Hapus padding atas
        answer.style.paddingBottom = '0'; // Hapus padding bawah
        faqItem.classList.remove('open');
        if (chevron) { 
            chevron.textContent = 'expand_more';
        }
        // --------------------------------------------------------------------------

        toggle.addEventListener('click', () => {
            const isCurrentlyOpen = faqItem.classList.contains('open');

            // 1. Tutup semua item FAQ lainnya
            document.querySelectorAll('.faq-item').forEach(item => {
                const otherAnswer = item.querySelector('.faq-answer');
                const otherChevron = item.querySelector('.chevron');
                if (item !== faqItem) {
                    item.classList.remove('open');
                    otherAnswer.style.maxHeight = '0';
                    otherAnswer.style.paddingTop = '0'; // TUTUP: Hapus padding
                    otherAnswer.style.paddingBottom = '0'; // TUTUP: Hapus padding
                    if (otherChevron) {
                        otherChevron.textContent = 'expand_more'; 
                    }
                }
            });

            // 2. Toggle item yang diklik
            if (isCurrentlyOpen) {
                // TUTUP
                faqItem.classList.remove('open');
                answer.style.maxHeight = '0';
                answer.style.paddingTop = '0'; // TUTUP: Hapus padding
                answer.style.paddingBottom = '0'; // TUTUP: Hapus padding
                if (chevron) {
                    chevron.textContent = 'expand_more'; 
                }
            } else {
                // BUKA
                faqItem.classList.add('open');
                
                // Set max-height ke scrollHeight + padding vertikal (total 2rem = 32px)
                // Tailwind CSS Anda menggunakan px-4 pb-4 (masing-masing 1rem atau 16px)
                answer.style.maxHeight = (answer.scrollHeight + 32) + 'px'; 
                
                // BUKA: Tambahkan kembali padding (1rem = 16px)
                answer.style.paddingTop = '1rem'; 
                answer.style.paddingBottom = '1rem';
                
                if (chevron) {
                    chevron.textContent = 'expand_less'; 
                }
            }
        });
    });
});