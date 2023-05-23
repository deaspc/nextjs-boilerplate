import Nav2 from "../components/nav2.js";
import Notitopbar from "../components/Notitopbar.js";
import Messagebox from "../components/Messagebox.js";

function Notification() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <Nav2 />
      <Notitopbar />
      <Messagebox />
    </div>
  );
}

export default Notification;
