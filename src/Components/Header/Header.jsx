import "./header.css"
import NetflixLogo from "../../assets/images/Netflix_logo.svg.png"
import AvatoLogo from "../../assets/images/Avator logo.png"
import SearchIcon from '@mui/icons-material/Search';
import { useState,useEffect } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {

	const [show, handleShow] = useState(false);
	 useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
  return (
   <div className={`header_outer_container 
   ${show && "nav__black"}`}>
    <div className='header_container'>
      <div className='header_left'>
        <ul>
          <li><img src={NetflixLogo} alt="Netflix logo" width="100" /></li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse By Languages</li>
         </ul>
</div>
<div className='header_right'>
  <ul>
    <li><SearchIcon/></li>
    <li><NotificationsNoneIcon/> </li>
    <li><AccountBoxIcon/></li>
         <li><img className="nav__avatar"
 src={AvatoLogo} alt="Avator logo"  /></li>
    <li><ArrowDropDownIcon/></li>
  </ul>
    </div>
    </div>
    </div>
  );
}

export default Header;
