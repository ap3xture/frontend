import { useParams } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const RideDetails = () => {
    const travelInfo = {
        terminal: 'Oshodi Way',
        destination: 'Victoria Island',
        departure: '3-07-2018 4PM',
        seats: '2',
        owner: 'John Doe',
        contactNumber: '+1234567890'
      };
    const mapInstance = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch route data from TomTom API
                const response = await axios.get('https://api.tomtom.com/routing/1/calculateRoute/24.8607,67.0011:31.5204,74.3587/json', {
                    params: {
                        key: '1ASqcBUAdcT7XOKVpzGOwxgzXwwGRkGi', // Replace with your TomTom API key
                        computeBestOrder: true,
                        routeType: 'fastest',
                        traffic: false,
                    },
                });

                // Initialize map when component mounts
                if (!mapInstance.current) {
                    mapInstance.current = L.map('map-container').setView([24.8607, 67.0011], 7);

                    // Add tile layer (use any tile layer you prefer)
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                        maxZoom: 18,
                    }).addTo(mapInstance.current);

                    // Draw route on map
                    const routePoints = response.data.routes[0].legs[0].points.map(point => [point.latitude, point.longitude]);
                    L.polyline(routePoints, { color: 'blue', weight: 6 }).addTo(mapInstance.current);

                    // Fit map to bounds of the route
                    const bounds = L.latLngBounds(routePoints);
                    mapInstance.current.fitBounds(bounds, { padding: [50, 50] });
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        return () => {
            // Clean up map instance when component unmounts
            if (mapInstance.current) {
                mapInstance.current.remove();
            }
        };
    }, []);

    return (
    <>
    <header>
        <nav className="navbar">
            <a className="logo" href="/">Carpooling App<span>.</span></a>
            <ul className="menu-links">
                <li><a>Username</a></li>
            </ul>
        </nav>
    </header>
        <div className='main-det'>

            <div><table>
      <tbody>
        
        {Object.keys(travelInfo).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{travelInfo[key]}</td>
          </tr>
        ))}
      </tbody>
    </table></div>
            <div id="map-container" style={{ height: '100vh', width: '50%' }}></div>

        </div>

    </>
        
    );
}

export default RideDetails;