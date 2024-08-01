'use strict';

const quizData = [
    {
        question: 'Which language runs in a web browser?',
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct : 'd'
    },
    {
        question: 'Who is the father of Computers?',
        a: "James Gosling",
        b: "Dennis Ritchie",
        c: "Charles Babbage",
        d: "Bjarne Stroustrup",
        correct : 'c'
    },
    {
        question: 'Which of the following computer language is written in binary codes only?',
        a: "pascal",
        b: "machine language",
        c: "C",
        d: "C#",
        correct : 'b'
    },
    {
        question: 'Which of the following is the smallest unit of data in a computer?',
        a: "Bit",
        b: "KB",
        c: "Nibble",
        d: "Byte",
        correct : 'a'
    },

];   

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');   

const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();     

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    deselectAnswers();
}                   


function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) answer = answerEl.id;
    });

    return answer;
}

submitBtn.addEventListener('click', function(){
    const answer = getSelected();
    if(answer) {
        console.log(answer === quizData[currentQuiz].correct);
        if(answer === quizData[currentQuiz].correct) {
            score ++;
        }
        currentQuiz ++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else { 
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} question </h2>

            <button onclick = "location.reload()">Reload</button>
            `;  
        }
    } 
});

