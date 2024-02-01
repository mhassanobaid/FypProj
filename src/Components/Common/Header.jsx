
import React from 'react';

import '../User/SearchBar'

import HeaderUi from '../Common/HeaderUi';

import LinkList from '../Common/LinkList';



  const Header = ({ onContactClick, onHomeClick,onAboutClick,showSearchBar,onSignUpClick }) => {

    const handleSearch = (searchCriteria) => {
      // Handle the search criteria, e.g., make an API call
      console.log('Search Criteria:', searchCriteria);
    };
  
    return (
      <header>
        <HeaderUi showSearchBar={showSearchBar} />
        <LinkList
          onHomeClick={onHomeClick}
          onAboutClick={onAboutClick}
          onContactClick={onContactClick}
          onSignUpClick={onSignUpClick}
        />
      </header>
    );
  }

  export default Header;
  
