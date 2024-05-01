import React from "react";

import "../User/SearchBar";

import HeaderUi from "../Common/HeaderUi";

import LinkList from "../Common/LinkList";

import * as Components from "./Components";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = ({
  onContactClick,
  onHomeClick,
  onAboutClick,
  showSearchBar,
  onSignUpClick,
  userNamee,
  authenticated,
  onSearch,
}) => {
  const welcomeMessage = userNamee ? `${userNamee}!` : "Welcome, User!";
  var auth = authenticated ? true : false;

  return (
    <header>
      <HeaderUi showSearchBar={showSearchBar} onSearch={onSearch} />
      <LinkList
        onHomeClick={onHomeClick}
        onAboutClick={onAboutClick}
        onContactClick={onContactClick}
        onSignUpClick={onSignUpClick}
        Auth={auth}
        WelcomeMsg={welcomeMessage}
      />
    </header>
  );
};

export default Header;
