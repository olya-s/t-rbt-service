import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "../../App.css";
import "./style.css";

const SearchPanel = props => {
  const [search, setSearch] = useState("");
  const [searchErr, setSearhcErr] = useState(false);

  const handleChangeSearch = e => {
    setSearhcErr(false);
    setSearch(e.target.value);
  };

  const handleSearchContent = () => {
    if (search.match(/\w{3,}/g)) {
      props.searchContent(search);
    } else {
      setSearhcErr(true);
    }
  };

  return (
    <div className="layout-row search-panel">
      <div className="layout-row heading">
        <div className="logo-image">
          <i className="fa fa-music" />
        </div>
        <p>Your favorite melodies as a ring back tone!</p>
      </div>
      <div className="search">
        <TextField
          id="search"
          value={search}
          className={searchErr ? "invalid" : "valid"}
          variant="outlined"
          onChange={handleChangeSearch}
        />
        <button className="btn-search" onClick={handleSearchContent}>
          <i className="fa fa-search icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchPanel;
