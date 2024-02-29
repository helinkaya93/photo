import "./App.css";
import Box from "./component/Box";

import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { fetchImg } from "./services/fetchImg";

function App() {
  const [cachedPhotos, setCachedPhotos] = useState([""]);
  const [filteredPhotos, setFilteredPhotos] = useState([""]);

  useEffect(() => {
    fetchImg().then((res) => {
      setCachedPhotos(res);
      setFilteredPhotos(res);
    });
  }, []);

  const handleInputChange = useCallback((event) => {
    const searchQuery = event.target.value;
    if (searchQuery?.length === 0) {
      setFilteredPhotos(cachedPhotos)
    } else {
      const pattern = `^${searchQuery}`;
      const rgx = new RegExp(pattern, "i");
      const filtered = cachedPhotos.filter((item) => (rgx.test(item.desc)));
      setFilteredPhotos(filtered);
    }
  }, [cachedPhotos]);

  return (
    <div className="App">
      <div className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="search item"
            id="search"
            onChange={handleInputChange}
          />
          <button type="submit" className="title-search">
            search
          </button>
        </form>
      </div>
      <div className="wrapper-box">
        {filteredPhotos.map((item) => {
          return <Box img={item.src} desc={item.desc} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default memo(App);
