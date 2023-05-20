import Nav from "../components/nav.js";
import Notitopbar from "../components/Notitopbar.js";
import Messagebox from "../components/Messagebox.js";

function Notification() {
  return (
    <div>
      <Nav />
      <Notitopbar />
      <div className="message_wrapper">
        {/* <a href="/Post"> */}
        <a>
          <Messagebox
            imageURL3="/img/profile2.svg"
            username="ddiscute · 2 mins ago"
            message1="Jake day1 ver.O"
            imageURL4="/img/swap.svg"
            message2="Niki day1 ver.O"
          />
        </a>
      </div>
    </div>
  );
}

export default Notification;
