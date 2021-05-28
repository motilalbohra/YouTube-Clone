import React,{ useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import './Header.css';
import { Link } from 'react-router-dom'

/**
* @author
* @function Header  
**/

const Header = (props) => {
  const [inputSearch ,setInputSearch ] = useState("");

  return(
    <div className="header">
        <div className="header__left">
             <MenuIcon />
             <Link to="/">
               <img 
                  className="header__logo"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6iTE0UAoZDJHNzOkpG46pcfrJJptAkgLhFw&usqp=CAU"
                  alt="Youtube"/>
            </Link>
            <h3>Video Player</h3>
        </div>
        
        
         <div className="header__input">
          <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder="Search" />
          <Link to={`/search/${inputSearch}`} >
              <SearchIcon className="header__inputButton" />
          </Link>
          
        </div>
        
        
        <div className="header__right">
        <VideoCallIcon className="header__icons" />
        <AppsIcon  className="header__icons"/>
        <NotificationsIcon  className="header__icons"/>
        <Avatar  className="header__icons"
        alt="Motilal"
        src="https://lh3.googleusercontent.com/ogw/ADGmqu8_j_a9NSbcyLsYncFlJXHpV591cxnsqVFg9_47yko=s83-c-mo"/>
        </div>
    </div>
   )

 }

export default Header