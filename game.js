(function() {
  // Game state
  let currentCancer = null;
  let attemptsRemaining = 6;
  let guesses = [];
  let gameOver = false;

  // DOM elements
  const guessInput = document.getElementById('guess-input');
  const autocompleteList = document.getElementById('autocomplete-list');
  const submitBtn = document.getElementById('submit-btn');
  const attemptsSpan = document.getElementById('attempts');
  const mutationsContainer = document.getElementById('mutations-container');
  const amplificationsContainer = document.getElementById('amplifications-container');
  const deletionsContainer = document.getElementById('deletions-container');
  const clinicalList = document.getElementById('clinical-list');
  const histologyImg = document.getElementById('histology-img');
  const histologyCaption = document.getElementById('histology-caption');
  const guessList = document.getElementById('guess-list');
  const gameResult = document.getElementById('game-result');
  const newGameBtn = document.getElementById('new-game-btn');

  // Initialize game
  function init() {
    currentCancer = CANCER_TYPES[Math.floor(Math.random() * CANCER_TYPES.length)];
    attemptsRemaining = 6;
    guesses = [];
    gameOver = false;
    
    renderProfile();
    renderGuesses();
    updateAttempts();
    
    gameResult.textContent = '';
    gameResult.className = 'game-result';
    newGameBtn.classList.add('hidden');
    guessInput.value = '';
    guessInput.disabled = false;
    submitBtn.disabled = false;
  }

  // Create a tag element
  function createTag(gene, freq, type) {
    const tag = document.createElement('span');
    tag.className = `tag ${type}`;
    
    const bar = document.createElement('span');
    bar.className = 'tag-bar';
    bar.style.width = `${Math.min(freq, 100)}%`;
    
    const text = document.createElement('span');
    text.className = 'tag-text';
    text.textContent = `${gene} (${freq}%)`;
    
    tag.appendChild(bar);
    tag.appendChild(text);
    
    return tag;
  }

  // Render genomic profile
  function renderProfile() {
    const data = CANCER_DATA[currentCancer];
    
    // Mutations
    mutationsContainer.innerHTML = '';
    data.mutations.forEach(m => {
      mutationsContainer.appendChild(createTag(m.gene, m.freq, 'mutation'));
    });
    
    // Amplifications
    amplificationsContainer.innerHTML = '';
    data.amplifications.forEach(a => {
      amplificationsContainer.appendChild(createTag(a.gene, a.freq, 'amplification'));
    });
    
    // Deletions
    deletionsContainer.innerHTML = '';
    data.deletions.forEach(d => {
      deletionsContainer.appendChild(createTag(d.gene, d.freq, 'deletion'));
    });
    
    // Clinical
    clinicalList.innerHTML = '';
    const clinical = data.clinical;
    
    const items = [
      `Male: ${clinical.male}%`,
      `Female: ${clinical.female}%`,
      `Median Age: ${clinical.medianAge}`,
      `TMB: ${clinical.tmb} mut/Mb`,
      `5-Year Survival: ${clinical.survival5yr}%`
    ];
    
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      clinicalList.appendChild(li);
    });
    
    // Histology - generic caption during gameplay
    histologyImg.src = data.histology;
    histologyImg.alt = 'Tumor histology';
    histologyCaption.innerHTML = '<strong>Fig. 1 |</strong> Tumor histology (H&E stain)';
  }

  // Reveal the cancer type in caption
  function revealHistologyCaption() {
    histologyCaption.innerHTML = `<strong>Fig. 1 |</strong> Histology of ${currentCancer}`;
  }

  // Render guesses
  function renderGuesses() {
    guessList.innerHTML = '';
    guesses.forEach(g => {
      const li = document.createElement('li');
      li.textContent = g;
      guessList.appendChild(li);
    });
  }

  // Update attempts display
  function updateAttempts() {
    attemptsSpan.textContent = attemptsRemaining;
  }

  // Autocomplete
  function showAutocomplete(value) {
    autocompleteList.innerHTML = '';
    
    if (!value) {
      autocompleteList.classList.remove('active');
      return;
    }
    
    const matches = CANCER_TYPES.filter(c => 
      c.toLowerCase().includes(value.toLowerCase()) && !guesses.includes(c)
    );
    
    if (matches.length === 0) {
      autocompleteList.classList.remove('active');
      return;
    }
    
    matches.slice(0, 8).forEach(match => {
      const div = document.createElement('div');
      div.className = 'autocomplete-item';
      div.textContent = match;
      div.addEventListener('click', () => {
        guessInput.value = match;
        autocompleteList.classList.remove('active');
      });
      autocompleteList.appendChild(div);
    });
    
    autocompleteList.classList.add('active');
  }

  // Submit guess
  function submitGuess() {
    const guess = guessInput.value.trim();
    
    if (!guess || gameOver) return;
    
    if (!CANCER_TYPES.includes(guess)) {
      alert('Please select a valid cancer type from the list.');
      return;
    }
    
    if (guesses.includes(guess)) {
      alert('You already guessed that cancer type.');
      return;
    }
    
    guesses.push(guess);
    attemptsRemaining--;
    
    renderGuesses();
    updateAttempts();
    
    guessInput.value = '';
    autocompleteList.classList.remove('active');
    
    if (guess === currentCancer) {
      endGame(true);
    } else if (attemptsRemaining === 0) {
      endGame(false);
    }
  }

  // End game
  function endGame(won) {
    gameOver = true;
    guessInput.disabled = true;
    submitBtn.disabled = true;
    
    // Reveal the cancer type in histology caption
    revealHistologyCaption();
    
    if (won) {
      gameResult.textContent = `Correct! The answer was ${currentCancer}. You got it in ${guesses.length} ${guesses.length === 1 ? 'guess' : 'guesses'}.`;
      gameResult.className = 'game-result win';
    } else {
      gameResult.textContent = `Game over. The answer was ${currentCancer}.`;
      gameResult.className = 'game-result lose';
    }
    
    newGameBtn.classList.remove('hidden');
    saveStats(won, guesses.length);
  }

  // Stats
  function saveStats(won, numGuesses) {
    const stats = JSON.parse(localStorage.getItem('oncowordle_stats_v3') || '{"played":0,"won":0,"guesses":[]}');
    stats.played++;
    if (won) {
      stats.won++;
      stats.guesses.push(numGuesses);
    }
    localStorage.setItem('oncowordle_stats_v3', JSON.stringify(stats));
  }

  // Event listeners
  guessInput.addEventListener('input', (e) => {
    showAutocomplete(e.target.value);
  });

  guessInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      submitGuess();
    }
  });

  submitBtn.addEventListener('click', submitGuess);

  newGameBtn.addEventListener('click', init);

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.guess-input-container')) {
      autocompleteList.classList.remove('active');
    }
  });

  // Start
  init();
})();
