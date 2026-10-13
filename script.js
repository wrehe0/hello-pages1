/* ============================================
   NOVA — Анимации и интерактив
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ===== 1. Мобильное меню ===== */
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      menuToggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });

    // Закрыть меню при клике по ссылке
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle.textContent = '☰';
      });
    });
  }

  /* ===== 2. Intersection Observer — появление элементов ===== */
  const fadeElements = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Небольшая задержка для каскадного эффекта
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 80);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    // Фолбэк: показать всё сразу
    fadeElements.forEach(el => el.classList.add('visible'));
  }

  /* ===== 3. Анимированные счётчики (главная) ===== */
  const counters = document.querySelectorAll('.counter');
  let countersStarted = false;

  function animateCounters() {
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.target, 10);
      const duration = 2000;
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.floor(eased * target);

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          counter.textContent = target;
        }
      }
      requestAnimationFrame(update);
    });
  }

  if (counters.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
          countersStarted = true;
          animateCounters();
          counterObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });

    const counterSection = document.querySelector('.counter-grid');
    if (counterSection) counterObserver.observe(counterSection);
  } else if (counters.length > 0) {
    animateCounters();
  }

  /* ============================================
     4. ИГРА: Угадай число
     ============================================ */
  const guessInput = document.getElementById('guessInput');
  if (guessInput) {
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let gameOver = false;

    const guessBtn = document.getElementById('guessBtn');
    const guessMessage = document.getElementById('guessMessage');
    const guessAttempts = document.getElementById('guessAttempts');
    const guessReset = document.getElementById('guessReset');

    function checkGuess() {
      if (gameOver) return;

      const value = parseInt(guessInput.value, 10);
      if (isNaN(value) || value < 1 || value > 100) {
        guessMessage.textContent = '⚠️ Введите число от 1 до 100';
        guessMessage.style.color = '#ff8888';
        return;
      }

      attempts++;
      guessAttempts.textContent = attempts;

      if (value === secretNumber) {
        guessMessage.textContent = `🎉 Победа! Вы угадали за ${attempts} попыток!`;
        guessMessage.style.color = '#39ff14';
        gameOver = true;
        guessBtn.disabled = true;
      } else if (value < secretNumber) {
        guessMessage.textContent = '📈 Больше!';
        guessMessage.style.color = '#00ffa3';
      } else {
        guessMessage.textContent = '📉 Меньше!';
        guessMessage.style.color = '#00ffa3';
      }

      guessInput.value = '';
      guessInput.focus();
    }

    guessBtn.addEventListener('click', checkGuess);
    guessInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') checkGuess();
    });

    guessReset.addEventListener('click', () => {
      secretNumber = Math.floor(Math.random() * 100) + 1;
      attempts = 0;
      gameOver = false;
      guessAttempts.textContent = '0';
      guessMessage.textContent = 'Введите число и нажмите «Проверить»';
      guessMessage.style.color = '#39ff14';
      guessBtn.disabled = false;
      guessInput.value = '';
      guessInput.focus();
    });
  }

  /* ============================================
     5. ИГРА: Камень, ножницы, бумага
     ============================================ */
  const rpsChoices = document.querySelectorAll('.rps-btn');
  if (rpsChoices.length > 0) {
    const emojis = { rock: '✊', scissors: '✌️', paper: '✋' };
    const names = { rock: 'Камень', scissors: 'Ножницы', paper: 'Бумага' };

    let playerScore = 0;
    let computerScore = 0;
    let roundLocked = false;

    const rpsPlayer = document.getElementById('rpsPlayer');
    const rpsComputer = document.getElementById('rpsComputer');
    const rpsPlayerScore = document.getElementById('rpsPlayerScore');
    const rpsComputerScore = document.getElementById('rpsComputerScore');
    const rpsMessage = document.getElementById('rpsMessage');
    const rpsReset = document.getElementById('rpsReset');

    function playRound(playerChoice) {
      if (roundLocked) return;
      roundLocked = true;

      const choices = ['rock', 'scissors', 'paper'];
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      rpsPlayer.textContent = emojis[playerChoice];
      rpsComputer.textContent = emojis[computerChoice];

      let result = '';
      if (playerChoice === computerChoice) {
        result = `🤝 Ничья! Оба выбрали ${names[playerChoice]}`;
      } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
      ) {
        playerScore++;
        result = `🎉 Вы победили! ${names[playerChoice]} бьёт ${names[computerChoice]}`;
      } else {
        computerScore++;
        result = `😢 Вы проиграли. ${names[computerChoice]} бьёт ${names[playerChoice]}`;
      }

      rpsPlayerScore.textContent = playerScore;
      rpsComputerScore.textContent = computerScore;

      if (playerScore >= 5) {
        result = `🏆 Вы выиграли матч со счётом ${playerScore}:${computerScore}!`;
        rpsChoices.forEach(btn => btn.disabled = true);
      } else if (computerScore >= 5) {
        result = `💻 Компьютер выиграл матч со счётом ${computerScore}:${playerScore}`;
        rpsChoices.forEach(btn => btn.disabled = true);
      }

      rpsMessage.textContent = result;
      rpsMessage.style.color = playerScore >= 5 ? '#39ff14'
        : computerScore >= 5 ? '#ff8888' : '#39ff14';

      setTimeout(() => { roundLocked = false; }, 400);
    }

    rpsChoices.forEach(btn => {
      btn.addEventListener('click', () => playRound(btn.dataset.choice));
    });

    rpsReset.addEventListener('click', () => {
      playerScore = 0;
      computerScore = 0;
      rpsPlayerScore.textContent = '0';
      rpsComputerScore.textContent = '0';
      rpsPlayer.textContent = '—';
      rpsComputer.textContent = '—';
      rpsMessage.textContent = 'Сделайте свой выбор!';
      rpsMessage.style.color = '#39ff14';
      rpsChoices.forEach(btn => btn.disabled = false);
      roundLocked = false;
    });
  }

  /* ============================================
     6. ИГРА: Тест реакции
     ============================================ */
  const reactionArea = document.getElementById('reactionArea');
  if (reactionArea) {
    const reactionText = document.getElementById('reactionText');
    const reactionMessage = document.getElementById('reactionMessage');
    const reactionStart = document.getElementById('reactionStart');
    const reactionBest = document.getElementById('reactionBest');

    let reactionState = 'idle'; // idle | waiting | ready | done
    let reactionTimeout = null;
    let reactionStartTime = 0;
    let bestTime = null;

    function resetReaction() {
      clearTimeout(reactionTimeout);
      reactionState = 'idle';
      reactionArea.className = 'reaction-area';
      reactionText.textContent = 'Нажмите «Старт», чтобы начать';
      reactionMessage.textContent = '';
    }

    reactionStart.addEventListener('click', () => {
      if (reactionState === 'waiting' || reactionState === 'ready') return;

      reactionState = 'waiting';
      reactionArea.className = 'reaction-area waiting';
      reactionText.textContent = 'Приготовьтесь...';
      reactionMessage.textContent = '';

      const delay = 1500 + Math.random() * 3000;
      reactionTimeout = setTimeout(() => {
        reactionState = 'ready';
        reactionArea.className = 'reaction-area ready';
        reactionText.textContent = 'ЖМИ!';
        reactionStartTime = performance.now();
      }, delay);
    });

    reactionArea.addEventListener('click', () => {
      if (reactionState === 'waiting') {
        // Слишком рано
        clearTimeout(reactionTimeout);
        reactionState = 'idle';
        reactionArea.className = 'reaction-area';
        reactionText.textContent = 'Слишком рано!';
        reactionMessage.textContent = '⚠️ Дождитесь зелёного цвета!';
        reactionMessage.style.color = '#ff8888';
        return;
      }

      if (reactionState === 'ready') {
        const time = Math.round(performance.now() - reactionStartTime);
        reactionState = 'done';
        reactionArea.className = 'reaction-area';
        reactionText.textContent = `${time} мс`;
        reactionMessage.textContent = time < 200
          ? '⚡ Невероятная скорость!'
          : time < 300
            ? '🔥 Отличный результат!'
            : time < 450
              ? '👍 Хорошо!'
              : '🐢 Можно быстрее!';
        reactionMessage.style.color = '#39ff14';

        if (bestTime === null || time < bestTime) {
          bestTime = time;
          reactionBest.textContent = `${bestTime} мс`;
        }
      }
    });
  }

  /* ===== 7. Форма контактов ===== */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = document.getElementById('formSuccess');
      success.classList.add('show');
      contactForm.reset();

      setTimeout(() => {
        success.classList.remove('show');
      }, 4000);
    });
  }

  /* ===== 8. Плавная прокрутка для якорей ===== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});