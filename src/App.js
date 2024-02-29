import "./App.css";
import Box from "./component/Box";

import { useState, useEffect } from "react";
import { fetchImg } from "./services/fetchImg";

function App() {
  const [photos, setPhoto] = useState([""]);
  const [searchQuery, setSearchQuery] = useState();
  useEffect(() => {
    fetchImg().then((res) => {
      setPhoto(res);
      console.log(res);
    });
  }, []);
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    const filtered = photos.filter((item) =>
      item.desc.toLowerCase().startsWith(event.target.value.toLowerCase())
    );
    setPhoto(filtered);
  };
  return (
    <div className="App">
      <div className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="search item"
            id="search"
            onChange={handleInputChange}
            value={searchQuery}
          />
          <button type="submit" className="title-search">
            search
          </button>
        </form>
      </div>
      <div className="wrapper-box">
        {photos.map((item) => {
          return <Box img={item.src} desc={item.desc} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
