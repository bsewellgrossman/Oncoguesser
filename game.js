const MAX_ATTEMPTS = 6;

let currentCancer = null;
let guesses = [];
let gameOver = false;
let stats = loadStats();

function loadStats() {
    const saved = localStorage.getItem('oncowordle_stats_v3');
    if (saved) {
        return JSON.parse(saved);
    }
    return {
        played: 0,
        won: 0,
        currentStreak: 0,
        maxStreak: 0
    };
}

function saveStats() {
    localStorage.setItem('oncowordle_stats_v3', JSON.stringify(stats));
}

function updateStatsDisplay() {
    document.getElementById('gamesPlayed').textContent = stats.played;
    document.getElementById('gamesWon').textContent = stats.won;
    document.getElementById('winPercent').textContent = stats.played > 0 
        ? Math.round((stats.won / stats.played) * 100) + '%' 
        : '0%';
    document.getElementById('currentStreak').textContent = stats.currentStreak;
}

function getRandomCancer() {
    const index = Math.floor(Math.random() * CANCER_TYPES.length);
    return CANCER_TYPES[index];
}

function renderGame() {
    const data = CANCER_DATA[currentCancer];
    
    const html = `
        <div class="game-area">
            <div class="profile-section">
                <h3>🔬 Histology</h3>
                <div class="histology-container">
                    <img src="${data.histologyImage}" 
                         alt="Histology image" 
                         class="histology-image"
                         onerror="this.onerror=null; this.src=''; this.alt='Image not available'; this.style.display='none'; this.parentNode.innerHTML='<p class=\\'image-error\\'>Histology image not available</p>';">
                    <p class="histology-caption">${data.histologyCaption}</p>
                </div>
            </div>

            <div class="profile-section">
                <h3>🧬 Top Mutated Genes</h3>
                <div class="gene-list">
                    ${data.mutations.map(m => `
                        <span class="gene-tag">${m.gene} <span class="frequency">(${m.frequency}%)</span></span>
                    `).join('')}
                </div>
            </div>

            <div class="profile-section">
                <h3>📈 Copy Number Amplifications</h3>
                <div class="gene-list">
                    ${data.cnv.amplifications.map(a => `
                        <span class="gene-tag amplification">${a.gene} <span class="frequency">(${a.frequency}%)</span></span>
                    `).join('')}
                </div>
            </div>

            <div class="profile-section">
                <h3>📉 Copy Number Deletions</h3>
                <div class="gene-list">
                    ${data.cnv.deletions.map(d => `
                        <span class="gene-tag deletion">${d.gene} <span class="frequency">(${d.frequency}%)</span></span>
                    `).join('')}
                </div>
            </div>

            <div class="profile-section">
                <h3>📊 Clinical Characteristics</h3>
                <div class="clinical-grid">
                    <div class="clinical-card">
                        <div class="value">${data.clinical.medianAge}</div>
                        <div class="label">Median Age at Diagnosis</div>
                    </div>
                    <div class="clinical-card">
                        <div class="value">${data.clinical.malePercent}% / ${data.clinical.femalePercent}%</div>
                        <div class="label">Male / Female</div>
                    </div>
                    <div class="clinical-card">
                        <div class="value">${data.clinical.medianTMB}</div>
                        <div class="label">Median TMB (mut/Mb)</div>
                    </div>
                    <div class="clinical-card">
                        <div class="value">${data.sampleCount}</div>
                        <div class="label">Sample Count</div>
                    </div>
                </div>
            </div>

            <div class="guess-section">
                <div class="input-container">
                    <input type="text" id="guessInput" placeholder="Type a cancer type..." autocomplete="off" ${gameOver ? 'disabled' : ''}>
                    <div class="autocomplete-dropdown" id="autocomplete"></div>
                    <button id="submitGuess" ${gameOver ? 'disabled' : ''}>Guess</button>
                </div>
                
                <div class="guesses-container" id="guessesContainer">
                    ${guesses.map(g => `
                        <div class="guess-row ${g.correct ? 'correct' : 'wrong'}">
                            ${g.correct ? '✅' : '❌'} ${g.guess} ${g.correct ? '- Correct!' : '- Wrong'}
                        </div>
                    `).join('')}
                </div>

                <div class="attempts-counter">
                    Attempts: ${guesses.length} / ${MAX_ATTEMPTS}
                </div>

                ${gameOver ? `
                    <div class="message ${guesses[guesses.length - 1]?.correct ? 'win' : 'lose'}">
                        ${guesses[guesses.length - 1]?.correct 
                            ? '🎉 Congratulations! You got it!' 
                            : `😔 The answer was: ${currentCancer}`}
                    </div>
                    <button class="new-game-btn" onclick="startNewGame()">Play Again</button>
                ` : ''}
            </div>
        </div>
    `;

    document.getElementById('gameContent').innerHTML = html;
    
    if (!gameOver) {
        setupAutocomplete();
        setupEventListeners();
    }
}

function setupAutocomplete() {
    const input = document.getElementById('guessInput');
    const dropdown = document.getElementById('autocomplete');

    input.addEventListener('input', () => {
        const value = input.value.toLowerCase();
        if (value.length < 2) {
            dropdown.style.display = 'none';
            return;
        }

        const matches = CANCER_TYPES.filter(c => 
            c.toLowerCase().includes(value) && 
            !guesses.some(g => g.guess === c)
        );

        if (matches.length > 0) {
            dropdown.innerHTML = matches.map(m => 
                `<div class="autocomplete-item" data-value="${m}">${m}</div>`
            ).join('');
            dropdown.style.display = 'block';

            dropdown.querySelectorAll('.autocomplete-item').forEach(item => {
                item.addEventListener('click', () => {
                    input.value = item.dataset.value;
                    dropdown.style.display = 'none';
                });
            });
        } else {
            dropdown.style.display = 'none';
        }
    });

    input.addEventListener('blur', () => {
        setTimeout(() => dropdown.style.display = 'none', 200);
    });
}

function setupEventListeners() {
    const input = document.getElementById('guessInput');
    const submitBtn = document.getElementById('submitGuess');

    submitBtn.addEventListener('click', submitGuess);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') submitGuess();
    });
}

function submitGuess() {
    const input = document.getElementById('guessInput');
    const guess = input.value.trim();

    if (!guess) return;

    // Check if it's a valid cancer type
    const matchedCancer = CANCER_TYPES.find(c => 
        c.toLowerCase() === guess.toLowerCase()
    );

    if (!matchedCancer) {
        alert('Please select a valid cancer type from the list.');
        return;
    }

    // Check if already guessed
    if (guesses.some(g => g.guess.toLowerCase() === matchedCancer.toLowerCase())) {
        alert('You already guessed that!');
        return;
    }

    const isCorrect = matchedCancer === currentCancer;
    guesses.push({ guess: matchedCancer, correct: isCorrect });

    if (isCorrect) {
        gameOver = true;
        stats.played++;
        stats.won++;
        stats.currentStreak++;
        if (stats.currentStreak > stats.maxStreak) {
            stats.maxStreak = stats.currentStreak;
        }
        saveStats();
    } else if (guesses.length >= MAX_ATTEMPTS) {
        gameOver = true;
        stats.played++;
        stats.currentStreak = 0;
        saveStats();
    }

    updateStatsDisplay();
    renderGame();
}

function startNewGame() {
    currentCancer = getRandomCancer();
    guesses = [];
    gameOver = false;
    renderGame();
}

// Initialize game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    updateStatsDisplay();
    startNewGame();
});
