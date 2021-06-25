import React from 'react'

const Home = ({history}) => {
    const handleLogin=()=>{
         localStorage.setItem('isAuthenticated',true)
    }
    const handleLogout=()=>{
         localStorage.removeItem('isAuthenticated')
    }
    return (
        <div className="ml-2" >
           <h1 className="ml-2">Home</h1> 
           <button className="btn btn-primary" onClick={handleLogin}>Login</button>
           <button className="btn btn-danger ml-2" onClick={handleLogout}>Logout</button>
           <hr/>
           <button className="btn btn-info" onClick={()=>history.push('/secret')}> See Secret</button>
           
        </div>
    )
}

export default Home
