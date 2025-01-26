    // let roundCount = 0;
    // let totalScoresVisible = true;
    // let timerInterval;
    // let seconds = 0;
    // let minutes = 0;
    // let hours = 0;

    // function toggleScores() {
    //     const totalCells = document.querySelectorAll('#totalRow td');
    //     totalCells.forEach(cell => cell.classList.toggle('hidden'));
    //     totalScoresVisible = !totalScoresVisible;
    //     const eyeIcon = document.getElementById('toggleScores');
    //     eyeIcon.classList.toggle('fa-eye-slash', !totalScoresVisible);
    //     eyeIcon.classList.toggle('fa-eye', totalScoresVisible);
    // }

    // function setupPlayers() {
    //     const playerCount = parseInt(document.getElementById("playerCount").value);
    //     const playerNamesDiv = document.getElementById("playerNames");
    //     const playerInputs = document.getElementById("playerInputs");
    //     playerInputs.innerHTML = "";

    //     if (!playerCount || playerCount < 2 || playerCount > 5) {
    //         alert("Vui lòng nhập số lượng người chơi hợp lệ (từ 2 đến 5)!");
    //         return;
    //     }

    //     for (let i = 1; i <= playerCount; i++) {
    //         const input = document.createElement("input");
    //         input.type = "text";
    //         input.placeholder = `Người chơi ${i}`;
    //         input.id = `player${i}`;
    //         playerInputs.appendChild(input);
    //         playerInputs.appendChild(document.createElement("br"));
    //     }

    //     playerNamesDiv.style.display = "block";
    // }

    // function startGame() {
    //     const playerCount = parseInt(document.getElementById("playerCount").value);
    //     const scoreTable = document.getElementById("scoreTable");
    //     const playerNamesRow = document.getElementById("playerNamesRow");
    //     const totalRow = document.getElementById("totalRow");

    //     playerNamesRow.innerHTML = '';
    //     totalRow.innerHTML = '';

    //     // Create the player name headers
    //     for (let i = 1; i <= playerCount; i++) {
    //         const playerNameCell = document.createElement("th");
    //         const playerName = document.getElementById(`player${i}`).value || `Người chơi ${i}`;
    //         playerNameCell.textContent = playerName;
    //         playerNamesRow.appendChild(playerNameCell);
    //     }
    //     playerNamesRow.appendChild(document.createElement("th")).textContent = "";

    //     // Create the total cells for each player
    //     for (let i = 1; i <= playerCount; i++) {
    //         const totalCell = document.createElement("td");
    //         totalCell.id = `total${i}`;
    //         totalCell.textContent = "0";
    //         totalRow.appendChild(totalCell);
    //     }
    //     totalRow.appendChild(document.createElement("td")).textContent = " ";

    //     // Show the score table and hide setup
    //     scoreTable.style.display = "table";
    //     document.getElementById("setup").style.display = "none";
    //     document.getElementById("gameControls").style.display = "flex";
    //     startTimer();
    //     document.getElementById("addRoundButton").classList.remove("hidden");
    // }

    // function addRow() {
    //     roundCount++;
    //     document.getElementById("roundText").textContent = `Số ván: ${roundCount}`;
    //     const playerCount = document.getElementById("playerNamesRow").children.length - 1;
    //     const scoreBody = document.getElementById("scoreBody");
    //     const row = document.createElement("tr");
    //     row.className = "score-row";

    //     for (let i = 1; i <= playerCount; i++) {
    //         const cell = document.createElement("td");
    //         const input = document.createElement("input");
    //         input.type = "number";
    //         input.placeholder = "0";
    //         input.oninput = () => calculateRowTotal(row);
    //         cell.appendChild(input);
    //         row.appendChild(cell);
    //     }

    //     const totalCell = document.createElement("td");
    //     totalCell.textContent = "0";
    //     row.appendChild(totalCell);

    //     scoreBody.appendChild(row);
    // }

    // function calculateRowTotal(row) {
    //     const inputs = row.querySelectorAll("input");
    //     let sum = 0;
    //     inputs.forEach(input => {
    //         sum += parseInt(input.value) || 0;
    //     });
    //     row.querySelector("td:last-child").textContent = sum;
    //     calculateTotals();
    // }

    // function calculateTotals() {
    //     const totalCells = document.querySelectorAll("#totalRow td");
    //     const rows = document.querySelectorAll(".score-row");

    //     // Reset totals before calculating new totals
    //     totalCells.forEach(cell => cell.textContent = "0");

    //     rows.forEach(row => {
    //         const inputs = row.querySelectorAll("input");
    //         inputs.forEach((input, inputIndex) => {
    //             const score = parseInt(input.value) || 0;
    //             const totalCell = totalCells[inputIndex];
    //             totalCell.textContent = parseInt(totalCell.textContent) + score;
    //         });
    //     });
    // }

    // function startTimer() {
    //     timerInterval = setInterval(() => {
    //         seconds++;
    //         if (seconds === 60) {
    //             seconds = 0;
    //             minutes++;
    //         }
    //         if (minutes === 60) {
    //             minutes = 0;
    //             hours++;
    //         }
    //         document.getElementById("clock").textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    //     }, 1000);
    // }

    let roundCount = 0;
let totalScoresVisible = true;
let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

function toggleScores() {
    const totalCells = document.querySelectorAll('#totalRow td');
    totalCells.forEach(cell => cell.classList.toggle('hidden'));
    totalScoresVisible = !totalScoresVisible;
    const eyeIcon = document.getElementById('toggleScores');
    eyeIcon.classList.toggle('fa-eye-slash', !totalScoresVisible);
    eyeIcon.classList.toggle('fa-eye', totalScoresVisible);
}

