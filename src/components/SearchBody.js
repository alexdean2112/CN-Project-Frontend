import "../componentstyles/SearchBody.css";

const SearchBody = () => {
  return (
    <div className="full_body">
      <div className="filterComp">
        <div className="filterTitle">
          <h1>Filter</h1>
        </div>
        <div className="searchBar">
          <div>
            <input
              className="inputSearch"
              type="text"
              placeholder="Search Here ..."
            />
          </div>{" "}
          <br></br>
          <div className="searchButton">
            <button>Search</button>
          </div>
        </div>
        <div className="subComp">
          <h1>sub comp</h1>
        </div>
        <div className="subComp">
          <h1>sub comp</h1>
        </div>
      </div>
      <div className="popularGames">
        <div className="popularGame">
          <div className="rank">
            <h1>1</h1>
          </div>
          <div className="gameImg">
            <h1>Game icon</h1>
          </div>
          <div className="gameName">
            <h1>Popular Game Name</h1>
          </div>
          <div className="gamePrice">
            <h1>Price</h1>
            <h1>£ --</h1>
          </div>
        </div>
        <div className="popularGame">
          <div className="rank">
            <h1>2</h1>
          </div>
          <div className="gameImg">
            <h1>Game icon</h1>
          </div>
          <div className="gameName">
            <h1>Popular Game Name</h1>
          </div>
          <div className="gamePrice">
            <h1>Price</h1>
            <h1>£ --</h1>
          </div>
        </div>
        <div className="popularGame">
          <div className="rank">
            <h1>3</h1>
          </div>
          <div className="gameImg">
            <h1>Game icon</h1>
          </div>
          <div className="gameName">
            <h1>Popular Game Name</h1>
          </div>
          <div className="gamePrice">
            <h1>Price</h1>
            <h1>£ --</h1>
          </div>
        </div>
        <div className="popularGame">
          <div className="rank">
            <h1>4</h1>
          </div>
          <div className="gameImg">
            <h1>Game icon</h1>
          </div>
          <div className="gameName">
            <h1>Popular Game Name</h1>
          </div>
          <div className="gamePrice">
            <h1>Price</h1>
            <h1>£ --</h1>
          </div>
        </div>
        <div className="popularGame">
          <div className="rank">
            <h1>5</h1>
          </div>
          <div className="gameImg">
            <h1>Game icon</h1>
          </div>
          <div className="gameName">
            <h1>Popular Game Name</h1>
          </div>
          <div className="gamePrice">
            <h1>Price</h1>
            <h1>£ --</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBody;
