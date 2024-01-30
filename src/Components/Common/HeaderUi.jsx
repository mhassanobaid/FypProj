// HeaderUI.js
import React from 'react';
import HCss from '../Common/HeaderCss.module.css';
import '../User/SearchBar';
import SearchBar from '../User/SearchBar';

const HeaderUi = ({ showSearchBar }) => (
  <>
    <img src="/images/logo.png" alt="" className={HCss.logoOnDsh} />
    {showSearchBar && <div className={HCss.searchBar}><SearchBar  /></div>}
    <video autoPlay loop muted playsInline className={HCss.headerVideo}>
      <source src="/videos/header-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </>
);

export default HeaderUi;
