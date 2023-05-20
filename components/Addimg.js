function Addimg({
  imageURL1 = "/img/star.svg",
  imageURL2 = "/img/add.svg",
  title,
  cover,
}) {
  return (
    <div className="addimg_wrapper">
      <div className="icon-star">
        <img src={imageURL1} className="w-12 h-12" />
      </div>
      <div className="icon">
        <img src={imageURL2} className="w-18 h-18" />
      </div>
      <div className="description">
        <h3>{title}</h3>
      </div>
      <div className="cover">{cover}</div>
    </div>
  );
}
export default Addimg;
