import React, { useState } from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader.js'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { CardGiftcard } from '@mui/icons-material';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from './Message.js'
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';
import { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import { Timestamp } from "firebase/firestore"; 
import db from './firebase';


function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db.collection("channels")
            .doc(channelId)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => 
                setMessages(snapshot.docs.map((doc) => doc.data()))
            );
        }
    }, [channelId])

    const sendMessage = e => {
        e.preventDefault();

        db.collection('channels').doc(channelId).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,
        })

        setInput("");
    };

  return (
    <div className='chat'>
        <ChatHeader channelName={channelName}/>

        <div className='chat_messages'>
            {messages.map((message) => (
                <Message 
                timestamp={message.timestamp}
                user={message.user}
                message={message.message}
                />
            ))}
        </div>

        <div className='chat_input'>
            <AddCircleIcon fontSize='large'/>
            <form>
                <input 
                value={input} 
                disabled={!channelId}
                onChange={(e) => setInput(e.target.value)} 
                placeholder={`Message #${channelName}`}/>
                <button 
                disabled={!channelId}
                className='chat_inputButton' 
                type='submit'
                onClick={sendMessage}
                >
                </button>
            </form>

            <div className='chat_inputIcons'>
                <CardGiftcard fontSize='large'/>
                <GifIcon fontSize='large'/>
                <EmojiEmotionsIcon fontSize='large'/>
            </div>
        </div>
    </div>
  )
}

export default Chat