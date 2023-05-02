function Card({
  title,
  style,
  roomSize,
  imageURL = "https://placehold.co/162x235",
}) {
  return (
    <div className="card_wrapper">
      <div className="card_picture">
        <img src={imageURL} className="w-full h-auto rounded-tl-mr-15" />
        <div class="description">
          <h3>{title}</h3>
          <div className="Card_line"></div>
          <div className="Room-desctiption">
            <div className="Style"> {style}</div>
            <div className="Roomsize"> {roomSize} m²</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
