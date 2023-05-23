import Nav from "../components/nav.js";
import Profile from "../components/Profile.js";
import Search from "../components/Search.js";
import Category from "../components/Category.js";
import Card from "../components/Card.js";

function Homepage() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <Nav />
      <Profile />
      <Search />
      <Category />
      <div className="card-row">
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
          <Card title="Jake ver.A" imageURL="/img/jake12.svg" />
        </a>
        <a>
          <Card title="Jake ver.B" imageURL="/img/jake13.svg" />
        </a>
      </div>
    </div>
  );
}

export default Homepage;
