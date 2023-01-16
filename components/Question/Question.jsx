import React, { useRef, useState } from "react";
import questions from "../../pages/api/question.json";
import Link from "next/link";
import { Radio, Button, Box } from "@mantine/core";

const Question = ({ setActiveQuestionCard, setValidate, cardData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [val, setVal] = useState(null);

  let test = cardData.data;

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < test.length && setCurrentQuestion(nextQues);
    console.log(val);
    setSelectedOptions((e) => [
      ...e,
      { test_id: test[currentQuestion].id, answer_id: val },
    ]);
  };

  const handleSubmitButton = () => {
    if (test.length > selectedOptions.length) {
      setSelectedOptions((e) => [
        ...e,
        { test_id: test[currentQuestion].id, answer_id: val },
      ]);
    }
  };

  return (
    <div className=" min-h-screen flex items-center ">
      <div className="container mx-auto p-4 ">
        <Radio.Group
          name="favoriteFramework"
          orientation="vertical"
          label={`${currentQuestion + 1} | ${test[currentQuestion].body}`}
          spacing="md"
          offset="xl"
          size="lg"
          withAsterisk
          onChange={(e) => {
            setVal(e);
          }}
        >
          {test[currentQuestion].answer.map((item, index) => {
            return (
              <Radio
                key={index}
                value={`${item.id}`}
                label={item.answer_text}
                color="dark"
              />
            );
          })}
        </Radio.Group>
        <Box className="mt-6 flex justify-end">
          <Button
            onClick={
              currentQuestion + 1 === test.length
                ? handleSubmitButton
                : handleNext
            }
            size="md"
            style={{ letterSpacing: "2px" }}
            className="bg-slate-900 uppercase hover:bg-slate-700 active:bg-slate-700"
          >
            {currentQuestion + 1 === test.length ? "Tugatish" : "Keyingi Savol"}
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Question;
