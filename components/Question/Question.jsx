import React, { useRef, useState } from "react";

import { Radio, Button, Box } from "@mantine/core";
import axios from "axios";

const Question = ({ setActiveQuestionCard, cardData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [val, setVal] = useState(null);

  let test = cardData.data;

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < test.length && setCurrentQuestion(nextQues);
    setSelectedOptions((e) => [
      ...e,
      { test_id: test[currentQuestion]?.id, answer_id: +val },
    ]);
    setVal(null);
  };

  const handleSubmitButton = async () => {
    if (test.length > selectedOptions.length) {
      setShowScore(true);
      setSelectedOptions((e) => [
        ...e,
        { test_id: test[currentQuestion].id, answer_id: +val },
      ]);

      try {
        var options = {
          method: 'POST',
          url: '/admin-api/info/',

          data: {
            full_name: `${cardData.user.name}`,
            age: cardData?.user?.age || 0,
            gender: `${cardData?.user?.age || "man"}`,
            category: cardData.cardItem.id,
            test_ball: '1',
            test_result: 'bad',
            test_api: JSON.stringify([{
              category: cardData.cardItem.id,
              tests: selectedOptions
            }])
          }
        };

        axios.request(options).then(function (response) {
          // console.log(response.data);
        }).catch(function (error) {
          console.error(error);
        });
      } catch (error) {
        console.error(error);
      }
    }
  };


  return (
    <div className=" min-h-screen flex items-center ">
      {showScore ? (
        <div className="container mx-auto p-4">
          {" "}
          <h1 className="text-2xl text-slate-900 uppercase titleText text-center">
            Sizning Natijangiz{" "}
          </h1>{" "}
          <div className="mt-6 flex justify-center">
            <Button
              variant="default"
              size="md"
              onClick={() => setActiveQuestionCard(false)}
              style={{ letterSpacing: "2px" }}
              className="bg-slate-900 uppercase titleText hover:bg-slate-700 active:bg-slate-700 text-white"
            >
              Yopish
            </Button>
          </div>
        </div>
      ) : (
        <div className="container mx-auto p-4 ">
          <Radio.Group
            name="favoriteFramework"
            orientation="vertical"
            label={`${currentQuestion + 1} | ${test[currentQuestion]?.body || ""
              }`}
            spacing="md"
            offset="xl"
            size="lg"
            withAsterisk
            onChange={(e) => {
              setVal(e);
            }}
          >
            {test[currentQuestion]?.answer.map((item, index) => {
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
            {val === null ? <Button
              disabled
              size="md"
              style={{ letterSpacing: "2px" }}
              className="bg-slate-900 uppercase titleText hover:bg-slate-700 active:bg-slate-700"
            >
              {currentQuestion + 1 === test.length
                ? "Tugatish"
                : "Keyingi Savol"}
            </Button> :
              <Button
                onClick={
                  currentQuestion + 1 === test.length
                    ? handleSubmitButton
                    : handleNext
                }
                size="md"
                style={{ letterSpacing: "2px" }}
                className="bg-slate-900 uppercase titleText hover:bg-slate-700 active:bg-slate-700"
              >
                {currentQuestion + 1 === test.length
                  ? "Tugatish"
                  : "Keyingi Savol"}
              </Button>}
          </Box>
        </div>
      )}
    </div>
  );
};

export default Question;
