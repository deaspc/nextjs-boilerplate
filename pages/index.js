import Nav from "../components/nav";
import Profile from "../components/Profile";
import Search from "../components/Search";
import Category from "../components/Category";
import Head from "next/head";

function Homepage() {
  return (
    <div>
      <Head>
        <title>Tech Dsgn Exp</title>
      </Head>
      <Nav />
      <Profile />
      <Search />
      <Category />
    </div>
  );
}

export default Homepage;
