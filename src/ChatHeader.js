import React from 'react'
import './ChatHeader.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';


function ChatHeader({channelName}) {
  return (
    <div className='chatHeader'>
        <div className='chatHeader_left'>
            <h3>
                <span className='chatHeader_hash'>#</span>
                {channelName}
            </h3>
        </div>
        <div className='chatHeader_right'>
            <NotificationsIcon />
            <EditLocationIcon />
            <PeopleAltRoundedIcon />

            <div className='chatHeader_search'>
                <input placeholder='Search'/>
                <SearchRoundedIcon />
            </div>

            <SendRoundedIcon />
            <HelpRoundedIcon />
        </div>

    </div>
  )
}

export default ChatHeader