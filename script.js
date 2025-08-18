import { quizData } from './data.js';

const startBtn = document.getElementById('start-quiz');
const questionContainer = document.getElementById('question-container');


questionContainer.style.display = 'none';
startBtn.addEventListener('click', startquiz);

function startquiz() {
    const quizContainer = document.getElementById('main-container');
    quizContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    loadQuiz();
}

function loadQuiz() {
    questionContainer.innerHTML = ''; // Clear previous questions

    quizData.forEach((quiz, index) => {
        const questionDisplay = document.createElement('div');
        questionDisplay.classList.add('question-bank');

        const questionInput = document.createElement('h3');
        questionInput.classList.add('question-text');
        questionInput.textContent = quiz.question;
        questionDisplay.append(questionInput);

        // Add options
        quiz.options.forEach(option => {
            const optionBtn = document.createElement('button');
            optionBtn.textContent = option;
            optionBtn.classList.add('option-btn');

            optionBtn.addEventListener('click', () => {
                // Prevent clicking again
                if (optionBtn.disabled) return;
            
                // Highlight correct/incorrect
                if (option === quiz.answer) {
                    optionBtn.style.backgroundColor = '#94D7A2'; // green
                } else {
                    optionBtn.style.backgroundColor = '#F8BCBC'; // red
                }
            
                // Disable all options for this question
                const allOptions = questionDisplay.querySelectorAll('.option-btn');
                allOptions.forEach(btn => btn.disabled = true);
            });
            

            questionDisplay.append(optionBtn);
        });

        questionContainer.append(questionDisplay);
    });

    const checkBtn = document.createElement('button');
    checkBtn.textContent = 'Check answers';
    checkBtn.classList.add('check-btn');
    checkBtn.addEventListener('click', () => {
        alert('Answers checked!'); // Placeholder for checking answers logic
    });

    questionContainer.append(checkBtn);
}

