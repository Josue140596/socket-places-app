
# App-socket-places :zap::zap::zap::zap:

This is a web page where you can vote your favorite place to visit also you will see the votes that has each one, another important thing is that you can add your favorite places giving your point of view.

---

### How to install socket.io client :zap:

```
npm i socket.io-client
```

```javascript
import io from 'socket.io-client';
// Use memo es el que va a guardar el estado del socket
    // asi ya no se va a a volver a ejecutar, almenos que cambie
    // de estado
    const socket = useMemo(() => io.connect(severPath,
        {
            transports: ['websocket']
        })
        , [severPath]);

<<<<<<< HEAD
```
=======
```
>>>>>>> 34937937c579b7b4ce0834dc4f7e173cefbeabce
