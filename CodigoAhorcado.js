        // Lista de palabras para adivinar
        const words = ["javascript", "programacion", "desarrollo", "ahorcado", "tecnologia"];
        
        // Variables de juego
        let word = "";
        let guessedLetters = [];
        let incorrectGuesses = 0;

        // Función para elegir una palabra al azar
        function chooseRandomWord() {
            word = words[Math.floor(Math.random() * words.length)];
            guessedLetters = [];
            incorrectGuesses = 0;
            updateWordDisplay();
        }

        // Función para actualizar la pantalla de juego
        function updateWordDisplay() {
            const wordDisplay = document.getElementById("word-display");
            let displayWord = "";
            for (const letter of word) {
                if (guessedLetters.includes(letter)) {
                    displayWord += letter;
                } else {
                    displayWord += "_";
                }
            }
            wordDisplay.textContent = displayWord;
            checkGameStatus();
        }

        // Función para comprobar el estado del juego
        function checkGameStatus() {
            const guessesLeft = 6 - incorrectGuesses;
            const guessesLeftDisplay = document.getElementById("guesses-left");
            guessesLeftDisplay.textContent = `Intentos restantes: ${guessesLeft}`;

            if (incorrectGuesses >= 6) {
                alert("Perdiste. La palabra era: " + word);
                chooseRandomWord();
            }

            if (word === document.getElementById("word-display").textContent) {
                alert("¡Ganaste!");
                chooseRandomWord();
            }
        }

        // Función para adivinar una letra
        function guessLetter() {
            const guessInput = document.getElementById("guess-input");
            const letter = guessInput.value.toLowerCase();

            if (guessedLetters.includes(letter)) {
                alert("Ya adivinaste esa letra.");
            } else if (word.includes(letter)) {
                guessedLetters.push(letter);
                updateWordDisplay();
            } else {
                incorrectGuesses++;
                updateWordDisplay();
            }

            guessInput.value = "";
        }

        // Inicializar el juego al cargar la página
        chooseRandomWord();