# Bocuse Restaurant Menu Quiz App

This interactive quiz app is designed to help students, staff, and food enthusiasts master the dishes, ingredients, and key facts about the menu at The Bocuse Restaurant. The app uses multiple-choice questions that reinforce menu knowledge in a fun, engaging, and effective way.

## About The Bocuse Restaurant

The Bocuse Restaurant, located at the Culinary Institute of America, is renowned for its modern French cuisine, blending classic techniques with contemporary flavors. Mastering the menu is essential for anyone working, studying, or simply dining at Bocuse.

## Features

- **Multiple-Choice Questions:** Each question references a real dish or fact from the Bocuse Restaurant menu.
- **Randomized Quizzes:** Test your knowledge on ingredients, techniques, courses, and more.
- **Responsive Design:** Usable on both desktop and mobile devices.
- **Scalable Visuals:** Bocuse logo appears subtly in the interface for immersive branding.
- **Immediate Feedback:** See explanations for correct answers to deepen your understanding.

## How to Use

1. Open the app in your browser.
2. Start the quiz.
3. Read each question carefully and select your answer.
4. View instant feedback and explanations.
5. Complete the quiz to review your overall performance.

## Technologies Used

- HTML, CSS, JavaScript
- Responsive design for accessibility
- Scalable PNG logo positioned at the bottom-left of the screen

## Customization

- Edit or add more questions in `questions.js` following this format:
  ```js
  {
    question: "Sample question?",
    choice: ["A", "B", "C", "D"],
    answer: "A",
    explanation: "Explanation of the answer.",
  }
