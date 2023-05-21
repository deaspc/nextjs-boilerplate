function Messagebox({
  imageURL3 = "https://placehold.co/52x52",
  username,
  message1,
  imageURL4 = "/img/swap.svg",
  message2,
}) {
  return (
    <div className="message_wrapper">
      <div className="message-box">
        <div classname="message-profile">
          <img src={imageURL3} className="w-45 h-45" />{" "}
        </div>
        <div className="message-details">
          <div className="username">
            <h3>{username}</h3>
          </div>
          <div className="swap-details">
            <div className="message1">
              <h3>{message1}</h3>
            </div>
            <img src={imageURL4} className="w-5 h-5" />
            <div className="message2">
              <h3>{message2}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Messagebox;
