function Topbar() {
  return (
    <div className="top">
      <div className="left-top">
        <div className="profile-pic">
          <img src="/img/profilefinal.svg" />
        </div>
        <div className="info-text">
          <div className="greeting">HI !</div>
          <div className="name">deadea</div>
          </div>
        </div>
      </div>
    </div>
    <div className="middle">
      <div className="left-middle">
        <div className="searchbar">
          <div className="search-text"><img src="/img/search.svg" />search</div>
        </div>
        <div className="filter-button">
          <div className="filter-icon">
            <img src="/img/filter.svg" />
          </div>
        </div>
      </div>
    </div>
    <div className="bottom">
      <div className="left-bottom">
        <div className="popular-button">
          <div className="popular-text">Popular</div>
        </div>
        <div className="random-button">
          <div className="random-text">Random</div>
        </div>
      </div>
    </div>
    );
}

export default UserBar;
