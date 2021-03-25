import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './LoginForm.css'
function LoginForm({setAuth}) {
    const [inputs, setInputs] = useState({
        email : "",
        password : ""
    })
    
    const {email, password} = inputs

    const onSubmitForm = async (e) =>{
        e.preventDefault()
        try{
            const body = {email,password}
            const response = await fetch("http://localhost:4000/auth/login",{
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            })

            const parseRes = await response.json()
            if(parseRes.token){
                localStorage.setItem("token", parseRes.token)
                setAuth(true)
            }
        }
        catch(err){
            console.error(err.message)
        }
    }
    const onChange = (e) =>{
        setInputs({...inputs, [e.target.name] : e.target.value})
    }
    return (
        <div className='loginForm'>
            <div className='loginInput'>
            <form onSubmit = {onSubmitForm}>
                <div className='input'> <input placeholder='   Email or Phone Number' name='email' value={email} onChange={e => onChange(e)} /> </div>
                <div className='input'> <input type='password' placeholder='   Password' name='password' value={password} onChange={e => onChange(e)} /> </div>
                <div className='loginButton'> <button type='submit'>Log In</button> </div>
            </form>
                <div style={{marginTop:'12px'}}> <a href=''>Forgot Password?</a> </div>
                <div className='horizontalLine'></div>
                <div className='createNewAccount'> <Link to='./Register'> <button><span style={{color:'white'}}>Create New Account</span></button> </Link> </div>
            </div>

            <div className='createPage'>
                <span> <a href=''>Create a Page</a> for a celebrity, band or business. </span>
            </div>
        </div>
    )
}

export default LoginForm
