import React from 'react';

const SearchForm = props => (
    <form onSubmit={props.onFormSubmit}>
    <input 
      type="text" 
      placeholder="Enter search term..." 
      onChange={props.onSearchValueChange}
    />
    <button disabled={props.isSearching}>Search</button>

    <button 
      onClick={props.onSingleSearchClick} 
      disabled={props.isSearching}
    >
      I'm Feeling Funny
    </button>
  </form>
);

export default SearchForm;