/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import React from "react";
import { useRef, useState } from "react";
import {
  Box,
  Modal,
  NumberInput,
  TextInput,
  Input,
  Button,
} from "@mantine/core";
import { useSWR } from "swr";
import axios from "axios";
import CircleLoader from "../../components/Loader/CircleLoader";

const QuizSlugCard = ({
  data,
  obj,
  setActiveModal,
  setCardData,
  setActiveQuestionCard,
  setValidate,
  validate,
}) => {
  const [opened, setOpened] = useState(false);
  const [itemData, setItemData] = useState(null);

  const [startLoading, setStartLoading] = useState(false);
  let name = useRef(null);
  let age = useRef(null);
  let num = useRef(null);
  const alf = () => {
    setOpened(!opened);
    setActiveModal(true);
  };
  const StartTest = () => {
    setStartLoading(true);
    if (itemData != null) {
      axios
        .get(`/api/subcategory/${itemData.slug}/`)
        .then((res) => {
          if (res.status === 200) {
            setCardData({
              user: {
                name: name.current.value,
                age: age.current.value,
                num: num.current.value,
              },
              cardItem: itemData,
              data: res.data.test_category,
            });
            setActiveQuestionCard(true);
            setOpened(!opened);
            setStartLoading(false);
          }
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <>
      {startLoading ? <CircleLoader /> : null}{" "}
      <div className="mx-1">
        <div className="container mx-auto py-2">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {data
              .filter((fil) => fil.parent === obj.id)
              .map((item) => {
                return (
                  <div
                    key={item.id}
                    className="overflow-hidden rounded bg-slate-900 p-4 lg:p-12"
                  >
                    <h2 className=" text-xl titleText font-semibold text-slate-100">
                      {item.name}
                    </h2>

                    <p className="mt-4 text-sm secondText font-[400]  text-gray-400">
                      {item.body}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        alf();
                        setItemData(item);
                      }}
                      className="p-2 block bg-slate-700 text-white uppercase titleText mt-4 rounded w-full active:scale-95 duration-200"
                    >
                      Start Test
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Modal
        className=" z-[3000]"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Malumotlarni To'ldiring !"
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Box>
            <TextInput
              placeholder="Your name"
              label="Ism kiriting.."
              withAsterisk
              ref={name}
              onChange={() => {
                if (name.current.value.length >= 3) {
                  setValidate(true);
                } else setValidate(false);
              }}
            />
          </Box>
          <Box>
            <NumberInput
              placeholder="Your age"
              label="Yosh kiriting.."
              withAsterisk
              min={0}
              ref={age}
            />
          </Box>
          <Box>
            <Input.Wrapper label="Telefon raqam kiriting.." required>
              <Input
                type={"number"}
                placeholder="Your phone"
                ref={num}
                defaultValue={998}
              />
            </Input.Wrapper>
          </Box>
          <Box className="mt-4 flex justify-end gap-2">
            <Button
              radius="xs"
              size="md"
              variant="default"
              onClick={() => setOpened(false)}
              className="bg-slate-500 duration-200 text-white hover:bg-slate-600 rounded"
            >
              Bekor Qilish
            </Button>
            {validate ? (
              <Button
                onClick={StartTest}
                size="md"
                radius="xs"
                variant="default"
                className="bg-slate-700 duration-200 text-white hover:bg-slate-800 rounded"
              >
                Testni Boshlash
              </Button>
            ) : (
              <Button
                size="md"
                disabled
                radius="xs"
                variant="default"
                className="bg-slate-700 duration-200 text-white hover:bg-slate-800 rounded"
              >
                Testni Boshlash
              </Button>
            )}
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default QuizSlugCard;
