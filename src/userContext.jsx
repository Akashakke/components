import { createContext, useState } from "react";

let UserContext = createContext()

export  const UserProvider = ({children}) => {
    const [username,setUsername] = useState("Hello")
    return (
        <UserContext.Provider value={{username,setUsername}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContext