function Card({ title, imageURL = "https://placehold.co/162x235" }) {
  return (
    <div className="card_wrapper">
      <div className="card-box">
        <img src={imageURL} className="w-full h-auto rounded-tl-mr-20" />
        <div class="description">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}
export default Card;
