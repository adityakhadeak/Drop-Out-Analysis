import React, { useState } from 'react';
import '../Styles/Qna.css';
function Qna() {
  const [questions, setQuestions] = useState([
    { id: 1, question: 'What should I do after dropping out of school?', answer: 'You can explore vocational courses, skill development programs, or consider alternative education options.' },
    { id: 2, question: 'Are there any scholarships available for dropout students in Gujarat?', answer: 'Yes, there are various scholarship programs available. You can check with the government or local educational institutions for details.' },
     // Add more questions and answers here
    { id: 3, question: 'How can I find vocational training programs in Gujarat?', answer: 'You can visit local skill development centers or check online platforms for available programs.' },
    { id: 4, question: 'Is there a minimum age requirement for enrolling in vocational courses?', answer: 'The eligibility criteria may vary depending on the course. It is recommended to check with the specific program or institution.' },
    { id: 5, question: 'What are some alternative education options for dropout students?', answer: 'Alternative options may include open schooling, distance education, or adult education programs.' },

    // Add more questions and answers here
  ]);

  const [newQuestion, setNewQuestion] = useState('');
  const [userQuestions, setUserQuestions] = useState([]);

  const handleQuestionChange = (event) => {
    setNewQuestion(event.target.value);
  };

  const handleSubmitQuestion = (event) => {
    event.preventDefault();
    if (newQuestion.trim() === '') return;

    // Generate a unique ID for the new question
    const newQuestionObj = { id: Date.now(), question: newQuestion, answer: '' };

    setUserQuestions([...userQuestions, newQuestionObj]);
    setNewQuestion('');
  };

  return (
    <div className='Mainqna'>
      <div className='cont'>
      <h1>Q&A for Dropout Students in Gujarat</h1>
      <div className="qa-section">
        <h2>Frequently Asked Questions</h2>
        <ul>
          {questions.map((qna) => (
            <li key={qna.id}>
              <strong>Q: {qna.question}</strong>
              <p>A: {qna.answer}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="qa-section">
        <h2>Ask Your Question</h2>
        <form onSubmit={handleSubmitQuestion}>
          <textarea
            placeholder="Ask your question..."
            value={newQuestion}
            onChange={handleQuestionChange}
            rows="4"
            cols="50"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      {userQuestions.length > 0 && (
        <div className="qa-section">
          <h2>Your Questions</h2>
          <ul>
            {userQuestions.map((userQna) => (
              <li key={userQna.id}>
                <strong>Q: {userQna.question}</strong>
                <p>A: {userQna.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </div>
  );
}
export default Qna
