// games.js (atau about.js jika Anda tetap ingin menggunakannya)

document.addEventListener("DOMContentLoaded", function () {
  var i = 0;
  // Ubah teks ini agar sesuai dengan judul Anda
  const text = "Game Course"; 

  const typingTextElement = document.getElementById("typing-text");
  const caretElement = document.getElementById("caret");

  if (!typingTextElement || !caretElement) {
    console.error("Elemen 'typing-text' atau 'caret' tidak ditemukan. Pastikan ID ada di HTML dan unik.");
    return;
  }

  function mengetik() {
    if (i < text.length) {
      typingTextElement.textContent += text.charAt(i);
      i++;
      setTimeout(mengetik, 100); // Sesuaikan kecepatan mengetik jika diinginkan
    } else {
      setTimeout(blinking, 500); // Mulai berkedip setelah teks selesai
    }
  }

  function blinking() {
    // Tailwind CSS sudah menangani animasi caret melalui `caret-style`
    // Jadi, kita hanya perlu memulai animasi ini.
    // Tidak perlu memanipulasi padding/innerHTML lagi di JS jika menggunakan CSS animation
  }

  mengetik();
});