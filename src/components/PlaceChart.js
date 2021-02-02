import Chart from 'chart.js';

import React, { useContext, useEffect } from 'react';

import { SocketContext } from '../context/SocketContext';


export const PlaceChart = () => {

    const { socket } = useContext(SocketContext);


    useEffect(() => {


        socket.on('current-places', (places) => {
            crearGrafica(places);
        });

        return () => socket.off('current-places');

    }, [socket])


    const crearGrafica = (places = []) => {

        const ctx = document.getElementById('myChart');

        new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: places.map(place=>place.name),
                datasets: [{
                    label: 'Places',
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],

               

                    data: places.map(place=>place.votes)
                }]
            },

            // Configuration options go here
            options: {
                title: {
                    display: true,
                    text: 'Best Place to Visit',
                    fontColor: 'white'
                }
            }
        });

    }




    return (
        <>
            <canvas id="myChart" ></canvas>

        </>
    )
}
