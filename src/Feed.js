import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            <Post image='https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80' profilePic="https://content.fortune.com/wp-content/uploads/2021/02/GettyImages-1229901940.jpg?resize=750,500" message="GAMESTONK" timestamp="okfdf" username='fdfdf' />
            <Post profilePic="https://content.fortune.com/wp-content/uploads/2021/02/GettyImages-1229901940.jpg?resize=750,500" message="wow this works" timestamp="okfdf" username='fdfdf'/>
            <Post profilePic="https://content.fortune.com/wp-content/uploads/2021/02/GettyImages-1229901940.jpg?resize=750,500" message="wow this works" timestamp="okfdf" username='fdfdf'/>
        </div>
    )
}

export default Feed
