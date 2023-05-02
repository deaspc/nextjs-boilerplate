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
        {/* <a href="/Post"> */}
        <a>
          <Card title="Sunghoon weverse 2021" imageURL="/img/sunghoon1.svg" />
        </a>
        <a>
          <Card title="Sunghoon ver.I" />
        </a>
        <a>
          <Card title="Sunghoon weverse 2020" />
        </a>
        <a>
          <Card title="Jake season greeting" />
        </a>
        <a>
          <Card title="Jake ver.A" />
        </a>
        <a>
          <Card title="Jake ver.B" />
        </a>
      </div>
    </div>
  );
}

export default Homepage;
