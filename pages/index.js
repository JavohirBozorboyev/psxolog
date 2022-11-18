import Header from "../module/Home/Header";
import Info from "../module/Home/Info";
import Blog from "../module/Home/Blog";
import Contact from "../module/Home/Contact";
import Info2 from "../module/Home/Info2";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Info />
        <Blog />
        <Info2 />
        <Contact />
      </main>
    </>
  );
}