function setupPlayers() {
    const playerCount = parseInt(document.getElementById("playerCount").value);
    const playerNamesDiv = document.getElementById("playerNames");
    const playerInputs = document.getElementById("playerInputs");
    playerInputs.innerHTML = "";

    if (!playerCount || playerCount < 2 || playerCount > 5) {
        alert("Vui lòng nhập số lượng người chơi hợp lệ (từ 2 đến 5)!");
        return;
    }

    for (let i = 1; i <= playerCount; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = `Người chơi ${i}`;
        input.id = `player${i}`;
        playerInputs.appendChild(input);
        playerInputs.appendChild(document.createElement("br"));
    }

    playerNamesDiv.style.display = "block";
}

function startGame() {
    const playerCount = parseInt(document.getElementById("playerCount").value);
    const scoreTable = document.getElementById("scoreTable");
    const playerNamesRow = document.getElementById("playerNamesRow");
    const totalRow = document.getElementById("totalRow");

    playerNamesRow.innerHTML = '';
    totalRow.innerHTML = '';

    // Create the player name headers
    for (let i = 1; i <= playerCount; i++) {
        const playerNameCell = document.createElement("th");
        const playerName = document.getElementById(`player${i}`).value || `Người chơi ${i}`;
        playerNameCell.textContent = playerName;
        playerNamesRow.appendChild(playerNameCell);
    }
    playerNamesRow.appendChild(document.createElement("th")).textContent = "";

    // Create the total cells for each player
    for (let i = 1; i <= playerCount; i++) {
        const totalCell = document.createElement("td");
        totalCell.id = `total${i}`;
        totalCell.textContent = "0";
        totalRow.appendChild(totalCell);
    }
    totalRow.appendChild(document.createElement("td")).textContent = " ";

    // Show the score table and hide setup
    scoreTable.style.display = "table";
    document.getElementById("setup").style.display = "none";
    document.getElementById("gameControls").style.display = "flex";
    startTimer();
    document.getElementById("addRoundButton").classList.remove("hidden");

    loadDataFromLocalStorage();
}

function addRow() {
    roundCount++;
    document.getElementById("roundText").textContent = `Số ván: ${roundCount}`;
    const playerCount = document.getElementById("playerNamesRow").children.length - 1;
    const scoreBody = document.getElementById("scoreBody");
    const row = document.createElement("tr");
    row.className = "score-row";

    for (let i = 1; i <= playerCount; i++) {
        const cell = document.createElement("td");
        const input = document.createElement("input");
        input.type = "number";
        input.placeholder = "0";
        input.oninput = () => {
            calculateRowTotal(row);
            saveDataToLocalStorage();
        };
        cell.appendChild(input);
        row.appendChild(cell);
    }

    const totalCell = document.createElement("td");
    totalCell.textContent = "0";
    row.appendChild(totalCell);

    scoreBody.appendChild(row);
}

function calculateRowTotal(row) {
    const inputs = row.querySelectorAll("input");
    let sum = 0;
    inputs.forEach(input => {
        sum += parseInt(input.value) || 0;
    });
    row.querySelector("td:last-child").textContent = sum;
    calculateTotals();
}

function calculateTotals() {
    const totalCells = document.querySelectorAll("#totalRow td");
    const rows = document.querySelectorAll(".score-row");

    // Reset totals before calculating new totals
    totalCells.forEach(cell => cell.textContent = "0");

    rows.forEach(row => {
        const inputs = row.querySelectorAll("input");
        inputs.forEach((input, inputIndex) => {
            const score = parseInt(input.value) || 0;
            const totalCell = totalCells[inputIndex];
            totalCell.textContent = parseInt(totalCell.textContent) + score;
        });
    });
}

function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        document.getElementById("clock").textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function saveDataToLocalStorage() {
    const roundData = [];
    const playerCount = document.getElementById("playerNamesRow").children.length - 1;
    const rows = document.querySelectorAll(".score-row");

    rows.forEach(row => {
        const scores = [];
        const inputs = row.querySelectorAll("input");
        inputs.forEach(input => {
            scores.push(parseInt(input.value) || 0);
        });
        roundData.push(scores);
    });

    const totalScores = [];
    for (let i = 1; i <= playerCount; i++) {
        totalScores.push(parseInt(document.getElementById(`total${i}`).textContent) || 0);
    }

    localStorage.setItem('roundData', JSON.stringify(roundData));
    localStorage.setItem('totalScores', JSON.stringify(totalScores));
}

function loadDataFromLocalStorage() {
    const roundData = JSON.parse(localStorage.getItem('roundData')) || [];
    const totalScores = JSON.parse(localStorage.getItem('totalScores')) || [];

    const playerCount = document.getElementById("playerNamesRow").children.length - 1;
    const scoreBody = document.getElementById("scoreBody");

    roundData.forEach((scores, index) => {
        const row = document.createElement("tr");
        row.className = "score-row";

        scores.forEach((score, i) => {
            const cell = document.createElement("td");
            const input = document.createElement("input");
            input.type = "number";
            input.value = score;
            input.oninput = () => {
                calculateRowTotal(row);
                saveDataToLocalStorage();
            };
            cell.appendChild(input);
            row.appendChild(cell);
        });

        const totalCell = document.createElement("td");
        totalCell.textContent = totalScores[index] || 0;
        row.appendChild(totalCell);

        scoreBody.appendChild(row);
    });

    calculateTotals();
}

function resetData() {
    localStorage.removeItem('roundData');
    localStorage.removeItem('totalScores');
    window.location.reload();
}
