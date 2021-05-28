import React from 'react';
import "./SearchPage.css";
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow/ChannelRow'
import VideoRow from './VideoRow/VideoRow';

/**
* @author
* @function SearchPage
**/

const SearchPage = (props) => {
  return(
    <div className="searchpage">
        <div className="searchpage__filter">
             <TuneIcon />
             <h2>FILTER</h2>     
        </div>
        <hr />
        <ChannelRow 
        image="https://yt3.ggpht.com/ytc/AAUvwnjV72MIMAOH7wAYGQHoQ2WxDszD-YIF6dt60jUm3A=s88-c-k-c0x00ffffff-no-rj"
        Channel="NBA"
        verified
        subs="16.8M"
        noOfVideos="1500"
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
        />
        <hr />
        <VideoRow 
        views="255,386 views"
        subs="16.8M" 
        description="Led by Nikola Jokic’s 36 PTS, 10 REB and 5 AST, the #3 seed Denver Nuggets defeated the #6"  
        timestamp="21 May 2021"
        channel="NBA"
        title="SPURS at GRIZZLIES | FULL GAME HIGHLIGHTS | May 19, 2021"
        image="https://i.ytimg.com/vi/It4nw4v95Yk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBi1vQ2bXE851gxz0CFRKebt73rww"
         />
        <VideoRow 
        views="268,041 views"
        subs="16.8M" 
        description="Led by Nikola Jokic’s 36 PTS, 10 REB and 5 AST, the #3 seed Denver Nuggets defeated the #6"  
        timestamp="28 May 2021"
        channel="NBA"
        title="#3 NUGGETS at #6 TRAIL BLAZERS | FULL GAME HIGHLIGHTS | May 27, 2021"
        image="https://i.ytimg.com/vi/96JqJtGKyEo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDljMyfXuvvuqR3Mpj7iTtQ4ru1Nw"
         />
        <VideoRow 
        views="655,386 views"
        subs="16.8M" 
        description="Led by Anthony Davis’ 34 PTS and 11 REB, the #7 seed Los Angeles Lakers defeated the #2 "  
        timestamp="28 May 2021"
        channel="NBA"
        title="#2 SUNS at #7 LAKERS | FULL GAME HIGHLIGHTS | May 27, 2021"
        image="https://i.ytimg.com/vi/GVv43axHYxQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVL9G8Sqwmjo2WP6zvwHfb_l9KxA"
         />
        <VideoRow 
        views="75,300 views"
        subs="16.8M" 
        description="
        For news, stories, highlights and more, go to our official website at https://app.link.nba.com/e/NBA_site"  
        timestamp="27 May 2021"
        channel="NBA"
        title="Lebron's BEST CLUTCH 3's as a LAKER! 🔥"
        image="https://i.ytimg.com/vi/lE1baCCKANI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0pdhNSKLG3u8F5hVq0YkO-v4o9Q"
         />
        <VideoRow 
        views="1,055,380 views"
        subs="16.8M" 
        description="Despite Ja Morant’s 47 PTS and 7 AST, the Utah Jazz defeated the Memphis Grizzlies, 141-129"  
        timestamp="27 May 2021"
        channel="NBA"
        title="#8 GRIZZLIES at #1 JAZZ | FULL GAME HIGHLIGHTS | May 26, 2021"
        image="https://i.ytimg.com/vi/W7VFeN4n8mk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-VsX6lIpvgJeTzjsW0MYQdYINcw"
         />
        <VideoRow 
        views="52,386 views"
        subs="16.8M" 
        description="Full Game Highlights Playlist: https://on.nba.com/2rjGMge"  
        timestamp="27 May 2021"
        channel="NBA"
        title="Ben Simmons with the Dunk from Courtside! 😎 | #shorts"
        image="https://i.ytimg.com/vi/7U-BwTt3pu4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVyYR9x6N0et7_AyoQ2y6yevS8Eg"
         />
    </div>
   )

 }

export default SearchPage