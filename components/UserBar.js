function UserBar() {
  return (
    <div id="UserBar">
      <div className="left">
        <div className="profile-pic">
          <img src="/img/profile-circle.svg" />
        </div>
        <div className="info-text">
          <div className="name">Annabelle</div>
          <div className="level">Your level: beginner</div>
        </div>
      </div>
      <div className="right">
        <img src="/img/setting2.svg" />
      </div>
    </div>
  );
}

export default UserBar;
