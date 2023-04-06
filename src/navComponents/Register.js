import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
let Register=()=>{
    let navigate=useNavigate()
    let [RegData,setRegData]=useState({"user_id":"","roll":"","email":"","password":"","confirmPassword":""})
    let update=(e)=>{
            setRegData({...RegData,[e.target.name]:e.target.value})
    }
    let Register=async()=>{
        console.log(RegData)
let res=await axios.post("http://localhost:5000",RegData).then(()=>{console.log("ok")}).catch((er)=>{console.log("no respons") 
console.log(er)})
console.log(res)
        navigate("/login")

    }
    return(
        
        <div>
            <input type="text" placeholder="enter user id" name="user_id" onChange={update} />
            <input type="text" placeholder="Enter Roll" name="roll" onChange={update}/>
           <input type="email" placeholder="Enter Email" name="email" onChange={update}/>
            <input type="password" placeholder="Enter Password" name="password"onChange={update} />
            <input type="password" placeholder="Enter Password" name=" confirmPassword" onChange={update} />

            <button onClick={Register}>Register</button>

        </div>
    )
}
export default Register