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
      <div class="card-row">
        <a href="/Post">
          <Card title="Sunghoon weverse" imageURL="/img/sunghoon1.svg"/>
        </a>
        <a>
          <Card title="Sunghoon ver.I" />
        </a>
        <a>
          <Card />
        </a>
        <a>
          <Card />
        </a>
        <a>
          <Card />
        </a>
        <a>
          <Card />
        </a>
        <a>
          <Card />
        </a>
        <a>
          <Card />
        </a>
      </div>
    </div>
  );
}

export default Homepage;
