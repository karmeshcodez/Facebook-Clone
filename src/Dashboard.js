import React, {useState,useEffect} from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import './Dashboard.css'
function Dashboard({setAuth}) {
    const [name,setName] = useState('')
    const firstName = name.split(' ')[0]

    function logout(e){
        e.preventDefault()
        localStorage.removeItem('token')
        setAuth(false)
    }
    async function getName(){
        try{
            const response = await fetch("http://localhost:4000/dashboard/",{
                method: "GET",
                headers: {token: localStorage.token}
            })

            const parseRes = await response.json()
            setName(parseRes.name)
        }
        catch(err){
            console.log(err.message)
        }
    }
    useEffect(() =>{
        getName()
    },[])
    return (
        <div className="dashboard">
            <Header name={firstName} logout={logout}/>
            <div className='dashboardBody'>
                <Sidebar name={name} />
                <Feed/>
            </div>
        </div>
    )
}

export default Dashboard
