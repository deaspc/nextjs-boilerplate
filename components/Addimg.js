function Addimg({
  imageURL1 = "/img/star.svg",
  imageURL2 = "/img/add.svg",
  title,
}) {
  return (
    <div className="addimg_wrapper">
      <div className="icon-star">
        <img src={imageURL1} className="w-4 h-4" />
      </div>
      <div className="icon">
        <img src={imageURL2} className="w-18 h-18" />
      </div>
      <div className="description">
        <h3>{title}</h3>
      </div>
    </div>
  );
}
export default Addimg;
