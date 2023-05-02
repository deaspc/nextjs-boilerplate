function Card({ title, imageURL = "https://placehold.co/162x235" }) {
  return (
    <div className="card_wrapper">
      <div className="card_picture">
        <img src={imageURL} className="w-full h-auto rounded-tl-mr-20" />
        <div class="description">
          <h3>{title}</h3>
          <div className="card-desctiption"></div>
        </div>
      </div>
    </div>
  );
}
export default Card;
