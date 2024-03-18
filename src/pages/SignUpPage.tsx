import React, { useState, FormEvent, useEffect } from "react";
import {  useFormChange,  } from "../hooks/useChange";
import { useNavigate } from "react-router";





const SignUpPage = () => {
  const navigate = useNavigate()
  // const [appUsers , setAppUsers]  = useState<{id: number}[]>([])
  const [isMatch, setIsMatch] = useState(true);
  // const [isLoading, setIsLoading] = useState(false)
  const BASE_URL = "http://localhost:9000/users"

  
  const initialStateSignup  = {
    email: "",
    username: "",
    password: "",
    confirmPass: "",
    dob: ""
  }



  const {formValues, handleChange} = useFormChange({initialState: initialStateSignup}) 


  
  const handleSignupSubmit  = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {email, password, dob, username, confirmPass} = formValues
    if(!email || !password || !confirmPass || !dob) return 
    if(password !== confirmPass) {
      setIsMatch(false) 
      return
    }
    
    async function createAccount() {
      const userExists = await checkUserExists(email, username);
      if (userExists) {
        console.log('User already exists. Please choose a different username or email.');
        return;
      }
      try{
        const res = await fetch(BASE_URL,  {
          method: "POST",
          body: JSON.stringify({
            email, password, dob, username
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
        res.ok ? navigate("/") : console.error("Error signing up");

      }catch(error){
        console.error("Error: ", error)
      }
    }

    createAccount()

  };

  const checkUserExists = async (email : string, username : string)=>{
    const res = await fetch(`${BASE_URL}?email=${email}&username${username}`)
    const data = await res.json()
    return data.length > 0
  }

  useEffect(()=>{
    
  },[])

  return (
    <form onSubmit={handleSignupSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={formValues.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="confirm-password">Confirm password</label>
        <input
          type="password"
          id="confirm-password"
          name="confirmPass"
          value={formValues.confirmPass}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="dob">Birth day</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formValues.dob}
          onChange={handleChange}
        />
      </div>
      {!isMatch && <i>password does not match</i>}

      <button type="submit">Submit</button>
    </form>
    
  );
};


export default SignUpPage;
