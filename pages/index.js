import Header from "../module/Home/Header";
import Info from "../module/Home/Info";
import Blog from "../module/Home/Blog";
import Contact from "../module/Home/Contact";
import Info2 from "../module/Home/Info2";
import QuizCartHome from "../module/Home/QuizCartHome";

export default function Home({ posts }) {
  return (
    <>
      <main>
        <Header />
        <Info />
        <QuizCartHome />
        <Blog posts={posts} />
        <Info2 />
        <Contact />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://psihologictest.pythonanywhere.com/admin-api/post/"
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
