
import React from 'react';

import '../User/SearchBar'

import HeaderUi from '../Common/HeaderUi';

import LinkList from '../Common/LinkList';

import * as Components from './Components';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';



  const Header = ({ onContactClick, onHomeClick,onAboutClick,showSearchBar,onSignUpClick,userNamee,authenticated }) => {

    const welcomeMessage = userNamee ? `${userNamee}!` : 'Welcome, User!';
    var auth = authenticated? true: false;
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
          Auth = {auth}
          WelcomeMsg = {welcomeMessage}
        />
      </header>
    );
  }

  export default Header;
  
