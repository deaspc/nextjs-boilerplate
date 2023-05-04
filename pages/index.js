import Nav from "../components/nav";
import Profile from "../components/Profile";
import Search from "../components/Search";
import Category from "../components/Category";
import Card from "../components/Card";
import Head from "next/head";

function Homepage() {
  return (
    <div className="Screen">
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
          <Card title="Sunghoon ver.I" imageURL="/img/sunghoon2.svg" />
        </a>
        <a>
          <Card title="Sunghoon weverse 2020" imageURL="/img/sunghoon3.svg" />
        </a>
        <a>
          <Card title="Jake season greeting" imageURL="/img/jake1.svg" />
        </a>
        <a>
          <Card title="Jake ver.A" imageURL="/img/jake2.svg" />
        </a>
        <a>
          <Card title="Jake ver.B" imageURL="/img/jake3.svg" />
        </a>
      </div>
    </div>
  );
}

export default Homepage;
