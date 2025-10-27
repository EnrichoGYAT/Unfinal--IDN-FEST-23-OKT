// quiz.js

document.addEventListener('DOMContentLoaded', function() {
    // 1. PASTIKAN SEMUA RADIO BUTTON DI RESET SAAT HALAMAN DIMUAT (MENGATASI CACHE BROWSER)
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });

    // Jawaban Benar untuk Sesi 1 (Catatan di Kulkas)
    const answersSesi1 = {
        'q1': 'B', // Ibu
        'q2': 'B', // Membersihkan kamarnya
        'q3': 'A'  // Susu
    };

    // Jawaban Benar untuk Sesi 2 (Pesan Teks)
    const answersSesi2 = {
        'q4': 'B', // Kelasnya dibatalkan
        'q5': 'B'  // Di taman
    };

    // FUNGSI UTAMA UNTUK MENGATUR KUIS
    function setupQuiz(formId, correctAnswers) {
        const quizForm = document.getElementById(formId);
        if (!quizForm) return;

        quizForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            checkQuiz(quizForm, correctAnswers);
        });
    }

    // FUNGSI CEK JAWABAN
    function checkQuiz(form, correctAnswers) {
        let score = 0;
        const totalQuestions = Object.keys(correctAnswers).length;
        let resultDiv = form.querySelector('.quiz-result');

        // Hapus hasil sebelumnya
        if (resultDiv) {
            resultDiv.remove();
        }

        resultDiv = document.createElement('div');
        resultDiv.className = 'quiz-result mt-4 p-4 rounded-lg font-bold transition-all duration-300';
        
        // Loop melalui semua pertanyaan
        for (const questionName in correctAnswers) {
            const selected = form.querySelector(`input[name="${questionName}"]:checked`);
            const correctAnswer = correctAnswers[questionName];
            
            // Dapatkan semua label opsi jawaban untuk manipulasi ikon
            const options = form.querySelectorAll(`input[name="${questionName}"]`).forEach(input => {
                const label = input.closest('label');
                // Hapus ikon dan warna sebelumnya sebelum pengecekan baru
                label.classList.remove('text-green-600', 'text-red-600', 'font-bold');
                label.innerHTML = label.innerHTML.replace(/<span class="quiz-icon">.*?<\/span>/g, '');

                // Container kuis untuk warna latar belakang
                const questionContainer = input.closest('.p-3');
                questionContainer.classList.remove('bg-green-100', 'bg-red-100', 'dark:bg-green-900/50', 'dark:bg-red-900/50');
                
                // 1. Tampilkan Jawaban BENAR (dengan ikon centang)
                if (input.value === correctAnswer) {
                    label.classList.add('text-green-600', 'font-bold');
                    label.innerHTML += `<span class="quiz-icon ml-2">✅</span>`;
                }

                if (selected && selected.value === input.value) {
                    // 2. Jika opsi ini adalah yang DIPILIH oleh pengguna
                    if (selected.value === correctAnswer) {
                        score++;
                        questionContainer.classList.add('bg-green-100', 'dark:bg-green-900/50');
                    } else {
                        // 3. Jika opsi ini adalah yang DIPILIH TAPI SALAH (dengan ikon silang)
                        questionContainer.classList.add('bg-red-100', 'dark:bg-red-900/50');
                        
                        // Cari label jawaban yang salah dipilih (sudah ada ikon centang karena itu adalah jawaban B)
                        // Ganti ikon centang (✅) dengan silang (❌)
                        label.innerHTML = label.innerHTML.replace(`✅`, `<span class="quiz-icon ml-2">❌</span>`); 
                        
                        // Hapus penandaan jawaban benar
                        label.classList.remove('text-green-600', 'font-bold'); 
                        label.classList.add('text-red-600');
                    }
                }
            });
        }

        // Tampilkan Skor Total
        if (score === totalQuestions) {
            resultDiv.classList.add('bg-green-200', 'text-green-800', 'dark:bg-green-700', 'dark:text-white');
            resultDiv.textContent = `SELAMAT! Anda menjawab ${score} dari ${totalQuestions} pertanyaan dengan benar. Jawaban Anda SEMPURNA!`;
        } else {
            resultDiv.classList.add('bg-red-200', 'text-red-800', 'dark:bg-red-700', 'dark:text-white');
            resultDiv.textContent = `BELUM TEPAT. Anda menjawab ${score} dari ${totalQuestions} pertanyaan dengan benar. Perhatikan jawaban yang berwarna merah (salah) dan jawaban yang berwarna hijau (benar).`;
        }

        form.appendChild(resultDiv);
    }

    // Panggil setup untuk setiap form kuis
    setupQuiz('quiz-s1', answersSesi1);
    setupQuiz('quiz-s2', answersSesi2);
});