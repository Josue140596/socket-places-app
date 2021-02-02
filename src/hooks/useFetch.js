import { useState ,useEffect, useRef } from "react"
import { createApi } from 'unsplash-js';
// env
import env from "react-dotenv";

export const useFetch = ( query )=>{

    const isMounted = useRef(true)
    const [state, setstate] = useState({ data: null, loading: true , error: null})
     

    useEffect (()=>{

        return ()=>{

            isMounted.current = false
        }

    },[])

    
  

    const unsplash = createApi({
        accessKey: env.ACCESS_KEY,
       
      });
    let res = unsplash.search.getPhotos({
        query: query,
        page: 1,
        orientation: 'portrait',
      });

    useEffect ( ()=>{

         res
            // .then( resp => resp.json() )
            .then( ({response}) =>{
        
                if (isMounted.current) {
                    
                    setstate({
                        loading: false,
                        error: null,
                        response: response.results
                    })
                }
            })
    }, [query])


    return state;

}