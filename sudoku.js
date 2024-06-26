let currentPuzzle = [];
let currentSolution = [];
let currentPuzzleIndex = 0;
let currentLevel = 1;
let hintCount = 0;
let maxHints = 3;

document.addEventListener('DOMContentLoaded', () => {
    initializeControls();
    addKeyboardEvents();
    loadPuzzle();
});

function loadPuzzle() {
    currentLevel = parseInt(document.getElementById('level').value, 10);
    const levelPuzzles = puzzles.find(p => p.level === currentLevel).puzzles;
    currentPuzzleIndex = 0;
    currentPuzzle = levelPuzzles[currentPuzzleIndex].puzzle;
    currentSolution = levelPuzzles[currentPuzzleIndex].solution;
    hintCount = 0;
    renderGrid();
    updateHintCountdown();
}

function renderGrid() {
    const grid = document.getElementById('sudoku-grid');
    grid.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('td');
            if (currentPuzzle[i][j] !== 0) {
                cell.textContent = currentPuzzle[i][j];
                cell.classList.add('given');
            } else {
                const input = document.createElement('input');
                input.setAttribute('type', 'text');
                input.setAttribute('maxlength', '1');
                input.setAttribute('data-row', i);
                input.setAttribute('data-col', j);
                input.addEventListener('input', validateInput);
                cell.appendChild(input);
            }
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

function validateInput(event) {
    const value = event.target.value;
    if (isNaN(value) || value < 1 || value > 9) {
        event.target.value = '';
    }
}

function getHint() {
    if (hintCount >= maxHints) return;
    hintCount++;
    updateHintCountdown();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (currentPuzzle[i][j] === 0) {
                currentPuzzle[i][j] = currentSolution[i][j];
                renderGrid();
                return;
            }
        }
    }
}

function showSolution() {
    currentPuzzle = JSON.parse(JSON.stringify(currentSolution));
    renderGrid();
}

function checkSolution() {
    const gridInputs = document.querySelectorAll('#sudoku-grid input');
    let correct = true;

    gridInputs.forEach(input => {
        const row = input.getAttribute('data-row');
        const col = input.getAttribute('data-col');
        const value = parseInt(input.value, 10);

        if (value !== currentSolution[row][col]) {
            correct = false;
            input.classList.add('incorrect');
            input.classList.remove('correct');
        } else {
            input.classList.add('correct');
            input.classList.remove('incorrect');
        }
    });

    if (correct) {
        alert("Congratulations! You've solved the puzzle correctly.");
    } else {
        alert("There are some mistakes. Please try again.");
    }
}

function nextPuzzle() {
    const levelPuzzles = puzzles.find(p => p.level === currentLevel).puzzles;
    currentPuzzleIndex = (currentPuzzleIndex + 1) % levelPuzzles.length;
    currentPuzzle = levelPuzzles[currentPuzzleIndex].puzzle;
    currentSolution = levelPuzzles[currentPuzzleIndex].solution;
    hintCount = 0;
    renderGrid();
    updateHintCountdown();
}

function initializeControls() {
    document.getElementById('submit-settings').addEventListener('click', loadPuzzle);
    document.getElementById('hints').addEventListener('change', () => {
        maxHints = parseInt(document.getElementById('hints').value, 10);
        hintCount = 0;
        updateHintCountdown();
    });
    maxHints = parseInt(document.getElementById('hints').value, 10);
    updateHintCountdown();
}

function updateHintCountdown() {
    document.getElementById('countdown-left').innerText = `Hints left: ${maxHints - hintCount}`;
    document.getElementById('countdown-right').innerText = `Hints left: ${maxHints - hintCount}`;
}

function addKeyboardEvents() {
    document.addEventListener('keydown', function(event) {
        const focused = document.activeElement;
        if (focused && focused.tagName === 'INPUT') {
            const row = parseInt(focused.getAttribute('data-row'), 10);
            const col = parseInt(focused.getAttribute('data-col'), 10);
            switch (event.key) {
                case 'ArrowUp':
                    moveToCell(row - 1, col);
                    break;
                case 'ArrowDown':
                    moveToCell(row + 1, col);
                    break;
                case 'ArrowLeft':
                    moveToCell(row, col - 1);
                    break;
                case 'ArrowRight':
                    moveToCell(row, col + 1);
                    break;
            }
        }
    });
}

function moveToCell(row, col) {
    if (row >= 0 && row < 9 && col >= 0 && col < 9) {
        const cell = document.querySelector(`input[data-row="${row}"][data-col="${col}"]`);
        if (cell) {
            cell.focus();
        }
    }
}

function moveToNextCell(row, col) {
    let nextCol = col + 1;
    let nextRow = row;
    if (nextCol >= 9) {
        nextCol = 0;
        nextRow++;
    }
    if (nextRow < 9) {
        moveToCell(nextRow, nextCol);
    }
}
