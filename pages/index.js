import Image from "next/image";
import BlogSlider from "../module/Home/BlogSlider";
import Header from "../module/Home/Header";
import Info from "../module/Home/Info";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Info />
        <BlogSlider />
      </main>
    </>
  );
}
