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

function renderMutationTable(mutations) {
    return `
        <table class="data-table">
            <thead>
                <tr>
                    <th>Gene</th>
                    <th>Frequency</th>
                </tr>
            </thead>
            <tbody>
                ${mutations.map(m => `
                    <tr>
                        <td>${m.gene}</td>
                        <td>
                            <span class="frequency-bar" style="width: ${Math.min(parseFloat(m.frequency) * 2, 100)}px;"></span>
                            ${m.frequency}%
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function renderCNVTable(items, type) {
    const cssClass = type === 'amplification' ? 'amplification' : 'deletion';
    return `
        <table class="data-table">
            <thead>
                <tr>
                    <th>Gene</th>
                    <th>Frequency</th>
                </tr>
            </thead>
            <tbody>
                ${items.map(item => `
                    <tr>
                        <td>${item.gene}</td>
                        <td>
                            <span class="frequency-bar ${cssClass}" style="width: ${Math.min(parseFloat(item.frequency) * 2, 100)}px;"></span>
                            ${item.frequency}%
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function renderGame() {
    const data = CANCER_DATA[currentCancer];
    
    const html = `
        <div class="game-area">
            <div class="profile-section">
                <h3>Histology</h3>
                <div class="histology-container">
                    <img src="${data.histologyImage}" 
                         alt="Histology image" 
                         class="histology-image"
                         onerror="this.onerror=null; this.src=''; this.alt='Image not available'; this.style.display='none'; this.parentNode.innerHTML='<p class=\\'image-error\\'>Histology image not available</p>';">
                    <p class="histology-caption">${data.histologyCaption}</p>
                </div>
            </div>

            <div class="profile-section">
                <h3>Somatic Mutations</h3>
                ${renderMutationTable(data.mutations)}
            </div>

            <div class="profile-section">
                <h3>Copy Number Alterations</h3>
                <div class="cnv-container">
                    <div class="cnv-section">
                        <h4>Amplifications</h4>
                        ${renderCNVTable(data.cnv.amplifications, 'amplification')}
                    </div>
                    <div class="cnv-section">
                        <h4>Deletions</h4>
                        ${renderCNVTable(data.cnv.deletions, 'deletion')}
                    </div>
                </div>
            </div>

            <div class="profile-section">
                <h3>Clinical Characteristics</h3>
                <div class="clinical-grid">
                    <div class="clinical-card">
                        <div class="value">${data.clinical.medianAge}</div>
                        <div class="label">Median Age</div>
                    </div>
                    <div class="clinical-card">
                        <div class="value">${data.clinical.malePercent}/${data.clinical.femalePercent}</div>
                        <div class="label">Male/Female %</div>
                    </div>
                    <div class="clinical-card">
                        <div class="value">${data.clinical.medianTMB}</div>
                        <div class="label">TMB (mut/Mb)</div>
                    </div>
                    <div class="clinical-card">
                        <div class="value">${data.sampleCount.toLocaleString()}</div>
                        <div class="label">Samples (n)</div>
                    </div>
                </div>
            </div>

            <div class="guess-section">
                <div class="input-container">
                    <input type="text" id="guessInput" placeholder="Enter cancer type..." autocomplete="off" ${gameOver ? 'disabled' : ''}>
                    <div class="autocomplete-dropdown" id="autocomplete"></div>
                    <button id="submitGuess" ${gameOver ? 'disabled' : ''}>Submit</button>
                </div>
                
                <div class="guesses-container" id="guessesContainer">
                    ${guesses.map(g => `
                        <div class="guess-row ${g.correct ? 'correct' : 'wrong'}">
                            ${g.correct ? '✓' : '✗'} ${g.guess} ${g.correct ? '— Correct' : '— Incorrect'}
                        </div>
                    `).join('')}
                </div>

                <div class="attempts-counter">
                    Attempt ${guesses.length} of ${MAX_ATTEMPTS}
                </div>

                ${gameOver ? `
                    <div class="message ${guesses[guesses.length - 1]?.correct ? 'win' : 'lose'}">
                        ${guesses[guesses.length - 1]?.correct 
                            ? 'Correct! Well done.' 
                            : `The answer was: ${currentCancer}`}
                    </div>
                    <button class="new-game-btn" onclick="startNewGame()">New Game</button>
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

    const matchedCancer = CANCER_TYPES.find(c => 
        c.toLowerCase() === guess.toLowerCase()
    );

    if (!matchedCancer) {
        alert('Please select a valid cancer type from the list.');
        return;
    }

    if (guesses.some(g => g.guess.toLowerCase() === matchedCancer.toLowerCase())) {
        alert('You already guessed that.');
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
