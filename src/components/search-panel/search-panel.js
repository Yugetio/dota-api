import React from 'react';


const SearchPanel = ({ onSearchHero }) => {
  return (
    <div className="search-panel">
      <input type="text"
             key="search"
             onChange={ onSearchHero }/>
    </div>
  );
};


export default SearchPanel;