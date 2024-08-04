const quizData = [
    {
        question:"Which keyword is used to declare a constant in JavaScript?",
        options:["var", "let", "const", "constant"],
        correct:2
    },
    {
        question:"Which method is used to remove the last element from an array in JavaScript?",
        options:["shift()", "pop()", "remove()", "delete()"],
        correct:1
    },
    
    {
        question:"Which operator is used to assign a value to a variable?",
        options:["=", "==", "===", "=>"],
        correct:0
    },
    
    {
        question:"Which of the following is a JavaScript framework",
        options:["Angular", "Django", "Laravel", "Spring"],
        correct:0
    },
    
    {
        question:"What does JSON stand for?",
        options:["JavaScript Oriented Notation","JavaScript Object Notation","Java Syntax Object Notation","JavaScript Operate Notation"],
        correct:1
    }


];

let currentQuestionIndex=0;
let score = 0;

const questionData = document.getElementById("question");
const optionsData = document.getElementById("options");
const btnSubmit = document.getElementById("submit-btn");
const message = document.getElementById("result-message");
const scoreData = document.getElementById("score");

function loadQuestion(){
    const currentQuestion = quizData[currentQuestionIndex];
    questionData.textContent = currentQuestion.question;
    optionsData.innerHTML = '';

    currentQuestion.options.forEach((option,index) =>{
        const optionElement = document.createElement('li');
        optionElement.innerHTML = `
        <input type="radio" name="option" value="${index}" id="option${index}">
        <label for="option${index}">${option}</label>`;

        optionsData.appendChild(optionElement);
    });

    
}

function checkAnswer(){
    const selectedOption = document.querySelector(`input[name="option"]:checked`);
if (!selectedOption){
    message.textContent = "Please choose an answer";
    message.style.color = "red";
    return;
}

const answerIndex = parseInt(selectedOption.value);
const currentQuestion = quizData[currentQuestionIndex];

if(answerIndex === currentQuestion.correct){
    message.textContent = "Correct";
    message.style.color = "Green";
    score++;
    scoreData.textContent = score;
}
else{
    message.textContent = "Wrong! the correct answer is: "+currentQuestion.options[currentQuestion.correct];
    message.style.color = "red";
}

currentQuestionIndex++;

if(currentQuestionIndex < quizData.length){
    setTimeout(()=>{
        message.textContent = "";
        loadQuestion();
    },2000)
}else {
    setTimeout(() => {
        finalScore();
    },2000);
}

}

function finalScore(){
    questionData.textContent = "Quiz completed!";
    optionsData.innerHTML = '';
    btnSubmit.style.display = "none";
    message.textContent = `You scored ${score} out of ${quizData.length}`;
    message.style.color = "blue";
}

btnSubmit.addEventListener('click',checkAnswer);
loadQuestion();