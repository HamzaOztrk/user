import { useState,useEffect } from "react" 

const User = () => {
    const [user, setUser] = useState("")

    const getUser=()=>{
    fetch("https://randomuser.me/api")
    .then((res)=>res.json())
    .then((data)=> setUser(data.results[0]))
    .catch((err)=>console.log(err))
    }

    useEffect(() => {
        getUser()
       
    }, []);
    
  return (
    <div className="mt-4">
    
        <h1 className="text-danger mb-5">USERS</h1>
        <h1>{user?.name?.first} {user?.name?.last}</h1>
        <img src={user?.picture?.large} alt="img" className="rounded-circle"/>
        <h4>{user?.email}</h4>
        <h5>{user?.phone}</h5>
        <p>{new Date(user?.dob?.date).toLocaleDateString()}</p>
        
        <button className="btn btn-warning" onClick={getUser}>
            Get User
        </button>
    </div>
  )
}

export default User