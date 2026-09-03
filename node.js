
const timerDisplay = document.querySelector('.timer-box span');
const btnStart = document.querySelector('.btn-primary');
const badge = document.querySelector('.badge');
const title = document.querySelector('.card h2');


let totalSeconds = 01 * 00;
let timerInterval = null;
let isRunning = false;


function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

  return `${formattedMinutes}:${formattedSeconds}`;
}


function startTimer() {
  
  if (!isRunning) {
    isRunning = true;
    btnStart.textContent = 'Jeda Sesi ⏸️';
    badge.textContent = '🔥 Sedang Fokus...';

    
    timerInterval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        timerDisplay.textContent = formatTime(totalSeconds);
      } else {
        
        clearInterval(timerInterval);
        alert('Waktu fokus selesai! Saatnya istirahat sebentar. 🎉');
        btnStart.textContent = 'Mulai Sesi 🔥';
        badge.textContent = '🚀 Sesi Selesai';
        isRunning = false;
      }
    }, 1000);

  } else {
    
    clearInterval(timerInterval);
    isRunning = false;
    btnStart.textContent = 'Lanjutkan Sesi ▶️';
    badge.textContent = '⏸️ Sesi Dijeda';
  }
}


btnStart.addEventListener('click', startTimer);
