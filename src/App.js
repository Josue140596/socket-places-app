// Styles
import './App.css';


// img-logo
// import logo from './logoBPV.svg';

// components
import { PlaceChart } from './components/PlaceChart';
import { PlacesList } from './components/PlacesList';

// react
import { useContext } from 'react';
import { AddPlace } from './components/AddPlace';
import { SocketContext } from './context/SocketContext';





function App() {


  const { online } = useContext(SocketContext);


  return (

    <div  >

      {/* Nav bar */}
      <nav className="navbar nav-con">
        <div className='d-flex'>

          <h3 className='m-2  '>Best places to visit</h3>
        </div>

        <div className='d-flex'>

          {

            online
              ? <span className='m-4 text-success'>Online</span>
              : <span className='m-4 text-danger'>Ofline</span>
          }

        </div>



      </nav>

      <div className="container-fluid">

        <div className="row">

          {/* places */}
          {
            (online)
            ? <div className="col "><PlacesList /></div>
              
            
            : <div className='loading'>
            <div className="spinner-border" style={{ "width": '3rem', 'height': "3rem" }} role="status"></div>
            </div> 
          }

          {/* Grafica */}
          <div className="col "> 
          <PlaceChart />

            {/* Add place */}

            <AddPlace />
          </div>


        </div>
      </div>

    </div >
  );
}

export default App;
