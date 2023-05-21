function Card({ title, imageURL = "https://placehold.co/162x235" }) {
  return (
    <div className="card_wrapper">
      <div className="card-box">
        <div className="card-image">
          <img src={imageURL} className="w-full h-auto rounded-tl-mr-10" />
        </div>
        <div className="description">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}
export default Card;
