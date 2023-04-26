import Nav from "../components/nav";
import Profile from "../components/Profile";
import Search from "../components/Search";
import Category from "../components/Category";
import Card from "../components/Card";
import Head from "next/head";

function Homepage() {
  return (
    <div>
      <Head></Head>
      <Nav />
      <Profile />
      <Search />
      <Category />
      <Card />
    </div>
  );
}

export default Homepage;
