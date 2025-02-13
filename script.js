document.addEventListener("DOMContentLoaded", () => {
  const questionContainers = document.querySelectorAll(".question-container");
  const answers = document.querySelectorAll(".answers li");
  let currentQuestionIndex = 0;

  function showQuestion(index) {
    questionContainers.forEach((container, i) => {
      container.classList.toggle("active", i === index);
    });
  }

  function showNextQuestion() {
    if (currentQuestionIndex < questionContainers.length - 1) {
      currentQuestionIndex++;
      showQuestion(currentQuestionIndex);
    } else {
      showResult();
    }
  }

  function showResult() {
    let correctAnswers = 0;
    answers.forEach((answer) => {
      if (
        answer.dataset.correct === "true" &&
        answer.classList.contains("selected")
      ) {
        correctAnswers++;
      }
    });

    let message = "";
    if (correctAnswers >= 8) {
      message = "Я тебя очень очень люблю, киса моя!!!";
    } else if (correctAnswers >= 4) {
      message = "Я тебя люблю";
    } else {
      message = "ЭЭЭ, давай переделывай";
    }

    const resultMessage = document.createElement("div");
    resultMessage.classList.add("result-message");
    resultMessage.textContent = `Вы набрали ${correctAnswers} из 10. ${message}`;
    document.querySelector(".quiz-container").appendChild(resultMessage);
  }

  answers.forEach((answer) => {
    answer.addEventListener("click", () => {
      answer.classList.toggle("selected");
      showNextQuestion();
    });
  });

  showQuestion(currentQuestionIndex);
});
