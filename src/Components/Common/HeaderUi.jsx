// HeaderUI.js
import React from 'react';
import HCss from '../Common/HeaderCss.module.css';
import '../User/SearchBar';
import logo from '../../Assets/images/logo.png'
import SearchBar from '../User/SearchBar';

const HeaderUi = ({ showSearchBar,onSearch  }) => (
  <>
    <img src={logo} alt="" className={HCss.logoOnDsh} />
    {showSearchBar && <div className={HCss.searchBar}><SearchBar onSearch={onSearch}  /></div>}
    <video autoPlay loop muted playsInline className={HCss.headerVideo}>
      <source src="/videos/header-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </>
);

export default HeaderUi;
