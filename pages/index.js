import Nav from "../components/nav";
import Topbar from "../component/Topbar";
import Head from "next/head";

function Home() {
  return (
    <div>
      <Head>
        <title>Tech Dsgn Exp</title>
      </Head>
      <Nav />
      <Topbar />
    </div>
  );
}

export default Home;
