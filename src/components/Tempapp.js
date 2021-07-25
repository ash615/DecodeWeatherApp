import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "./css/style.css"; 

const Tempapp = () => {
    const [l, setL] = useState([]);
    const [city, setCity] = useState([]);
    const [search, setSearch] = useState("Mumbai");
    
    useEffect( ()=>{
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d885cc9fb40bb8544d45ecd0fa235751`
            const response = await fetch(url);
            //console.log(response);

             
            const resJson = await response.json();
            //console.log(resJson.sys.country);
            
            setCity(resJson.main);
            
        }
        fetchApi();
    }, [search])

   
    return(
        <>
            <div className= "box">
                <div className="inputData">
                    <input type="search" className="inputField" defaultValue="" placeholder="Enter the City Name..." onChange={ (event)=>{
                         setSearch(event.target.value)
                    } }/>
                </div>
       
       

{
    !city ? (<p> No Data is Found </p>):
(<div>
            <div className="info">
                <h2 className="location">
                <i className="fas fa-street-view" className="city">{search}</i>
                </h2>
                
                <h1 className="temp">
                    <p>Current Temp: {city.temp}</p>             
                </h1>
                
                <h3 className="minmax">
                    <p> MIN: {city.temp_min} || MAX: {city.temp_max}</p>
                </h3>

                <h4 className="humidity">
                    <p> Humidity: {city.humidity}</p>
                </h4>
               
                <h4 className="pressure">
                    <p> Pressure: {city.pressure}</p>
                </h4>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
    </div>

    )}
            </div>
        </>
    );
}

export default Tempapp;