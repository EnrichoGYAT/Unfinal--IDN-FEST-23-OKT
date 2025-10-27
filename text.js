document.addEventListener('DOMContentLoaded', function () {
  var i = 0;
  const text = 'Belajar Bahasa Inggris dengan English Town!';

  const typingTextElement = document.getElementById('typing-text');
  const caretElement = document.getElementById('caret');

  if (!typingTextElement || !caretElement) {
    console.error("Elemen 'typing-text' atau 'caret' tidak ditemukan. Periksa ID di HTML Anda.");
    return;
  }

  function mengetik() {
    if (i < text.length) {
      typingTextElement.textContent += text.charAt(i);
      i++;
      setTimeout(mengetik, 60);
    } else {
      setTimeout(blinking, 500);
    }
  }

  function blinking() {
    caretElement.innerHTML = '';
    caretElement.style.paddingLeft = '32px';
    setTimeout(() => {
      caretElement.style.paddingLeft = '0px';
      caretElement.innerHTML = '|';
      setTimeout(blinking, 500);
    }, 500);
  }

  mengetik();
});