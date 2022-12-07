
startButton = document.querySelector('#startGame');
giveUpButton = document.querySelector('#getAnswer');
tryAgainButton = document.querySelector('#tryAgain');

questionDataField = document.querySelector('#questionData');
questionField = document.querySelector('#question');
answerField = document.querySelector('#answer');

function render(category, difficulty, question, answer) {
    startButton.classList.add('disappear');
    giveUpButton.classList.remove('notVisible');
    tryAgainButton.classList.remove('notVisible');


    questionDataField.innerHTML = `${category} - ${difficulty}`;
    questionField.innerHTML = question;
    answerField.classList.add('notVisible');
    answerField.innerHTML = answer;
}

async function getNewQuestion() {
    let response = await fetch('http://jservice.io/api/random?count=1');
    let data = await response.json();
    let result = await data[0];

    let category = await result.category.title;
    let difficulty = await result.value;
    let question = await result.question;
    let answer = await result.answer;

    console.log(await result);

    render(await category, await difficulty, await question, await answer);
}
function showAnswer() {
    answerField.classList.remove('notVisible');
}

startButton.addEventListener('click', getNewQuestion);
tryAgainButton.addEventListener('click', getNewQuestion);
giveUpButton.addEventListener('click', showAnswer)


