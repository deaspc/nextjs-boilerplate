import Nav from "../components/nav";
import UserBar from "../components/UserBar";
import ArticleCard from "../components/ArticleCard";
import Head from "next/head";

function Homepage() {
  return (
    <div>
      <Head>
        <title>Tech Dsgn Exp</title>
      </Head>
      <Nav />
      <UserBar />
      <ArticleCard />
    </div>
  );
}

export default Homepage;
