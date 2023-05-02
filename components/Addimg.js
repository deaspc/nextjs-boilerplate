function Addimg({ imageURL = "/img/add.svg", title, cover }) {
  return (
    <div className="addimg_wrapper">
      <div className="icon">
        <img src={imageURL} className="w-18 h-18" />
      </div>
      <div class="description">
        <h3>{title}</h3>
      </div>
      <div className="cover">{cover}</div>
    </div>
  );
}
export default Addimg;
