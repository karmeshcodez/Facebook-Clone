import React, {useState} from 'react'
import './RegistrationForm.css'

function RegistrationForm({setAuth}) {
    const [inputs, setInputs] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })
    const {firstname,lastname,email,password} = inputs
    const onChange = (e) =>{
        setInputs({...inputs, [e.target.name] : e.target.value})
    }
    
    const onSubmit = async(e) =>{
        e.preventDefault()
        const body = {email,password,firstname,lastname}
        try{
            const response = await fetch("http://localhost:4000/auth/register",
            {
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
            console.log(err.message)
        }
    }
    return (
        <div className='registerForm'>
            <div>
                <div> Sign Up </div>
                <div> It's quick and easy.</div>
                <hr/>
                <form onSubmit={onSubmit}>
                    <input type='text' placeholder='First Name' name='firstname' value={inputs.firstname} onChange ={e => onChange(e)} />
                    <input type='text' placeholder='Last Name' name='lastname' value={inputs.lastname} onChange ={e => onChange(e)} />
                    <div> <input type='email' placeholder='Mobile number or email' name='email' value={inputs.email} onChange ={e => onChange(e)} /> </div>
                    <div> <input type='password' placeholder='New password' name='password' value={inputs.password} onChange ={e => onChange(e)} /> </div>
                    <div id='agreementText'>By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</div>
                    <div className='signupButton'><button><span style={{color:'white'}}>Sign Up</span></button> </div>
                </form>
            </div>
        </div>
    )
}

export default RegistrationForm
