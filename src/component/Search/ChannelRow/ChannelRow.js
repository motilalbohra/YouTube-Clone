import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChannelRow.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
/**
* @author
* @function ChannelRow
**/

const ChannelRow = ({image,Channel,verified,subs,noOfVideos,description}) => {
  return(
    <div className="channelRow">
        <Avatar className="channelRow__logo" 
        src={image}
        alt={Channel}/>
        <div className="channelRow__text">
          <h4>{Channel} {verified && <CheckCircleIcon />}</h4>
          <p>{subs} subscribers • {noOfVideos} videos </p>
          <p>{description} </p>

        </div>

    </div>
   )

 }

export default ChannelRow