import { quizData } from './data.js';

const startBtn = document.getElementById('start-quiz');

startBtn.addEventListener('click', startquiz);

function startquiz() {
    const quizContainer = document.getElementById('main-container');
    quizContainer.style.display = 'none';
}

