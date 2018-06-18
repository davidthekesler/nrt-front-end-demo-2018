import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

class WeatherComponent extends Component {

    constructor() {
        super();
        //keeps track of form data and variables to control view.
        this.state = {
            zip: '',
            error: false,
            weatherDescription: '',
            weatherIcon: '',
            weatherActive: false,
        }
    }

    handleChange = (event) => {
        this.setState({
            zip: event.target.value
        });
    }//end handleChange

    getWeather = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip},us&APPID=938f28e064e0e034ac9c4eaa667d36ed`)
            .then((response) => {
                this.setState({
                    weatherDescription: response.data.weather[0].description,
                    weatherIcon: `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`,
                    temp: ((response.data.main.temp - 273.15) * 1.8) + 32,
                    weatherActive: true,
                    error: false
                })
            }).catch((err) => {
                console.log(err);
                this.setState({
                    weatherActive: false,
                    error: true
                })
            });
    }

    //depending on this.state.weatherActive, this jsx is displayed as HTML.
    weatherBox = () => {
        return (
            <div className="outputItems">
                <img src={this.state.weatherIcon} /><span style={{ 'paddingLeft': '10px', 'paddingRight': '4px' }}>{this.state.weatherDescription}</span> - <span style={{ 'paddingLeft': '4px' }}>{(this.state.temp.toFixed(0))}&#176;</span>
            </div>
        )
    }

    //depending on this.state.error, this jsx is displayed as HTML.
    errorMessage = () => {
        return (
            <div className="outputItems">
                Error receiving weather.
            </div>
        )
    }

    render() {
        return (
            <div id="weatherSection">
                <p className="titlesText">WEATHER</p>
                <div className="inputItems">
                    <input className="input"
                        type="text" onChange={this.handleChange}
                        placeholder="Zip Code" value={this.state.zip} />
                    <button className="button" onClick={this.getWeather}>
                        SUBMIT</button>
                </div>
                {this.state.weatherActive ? this.weatherBox() : null}
                {this.state.error ? this.errorMessage() : null}

            </div>
        )
    }//end render  
}//end WeatherComponent

export default WeatherComponent;

