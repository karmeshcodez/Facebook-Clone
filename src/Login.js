import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import AccountLoginTiles from './AccountLoginTiles'
import LoginForm from './LoginForm'
function Login({setAuth}) {
    
    return (
        <div className='login'>
            <div className='loginTilesContent'>
                <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' alt='' />
                <div style={{marginLeft:"20px", fontSize:"28px"}}> Recent Logins </div>
                <div style={{marginLeft:"20px", fontSize:"15px", color:"gray"}}> Click your picture or add an account. </div>
                <AccountLoginTiles />
            </div>
            <LoginForm setAuth={setAuth} />
        </div>
    )
}

export default Login
