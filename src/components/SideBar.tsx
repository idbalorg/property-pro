import { useAuth } from "../context/AuthContext"

const SideBar = () => {
  const { userData, handleLogout } = useAuth()
  return (
    <div><p>welcome {userData?.username}</p><button onClick={handleLogout}>logout</button></div>

  )
}

export default SideBar