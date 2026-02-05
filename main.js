document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersContainer = document.querySelector('.lotto-numbers');

    const generateNumbers = () => {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    };

    const displayNumbers = (numbers) => {
        numbersContainer.innerHTML = '';
        numbers.forEach(number => {
            const numberDiv = document.createElement('div');
            numberDiv.className = 'lotto-number';
            numberDiv.textContent = number;
            numbersContainer.appendChild(numberDiv);
        });
    };

    generateBtn.addEventListener('click', () => {
        const newNumbers = generateNumbers();
        displayNumbers(newNumbers);
    });

    // Initial display
    displayNumbers(['?', '?', '?', '?', '?', '?']);

    // Theme toggling logic
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        let theme = 'light-mode'; // Default to light mode
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark-mode';
        }
        localStorage.setItem('theme', theme);
    });
});
