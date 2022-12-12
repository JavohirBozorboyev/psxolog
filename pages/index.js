import Header from "../module/Home/Header";
import Info from "../module/Home/Info";
import Blog from "../module/Home/Blog";
import Contact from "../module/Home/Contact";
import Info2 from "../module/Home/Info2";
import QuizCartHome from "../module/Home/QuizCartHome";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Psxolog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="psxolog, doctor "
          key="psxolog, doctor"
        />
        <meta name="google" content="notranslate" />
      </Head>
      <main>
        <AnimatePresence>
          <div>
            <Header />
            <Info />
            <QuizCartHome />
            <Blog posts={posts} />
            <Info2 />
            <Contact />
          </div>
        </AnimatePresence>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://psihologictest2.pythonanywhere.com/api/post/"
  );
  const posts = await res.json();

  if (!res.ok) {
    // If there is a server error, you might want to
    // throw an error instead of returning so that the cache is not updated
    // until the next successful request.
    throw new Error(`Failed to fetch posts, received status ${res.status}`);
  }

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}
