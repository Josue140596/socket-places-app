import { createContext } from "react";
import { useSocket } from "../hooks/useSocket";



export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {


     // useSocket
     const { socket, online } = useSocket('https://socket-places-server.herokuapp.com/');

     return (
 
         <SocketContext.Provider value={{socket, online}}>
             {children}
         </SocketContext.Provider>
     )
}














