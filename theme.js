// theme.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');

    // 1. Dapatkan tema saat ini dari penyimpanan lokal atau preferensi sistem
    const currentTheme = localStorage.getItem('theme');
    
    // 2. Terapkan tema yang tersimpan atau tema default (sistem)
    // Cek jika tema tersimpan 'dark' ATAU jika tidak ada tema tersimpan dan sistem preferensi adalah dark
    if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
    }

    if (toggleButton) {
        // 3. Update ikon toggle berdasarkan status tema
        function updateToggleIcon() {
            if (document.documentElement.classList.contains('dark')) {
                // Ikon Bulan di Dark Mode (untuk pindah ke Light Mode)
                toggleButton.innerHTML = '<span class="material-symbols-outlined"> light_mode </span>'; 
            } else {
                // Ikon Matahari di Light Mode (untuk pindah ke Dark Mode)
                toggleButton.innerHTML = '<span class="material-symbols-outlined"> dark_mode </span>'; 
            }
        }

        updateToggleIcon();

       
        toggleButton.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            document.body.classList.toggle('dark');

            
            if (document.documentElement.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
            updateToggleIcon();
        });
    }
});