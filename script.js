let currentQuestionIndex = 0;
let score = 0;
let questionsAnswered = 0;
let missedQuestions = [];
let usedQuestions = [];
let selectedQuiz = null;

// Grabbing elements from the DOM
const menuContainer = document.getElementById("menu-container");
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-button");
const menuButton = document.getElementById("menu-button");
const questionTracker = document.getElementById("question-tally");
const questionCounter = document.getElementById("question-counter");
const explanationsContainer = document.getElementById("explanations");

// Adding event listeners to the buttons
restartButton.addEventListener("click", restartQuiz);
menuButton.addEventListener("click", returnToMenu);

// Function to shuffle the array of choices for randomness
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to display the current question
function displayQuestion() {
  resetState();
  let currentQuestion;

  do {
    currentQuestionIndex = Math.floor(
      Math.random() * questions[selectedQuiz].length
    );
  } while (usedQuestions.includes(currentQuestionIndex));

  currentQuestion = questions[selectedQuiz][currentQuestionIndex];
  usedQuestions.push(currentQuestionIndex);

  questionElement.textContent = currentQuestion.question;
  if (currentQuestion.image) {
    const img = document.createElement("img");
    img.src = currentQuestion.image;
    img.alt = "Question image";
    questionElement.appendChild(img);
  }
  shuffleArray(currentQuestion.choice);
  currentQuestion.choice.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () =>
      selectAnswer(button, currentQuestion)
    );
    choicesElement.appendChild(button);
  });
}

// Function to reset the state before displaying a new question
function resetState() {
  while (choicesElement.firstChild) {
    choicesElement.removeChild(choicesElement.firstChild);
  }
  const img = questionElement.querySelector("img");
  if (img) {
    questionElement.removeChild(img);
  }
}

// Function to handle the selection of an answer
function selectAnswer(button, question) {
  if (button.textContent === question.answer) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    highlightCorrectAnswer(question.answer);
    missedQuestions.push(question); // Store the missed question
  }
  Array.from(choicesElement.children).forEach((btn) => {
    btn.disabled = true;
  });
  updateTracker(button.classList.contains("correct"));
  setTimeout(() => {
    questionsAnswered++;
    if (questionsAnswered < 10) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }, 1500);
}

// Function to highlight the correct answer
function highlightCorrectAnswer(correctAnswer) {
  Array.from(choicesElement.children).forEach((button) => {
    if (button.textContent === correctAnswer) {
      button.classList.add("correct");
    }
  });
}

// Function to update the question tracker
function updateTracker(isCorrect) {
  const span = document.createElement("span");
  span.classList.add(isCorrect ? "correct" : "wrong");
  questionTracker.appendChild(span);
  questionCounter.textContent = `${questionsAnswered + 1}/10`;
}

// Function to end the quiz
function endQuiz() {
  quizContainer.style.display = "none";
  scoreContainer.style.display = "block";
  restartButton.style.display = "inline-block"; // Show the retake quiz button
  const percentageScore = (score / 10) * 100;
  scoreElement.textContent = `${percentageScore}%`;
  displayExplanations(); // Display explanations for missed questions
}

// Function to display explanations for missed questions
function displayExplanations() {
  explanationsContainer.innerHTML =
    "<h3>Explanations for Missed Questions:</h3>";
  missedQuestions.forEach((question) => {
    const explanationDiv = document.createElement("div");
    explanationDiv.classList.add("explanation");
    explanationDiv.innerHTML = `<p><strong>Question:</strong> ${question.question}</p>
                                <p><strong>Correct Answer:</strong> ${question.answer}</p>
                                <p><strong>Explanation:</strong> ${question.explanation}</p>`;
    explanationsContainer.appendChild(explanationDiv);
  });
}

// Function to restart the quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  questionsAnswered = 0;
  missedQuestions = []; // Reset missed questions
  usedQuestions = []; // Reset used questions
  questionTracker.innerHTML = "";
  questionCounter.textContent = `${questionsAnswered}/10`;
  explanationsContainer.innerHTML = ""; // Clear explanations
  quizContainer.style.display = "block";
  scoreContainer.style.display = "none";
  restartButton.style.display = "none"; // Hide the retake quiz button
  displayQuestion();
}

// Function to return to the main menu
function returnToMenu() {
  scoreContainer.style.display = "none";
  menuContainer.style.display = "block";
  currentQuestionIndex = 0;
  score = 0;
  questionsAnswered = 0;
  missedQuestions = []; // Reset missed questions
  usedQuestions = []; // Reset used questions
  questionTracker.innerHTML = "";
  questionCounter.textContent = `${questionsAnswered}/10`;
  explanationsContainer.innerHTML = ""; // Clear explanations
  quizContainer.style.display = "none";
  restartButton.style.display = "none"; // Hide the retake quiz button
}

// Function to start the quiz
function startQuiz(quiz) {
  selectedQuiz = quiz;
  menuContainer.style.display = "none";
  quizContainer.style.display = "block";
  shuffleArray(questions[selectedQuiz]);
  displayQuestion();
}

// Event listener to start the quiz when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initial setup if needed
});
