import React, { useState } from "react";
import questions from "../../pages/api/question.json";
import Link from "next/link";

const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < questions.length && setCurrentQuestion(nextQues);
  };
  const handleAnswerOption = (answer) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ]);
    setSelectedOptions([...selectedOptions]);
    // console.log(selectedOptions, "sasas");
  };
  const handleSubmitButton = () => {
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      questions[i].answerOptions.map(
        (answer) =>
          answer.isCorrect &&
          answer.answer === selectedOptions[i]?.answerByUser &&
          (newScore += 1)
      );
    }
    setScore(newScore);
    setShowScore(true);
  };

  return (
    <div className="bg-slate-900 rounded p-4 flex flex-col justify-center mx-1 top-0 bottom-0  z-[2000]">
      <div className="container m-auto">
        {showScore ? (
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold text-center text-white">
              You scored {score} out of {questions.length}
            </h1>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-start mb-2">
              <h4 className=" text-xl text-white/60">
                Question {currentQuestion + 1} of {questions.length}
              </h4>
              <div className="mt-4 text-2xl text-white">
                {questions[currentQuestion].question}
              </div>
            </div>
            <div className="flex flex-col w-full">
              {questions[currentQuestion].answerOptions.map((answer, index) => (
                <div
                  key={index}
                  className="flex items-center w-full py-4 px-2 m-2 ml-0  border-2 cursor-pointer border-white/10 rounded bg-white/5"
                  onClick={(e) => handleAnswerOption(answer.answer)}
                >
                  <input
                    type="radio"
                    name={answer.answer}
                    value={answer.answer}
                    checked={
                      answer.answer ===
                      selectedOptions[currentQuestion]?.answerByUser
                    }
                    onChange={(e) => handleAnswerOption(answer.answer)}
                    className="w-6 h-6"
                  />
                  <p className="ml-6 text-white">{answer.answer} </p>
                </div>
              ))}
            </div>
            <div className="flex justify-between w-full mt-4 text-white">
              <button
                onClick={handlePrevious}
                className="w-[49%] py-3 bg-slate-600 rounded titleText"
              >
                Previous
              </button>
              <button
                onClick={
                  currentQuestion + 1 === questions.length
                    ? handleSubmitButton
                    : handleNext
                }
                className="w-[49%] py-3 bg-slate-600 rounded titleText"
              >
                {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Question;
