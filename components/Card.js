function Card({ title, imageURL = "https://placehold.co/152x225" }) {
  return (
    <div className="card_wrapper">
      <div className="card-box">
        <img src={imageURL} className="w-full h-auto rounded-tl-mr-10" />
        <div className="description">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}
export default Card;
