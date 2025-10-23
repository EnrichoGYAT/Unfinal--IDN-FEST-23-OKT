// menu.js - VERSI SANGAT SEDERHANA UNTUK MENU OFF-CANVAS

document.addEventListener('DOMContentLoaded', function() {
    // Pastikan menggunakan ID yang sama di semua file HTML
    const hamburgerButton = document.getElementById('hamburger-btn'); 
    const offCanvasMenu = document.getElementById('off-canvas-menu'); 
    const menuOverlay = document.getElementById('menu-overlay');

    if (hamburgerButton && offCanvasMenu && menuOverlay) {
        
        function toggleMenu() {
            const isMenuOpen = offCanvasMenu.classList.contains('open');
            
            offCanvasMenu.classList.toggle('open');
            menuOverlay.classList.toggle('open');
            
            // Toggle body scroll untuk mencegah scrolling saat menu terbuka
            document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
            
            // Opsional: Ganti ikon (pastikan tombol memiliki ikon)
            const icon = hamburgerButton.querySelector('.material-symbols-outlined');
            if (icon) {
                 icon.textContent = isMenuOpen ? 'menu' : 'close';
            }
        }

        hamburgerButton.addEventListener('click', toggleMenu);

        // Menutup menu saat mengklik overlay atau link
        menuOverlay.addEventListener('click', toggleMenu);
        offCanvasMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
        
        // Tambahkan tombol tutup di dalam off-canvas-menu jika ada
        const closeMenuBtn = document.getElementById('close-menu-btn');
        if (closeMenuBtn) {
             closeMenuBtn.addEventListener('click', toggleMenu);
        }
    }
});