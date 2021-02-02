import React, { useContext, useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';



// img-logo
import london from '../assets/london.jpg'

// Socket
import { SocketContext } from '../context/SocketContext';

export const PlacesList = () => {

  const { socket } = useContext(SocketContext);


   // // Trayendo data
  const [places, setPlaces] = useState([]);

  useEffect(() => {

    socket.on('current-places', (places) => {
      setPlaces(places);
    });

  }, [socket])

  
  // // function vote

  const incre_votar = (id) => {
    socket.emit('incre-place-vote', id);
  }

  const decre_vote = (id) => {
    socket.emit('decre-place-vote', id);
  }

  // delete

  const delete_place = (id) => {
    socket.emit('delete-place', id)
  }
 

  const { response, loading } = useFetch('visit');

  const createRow = () => {

    
    return (
      places.map((place,i) => (
        
      
          <li className={'list-group-item container-places m-3 fadeInUp'}
          style={{order:place.votes}}
          key={place.id}  >
          {/* img and votes */}
          <div className='cont-img-with-votes'>

            <div className='img-place '>
              {
                loading
                ? <img className='img-fluid imgs' src={london} />
                : <img className='img-fluid imgs' src={response[i].urls.thumb } />             
              }
            </div>
            <div className='for-votes'>
              {/* buttons */}
              <button type="button" className="btn btn-info btn-like rounded-0"
                onClick={() => incre_votar(place.id)}
              >
                <i className="far fa-thumbs-up m-1"></i>
                +1
              </button>
              <button type="button" className="btn btn-danger btn-dislike rounded-0"
                onClick={() => decre_vote(place.id)}
              >

                <i className="far fa-thumbs-down m-1"></i>
                  -1
              </button>
            </div>
          </div>
          {/* name and description */}

          <div className='container-name-descip p-2'>
            <h3>{place.name}</h3>
            <p>{place.description}</p>
          </div>

          {/* votes */}
          <div className='votes'>
            <h3 className='text-center m-3'>VOTES</h3>
            <h1 className='text-center'>{place.votes}</h1>

            <button className='btn btn-danger btn-block'
              onClick={() => delete_place(place.id)}
            >
              Delete
            </button>

          </div>
        </li>

     
        

      ))
    )
  }

  return (
    <ol className="list-group flex-column-reverse" >
      {createRow()}
    </ol>
  )
}
