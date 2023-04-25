function Topbar() {
    return (
    <div class="top">
      <div class="left-top">
        <div class="profile-pic">
          <img src="/img/profilefinal.svg" />
        </div>
        <div class="info-text">
          <div class="greeting">HI !</div>
          <div class="name">deadea</div>
          </div>
        </div>
      </div>
    </div>
    <div class="middle">
      <div class="left-middle">
        <div class="searchbar">
          <div class="search-text"><img src="/img/search.svg" />search</div>
        </div>
        <div class="filter-button">
          <div class="filter-icon">
            <img src="/img/filter.svg" />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="left-bottom">
        <div class="popular-button">
          <div class="popular-text">Popular</div>
        </div>
        <div class="random-button">
          <div class="random-text">Random</div>
        </div>
      </div>
    </div>
    );
}

export default Topbar;