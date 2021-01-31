import "./App.css";
import { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {
  const [playerData, setPlayerData] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(null);
  useEffect(() => {
    const url = "https://api.npoint.io/d6bd0efc05639084eb17/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPlayerData(data);
        setFilteredData(data);
      });
  }, []);

  const filterPlayer = () => {
    setFilteredData(
      playerData.playerList
        .filter((el) => {
          return (
            el.PFName.toLowerCase().includes(searchText.toLowerCase()) ||
            el.TName.toLowerCase().includes(searchText.toLowerCase())
          );
        })
        .sort((a, b) => a.Value - b.Value)
    );
  };

  useEffect(() => {
    if (playerData) {
      filterPlayer();
      setDataLoaded(true);
    }
  }, [playerData]);

  useEffect(() => {
    if (filteredData) {
      filterPlayer();
    }
  }, [searchText]);

  const handleSearchPlayer = (e) => {
    setSearchText(e.target.value);
    filterPlayer();
  };

  return (
    <div>
      <div className="container">
        <div className="searchbox">
          <label htmlFor="searchPlayer">Search For Your Favourite Player</label>
          <input
            type="text"
            value={searchText}
            id="searchPlayer"
            placeholder="Enter Player Name or Team Name"
            onChange={handleSearchPlayer}
          />
        </div>
        <div className="players">
          {dataLoaded
            ? filteredData.map((player) => (
                <Player key={player.Id} data={player} />
              ))
            : "Loading"}
        </div>
      </div>
      <footer className="footer">
        Created with <span className="heart">❤</span> By Ujjawal
      </footer>
    </div>
  );
}

export default App;
