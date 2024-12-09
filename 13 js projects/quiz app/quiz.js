


const questions = [
        {
            question:"which language is not used in creating this Quiz?",
            answers:[
                {text:"HTML", correct:false},
                {text:"bootstrap", correct:true},
                {text:"js", correct:false},
                {text:"css", correct:false},
    
            ]
        },
        {
            question:"which language prem doesn't like?",
            answers:[
                {text:"c#", correct:true},
                {text:"python", correct:false},
                {text:"c++", correct:false},
                {text:"php", correct:false},
    
            ]
        },
        {
            question:"which is most used language worldwide",
            answers:[
                {text:"java", correct:false},
                {text:"js", correct:true},
                {text:"python", correct:false},
                {text:"c#", correct:false},
    
            ]
        },
        {
            question:"which of the following is a framework?",
            answers:[
                {text:"HTML", correct:false},
                {text:"bootstrap", correct:true},
                {text:"js", correct:false},
                {text:"css", correct:false},
    
            ]
        },
        {
            question:"which career prem would choose?",
            answers:[
                {text:"BACK-END DEVELOPER", correct:false},
                {text:"FRONT-END DEVELOPER", correct:false},
                {text:"FULLSTACK DEVELOPER", correct:true},
                {text:"NOT FROM THE  ABOVER", correct:false},
    
            ]
        }
    ];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none"; 
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // Show the Next button
    nextButton.style.display = "block";
    
    // Disable further clicks on answer buttons
    answerButtons.querySelectorAll('.btn').forEach(button => {
        button.removeEventListener('click', selectAnswer);
    });
    
    
    nextButton.addEventListener("click", nextQuestion);
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        
        alert("Quiz completed. Your score: " + score);
    }
}

startQuiz();
