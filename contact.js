// contact.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitButton = document.getElementById('submit-btn');

    if (contactForm && submitButton) {
        submitButton.addEventListener('click', function(event) {
            event.preventDefault(); // Mencegah form melakukan submit tradisional

            // 1. Ambil data dari input pengguna
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value; // Pastikan email juga diambil
            var subject = document.getElementById("subject").value;
            var message = document.getElementById("message").value;

            // 2. Lakukan validasi dasar (seperti memastikan pesan tidak kosong)
            if (!name || !email || !subject || !message) {
                alert("Mohon lengkapi semua kolom yang wajib diisi (Nama, Email, Subjek, Pesan).");
                return; 
            }

            // 3. Susun isi email
            var emailBody = "Pesan ini dikirim oleh: " + name + " (" + email + ").\n\n" + message;

            // 4. Susun URL Gmail (dengan To, Subject, dan Body)
            // Ubah alamat penerima ke englishtown58@gmail.com
            var gmailURL = "https://mail.google.com/mail/?view=cm&fs=1" +
                           "&to=englishtown58@gmail.com" + 
                           "&su=" + encodeURIComponent(subject) +
                           "&body=" + encodeURIComponent(emailBody);

            // 5. Buka tab baru dengan jendela Gmail yang sudah terisi
            window.open(gmailURL, '_blank');
            
            // Opsional: Reset form setelah berhasil membuka tab Gmail
            contactForm.reset();
        });
    }
});