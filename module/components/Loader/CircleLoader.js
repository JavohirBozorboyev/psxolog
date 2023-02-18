import { Loader } from "@mantine/core";

const CircleLoader = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 right-0 flex justify-center items-center bg-[#0f172a] z-[4001]">
      <Loader color="yellow" size={"xl"} variant="bars" />
    </div>
  );
};

export default CircleLoader;
