import { useEffect, useMemo, useState } from 'react';

// Socket cliente
import io from 'socket.io-client';


export const useSocket = (severPath) => {

    // Use memo es el que va a guardar el estado del socket
    // asi ya no se va a a volver a ejecutar, almenos que cambie
    // de estado
    const socket = useMemo(() => io.connect(severPath,
        {
            transports: ['websocket']
        })
        , [severPath]);



    const [online, setonline] = useState(false);

    useEffect(() => {

        setonline(socket.connected)

    }, [socket])


    useEffect(() => {

        socket.on('connect', () => {
            setonline(true);
        })

    }, [socket])


    useEffect(() => {

        socket.on('disconnect', () => {
            setonline(false);
        })

    }, [socket])


    return {
        socket,
        online
    }
}