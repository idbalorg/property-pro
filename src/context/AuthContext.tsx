

import React, { createContext, useContext, useEffect, useState } from "react";
import { useFormChange } from "../hooks/useChange";
import { useNavigate } from "react-router";

interface AuthContextType {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleLogout: ()=> void;
  formValues: { [key: string]: string };
  userData: UserData | null;
  isAuthenticated: boolean
}


interface UserData {
  username: string;
  password: string;

}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const BASE_URL = "http://localhost:9000/users";
  const initialStateLogin = {
    username: "",
    password: "",
  };
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isAuthenticated, setIsAuthenticated]= useState(true)
  const { formValues, handleChange, setFormValues } = useFormChange({
    initialState: initialStateLogin,
  });
  const { username, password } = formValues;
  
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) return;
    try {
      const res = await fetch(
        `${BASE_URL}?username=${username}&password=${password}`
      );
      if (res.ok) {
        console.log("Login successful");
        setIsAuthenticated(true) 
      } else {
        console.error("Error signing in");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  

  const handleLogout=()=>{
   setFormValues(initialStateLogin)
   setIsAuthenticated(false)
   console.log(initialStateLogin)
  }

  useEffect(()=>{
    if(formValues===initialStateLogin) {
      setIsAuthenticated(false)
    }
    if(isAuthenticated) {
      navigate("/appLayout")
    }else{navigate("/")}
  },[isAuthenticated])

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res = await fetch(`${BASE_URL}`);
        if (res.ok) {
          const data: UserData[] = await res.json();
          const user = data.find((u) => u.username === username && u.password === password);
          if (user) setUserData(user);
        } else {
          console.error("Error fetching user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (username && password) {
      getUserInfo();
    }
  }, [username, password,setUserData]);

  
  return (
    <AuthContext.Provider value={{ handleChange, handleSubmit, formValues, userData, handleLogout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Auth context was used outside the AuthProvider");
  }
  return context;
};

export { useAuth, AuthProvider };
