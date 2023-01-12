

{
const quiestionArray = [
    {
        quiestionText: "問題文1です問題文1です問題文1です問題文1です問題文1です問題文1です問題文1です問題文1です問題文1です問題文1です",
        answerButtons: ["1です。", "2です。", "3です。", "4です。"],
        correctAnswer: 1
    },
    {
        quiestionText: "問題文2です問題文2です問題文2です問題文2です問題文2です問題文2です問題文2です問題文2です問題文2です問題文2です",
        answerButtons: ["1です。", "2です。", "3です。", "4です。"],
        correctAnswer: 3
    },
    {
        quiestionText: "問題文3です問題文3です問題文3です問題文3です問題文3です問題文3です問題文3です問題文3です問題文3です問題文3です",
        answerButtons: ["1です。", "2です。", "3です。", "4です。"],
        correctAnswer: 4
    },
    {
        quiestionText: "問題文4です問題文4です問題文4です問題文4です問題文4です問題文4です問題文4です問題文4です問題文4です問題文4です",
        answerButtons: ["1です。", "2です。", "3です。", "4です。"],
        correctAnswer: 4
    },
    {
        quiestionText: "問題文5です問題文5です問題文5です問題文5です問題文5です問題文5です問題文5です問題文5です問題文5です問題文5です",
        answerButtons: ["1です。", "2です。", "3です。", "4です。"],
        correctAnswer: 4
    },
];

const answerButtons = document.getElementsByClassName('answer-button');
let quizIndexElement = document.getElementById('quiz-index');
let quizTextElement = document.getElementById('quiz-text');

let quizIndex = 0;

function quizJudge(answerButtonIndex) {
    let result = "正誤";
    if(answerButtonIndex+1 === quiestionArray[quizIndex].correctAnswer) {
        result = "正解です。"
    } else {
        result = "不正解です。"
    }
    return result;
}

function setQuiz(quizArrayIndex) {
    if (quizArrayIndex < quiestionArray.length) {
        quizIndexElement.textContent = quizArrayIndex+1;
        quizTextElement.textContent = quiestionArray[quizArrayIndex].quiestionText;
    } else {
        console.log("回答数が問題数を超えました。");
    }
    
}

function quizHandler(e) {
    if (quizIndex < quiestionArray.length){
        console.log(quizIndex)
        
        console.log(quizJudge(this.answere));
        quizIndex++;
        setQuiz(quizIndex);
    } else {
        console.log("回答数が問題数を超えました。");
        
    }
    
}

function quizShow() {
    setQuiz(quizIndex);
    console.log("test");
    for(let i=0; i<answerButtons.length; i++) {
        answerButtons[i].addEventListener('click', {answere: i, handleEvent: quizHandler});
    }
}

quizShow();

}