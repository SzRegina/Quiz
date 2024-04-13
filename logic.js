
const questions =[
    {
        question: "Melyik film nyerte el a legjobb filmért járó Oscar díjat 2024-ben?",
        answers: [
            {text:"Barbie", correct: false},
            {text:"Oppenheimer", correct: true},
            {text:"Szegény párák", correct: false},
            {text:"Megfojtott virágok", correct: false},
        ]
    },
    {
        question: "Melyik NEM ritmusjáték az alábbiak közül?",
        answers: [
            {text:"Metal: Hellsinger", correct: false},
            {text:"Nightingale", correct: true},
            {text:"Crypt of the Necrodancer", correct: false},
            {text:"Musedash", correct: false},
        ]
    },
    {
        question: "Melyik animéből származik az idézet: ~ Ha nem hiszel magadban, higyj abban, aki hisz benned ~?",
        answers: [
            {text:"Naruto", correct: false},
            {text:"Blue Eyed Samurai", correct: false},
            {text:"Shiki", correct: false},
            {text:"Gurren Lagann", correct: true},
        ]
    },
    {
        question: "A The Boys c. sorozatban mi A-Train valódi neve?",
        answers: [
            {text:"Hughie Campbell", correct: false},
            {text:"John Gillman", correct: false},
            {text:"Reggie Franklin", correct: true},
            {text:"Kevin Moskowitz", correct: false},
        ]
    },
    {
        question: "Melyik országból származik a FromSoftvare Inc.?",
        answers: [
            {text:"Japán", correct: true},
            {text:"Magyarország", correct: false},
            {text:"USA", correct: false},
            {text:"Fülöp-szigetek", correct: false},
        ]
    },
    {
        question: "A Supernatural/Odaát c. sorozatban mi a főszereplő testvérpár vezetékneve?",
        answers: [
            {text:"Whinchester", correct: true},
            {text:"Jackson", correct: false},
            {text:"Crowly", correct: false},
            {text:"Padalecki", correct: false},
        ]
    },
    {
        question: "Hány évadot élt meg a Barátok Közt?",
        answers: [
            {text:"13", correct: false},
            {text:"25", correct: false},
            {text:"8", correct: false},
            {text:"23", correct: true},
        ]
    },
    {
        question: "Az alábbiak közül melyik könyvet/könyveket NEM filmesítették még meg?",
        answers: [
            {text:"Az idő kereke", correct: false},
            {text:"A szél neve", correct: true},
            {text:"A lány a vonaton", correct: false},
            {text:"A setét torony", correct: false},
        ]
    },
    {
        question: "Hogy hívják a Metallica frontemberét?",
        answers: [
            {text:"Sully Erna", correct: false},
            {text:"Paul Bruce Dickinson", correct: false},
            {text:"James Hetfield", correct: true},
            {text:"Rob Halford", correct: false},
        ]
    },
    {
        question: "Melyik dal volt az Assassin's creed Unity trailerében?",
        answers: [
            {text:"I ran (So far away) - A flock of seagulls", correct: false},
            {text:"Keane - Somewhere only we know", correct: false},
            {text:"Tears for Fears - Head over heels", correct: false},
            {text:"Lorde- Everybody wants to rule the world", correct: true},
        ]
    }

];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
resetState();
let currentQuestion = questions[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answers => {
    const button =document.createElement("button");
    button.innerHTML = answers.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answers.correct){
        button.dataset.correct = answers.correct;
    }
    button.addEventListener("click", selectAnswer)

});
}
function resetState(){
nextButton.style.display = "none";
while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
}

}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button  =>{
        if(button.dataset.correct === "true"){ 
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `Szép munka! Szerzett pontjaid: ${score} az összesből: ${questions.length}!`;
    nextButton.innerHTML = "Új játék?";
    nextButton.style.display = "block";
}

function handleNexButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNexButton();
      }else{
        startQuiz();
      }  
})
startQuiz();

