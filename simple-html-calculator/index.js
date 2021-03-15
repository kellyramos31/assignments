
const addItUpForm = document.addIt

addItUpForm.addEventListener("submit", e => {
    e.preventDefault();
    const firstNum = addItUpForm.addFirst.value;
    const secondNum = addItUpForm.addSecond.value;
    const addAnswer = Number(firstNum) + Number(secondNum);
    //console.log(addAnswer);
    const sumBox = document.getElementById("add-answer");
    sumBox.textContent = addAnswer;
})


const subtractForm = document.subtractIt

subtractForm.addEventListener("submit", e => {
    e.preventDefault();
    const first = subtractForm.subtractFirst.value;
    const second = subtractForm.subtractSecond.value;
    const subAnswer = Number(first) - Number(second);
    console.log(subAnswer);
    const diffBox = document.getElementById("sub-answer");
    diffBox.textContent = subAnswer;
})

const multiplyForm = document.multiplyIt

multiplyForm.addEventListener("submit", e => {
    e.preventDefault();
    const firstOne = multiplyForm.multiplyFirst.value;
    const secondOne = multiplyForm.multiplySecond.value;
    const prodAnswer = Number(firstOne) * Number(secondOne);
    console.log(prodAnswer);
    const prodBox = document.getElementById("prod-answer");
    prodBox.textContent = prodAnswer;
})

