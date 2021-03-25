import React,{useState} from 'react'
import './MessageSender.css'
import {Avatar} from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
function MessageSender() {
    const handleSubmit = (e) => {
        e.preventDefault()

        setInput("")
        setImageUrl("")
    }
    const [input, setInput] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    return (
        <div className='messageSender'>
            <div className='messageSenderTop'>
                <Avatar />
                <form>
                    <input type='text' value={input} onChange={(e) => setInput(e.target.value)} className="messageSenderInput" placeholder="What's on your mind?" />
                    <input type='text' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="image URL (Optional)" />
                    <button type="submit" onClick={handleSubmit}>Hidden Button</button>
                </form>
            </div>
            <div className='messageSenderBottom'>
                <div className='messageSenderOptions'>
                    <VideocamIcon style={{color:"red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className='messageSenderOptions'>
                    <PhotoLibraryIcon style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className='messageSenderOptions'>
                    <InsertEmoticonIcon style={{color:"orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
