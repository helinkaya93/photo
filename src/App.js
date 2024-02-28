import "./App.css";
import Box from "./component/Box";

import { useState, useEffect } from "react";
import { fetchimg } from "./component/fetchimg";

function App() {
  const [photos, setPhoto] = useState([""]);
  const [searchQuery, setSearchQuery] = useState();
  useEffect(() => {
    fetchimg().then((res) => {
      setPhoto(res);
      console.log(res);
    });
  }, []);
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    const filtred = photos.filter((item) =>
      item.desc.toLowerCase().startsWith(event.target.value.toLowerCase())
    );
    setPhoto(filtred);
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
