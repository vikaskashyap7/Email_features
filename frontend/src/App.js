import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
   const [user,setUser] = useState({
    name:"",
    email:"",
   })

   let name,value;
   const changeHandle = (e) =>{
    // console.log(user);
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});
   }
  //  console.log(user)
   const clickHandle = async(e)=>{
       e.preventDefault();
       const {name,email}=user;
       const res =await fetch("/email",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,email
        })
       });
       const r =await res.json();
       if(r){
        window.alert("successful");
        navigate('/');
       }
       else{
        window.alert("Invalid")
       }
       
   }
  return (
    <div className="w-screen h-screen flex  justify-center items-center bg-slate-900">
      
      <form method='POST' className="max-w-sm mx-auto w-screen">
      <div className="mb-5">
          <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input type="Name" value={user.name}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" name='name' required onChange={changeHandle}/>
       </div>
        <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
            </svg>
          </div>
          <input type="text" value={user.email} name='email'  id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" onChange={changeHandle}/>
        </div>
        <button type="submit" onClick={clickHandle} className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>

    </div>
  );
}

export default App;
